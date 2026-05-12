import { useEffect, useRef, useState } from 'react'

interface Props {
  scrollerId: string
}

export default function ScrollCTA({ scrollerId }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById(scrollerId)
    if (!el) return

    function check() {
      if (!el) return
      const canScroll = el.scrollHeight > el.clientHeight + 20
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 30
      setVisible(canScroll && !atBottom)
    }

    check()
    el.addEventListener('scroll', check, { passive: true })
    const ro = new ResizeObserver(check)
    ro.observe(el)

    return () => {
      el.removeEventListener('scroll', check)
      ro.disconnect()
    }
  }, [scrollerId])

  if (!visible) return null

  function scrollDown() {
    const el = document.getElementById(scrollerId)
    if (el) el.scrollBy({ top: 320, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-20 right-8 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md transition-all hover:bg-white/10 animate-fade-in"
      style={{ pointerEvents: 'auto' }}
    >
      <span className="chapter-label text-white/50">SCROLL</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 1v10M6 11L2 7M6 11l4-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
