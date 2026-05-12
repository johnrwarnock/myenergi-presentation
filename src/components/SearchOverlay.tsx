import { useState, useEffect, useRef } from 'react'
import { slides } from '../slideConfig'

interface Props {
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function SearchOverlay({ onClose, onNavigate }: Props) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = slides.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setFocused(0)
  }, [query])

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { onClose(); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)) }
    if (e.key === 'Enter' && filtered[focused]) {
      const originalIndex = slides.indexOf(filtered[focused])
      onNavigate(originalIndex)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKey}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/30">
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Jump to slide…"
            className="flex-1 bg-transparent text-sm text-white/90 placeholder-white/30 outline-none"
          />
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/30">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-sm text-white/30">No slides found</li>
          )}
          {filtered.map((slide, i) => {
            const originalIndex = slides.indexOf(slide)
            return (
              <li key={slide.id}>
                <button
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition ${
                    i === focused ? 'bg-white/8' : 'hover:bg-white/5'
                  }`}
                  onClick={() => onNavigate(originalIndex)}
                  onMouseEnter={() => setFocused(i)}
                >
                  <span className="font-mono text-[10px] text-white/25 w-5 shrink-0">
                    {String(slide.id).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-white/75">{slide.title}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
