import puppeteer from 'puppeteer'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'myenergi-presentation.pdf')
const TOTAL_SLIDES = 14
const BASE_URL = 'http://localhost:3000'
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 }

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

const page = await browser.newPage()
await page.setViewport(VIEWPORT)

await page.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: 30000 })

// Wait for fonts to load
await page.evaluate(() => document.fonts.ready)
await new Promise(r => setTimeout(r, 1500))

const screenshots = []

for (let i = 0; i < TOTAL_SLIDES; i++) {
  if (i > 0) {
    // Click the next-slide button in the bottom bar
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'))
      // Next button is the last button with a slide title (not "Previous")
      const nextBtn = btns.findLast(b => !b.textContent?.includes('Previous') && b.className.includes('rounded-full px-4'))
      nextBtn?.click()
    })
    await new Promise(r => setTimeout(r, 600))
  }

  // Wait for any transitions
  await new Promise(r => setTimeout(r, 400))

  const shot = await page.screenshot({ type: 'jpeg', quality: 92, fullPage: false })
  screenshots.push(shot)
  console.log(`  Captured slide ${i + 1} / ${TOTAL_SLIDES}`)
}

await browser.close()

// Build PDF: write each screenshot as a temp file, then embed via file:// URLs
import { mkdirSync, existsSync } from 'fs'
import { tmpdir } from 'os'

const tmpDir = join(tmpdir(), 'mye-slides')
if (!existsSync(tmpDir)) mkdirSync(tmpDir)

const imgPaths = screenshots.map((shot, i) => {
  const p = join(tmpDir, `slide-${String(i + 1).padStart(2, '0')}.jpg`)
  writeFileSync(p, shot)
  return p
})

const pdfBrowser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--allow-file-access-from-files'],
})
const pdfPage = await pdfBrowser.newPage()
await pdfPage.setViewport(VIEWPORT)

const html = `<!DOCTYPE html><html><head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: 1440px 900px; margin: 0; }
  body { background: #000; }
  .page { width: 1440px; height: 900px; page-break-after: always; overflow: hidden; }
  .page:last-child { page-break-after: avoid; }
  img { width: 1440px; height: 900px; display: block; }
</style></head><body>
${imgPaths.map(p => `<div class="page"><img src="file://${p}"></div>`).join('\n')}
</body></html>`

const htmlPath = join(tmpDir, 'slides.html')
writeFileSync(htmlPath, html)

await pdfPage.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })
await new Promise(r => setTimeout(r, 1000))

await pdfPage.pdf({
  path: OUT,
  width: '1440px',
  height: '900px',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
})

await pdfBrowser.close()
console.log(`\nExported: ${OUT}`)
