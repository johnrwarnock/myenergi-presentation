import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = join(root, 'dist', 'index.html')
const publicDir = join(root, 'public')
const outPath = join(root, 'myenergi-presentation.html')

let html = readFileSync(htmlPath, 'utf8')

// Inline images — prefer .jpg over .png to keep file size down
html = html.replace(/src="(\/images\/[^"]+)"/g, (match, src) => {
  const filename = src.replace('/images/', '')
  const base = filename.replace(/\.[^.]+$/, '')
  const ext = filename.split('.').pop()

  // Prefer jpg if available (much smaller than png)
  const jpgPath = join(publicDir, 'images', `${base}.jpg`)
  const origPath = join(publicDir, 'images', filename)

  let filePath = null
  let mime = 'image/jpeg'

  if (existsSync(jpgPath)) {
    filePath = jpgPath
    mime = 'image/jpeg'
  } else if (existsSync(origPath)) {
    filePath = origPath
    mime = ext === 'png' ? 'image/png' : 'image/jpeg'
  }

  if (!filePath) {
    console.warn(`  Missing: ${src}`)
    return match
  }

  const data = readFileSync(filePath).toString('base64')
  const kb = Math.round(data.length * 0.75 / 1024)
  console.log(`  Inlined ${filename} → ${base}.${mime.split('/')[1]} (${kb}KB)`)
  return `src="data:${mime};base64,${data}"`
})

// Remove video src so the element renders but doesn't try to load a broken path
html = html.replace(/src="\/videos\/[^"]+"/g, 'src=""')
console.log('  Removed video src (too large to inline)')

writeFileSync(outPath, html)
const kb = Math.round(readFileSync(outPath).length / 1024)
console.log(`\nStandalone file: ${outPath} (${kb}KB / ${(kb/1024).toFixed(1)}MB)`)
