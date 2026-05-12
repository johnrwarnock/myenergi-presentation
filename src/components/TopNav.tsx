import { useState } from 'react'
import { slides, chapters } from '../slideConfig'
import LogoFull from './LogoFull'

interface Props {
  current: number
  onNavigate: (index: number) => void
  onSearch: () => void
  onShortcuts: () => void
  onFullscreen: () => void
  isFullscreen: boolean
}

export default function TopNav({ current, onNavigate, onSearch, onShortcuts, onFullscreen, isFullscreen }: Props) {
  const [hoveredChapter, setHoveredChapter] = useState<number | null>(null)

  return (
    <nav className="flex items-center justify-between px-6 py-4 pointer-events-auto">
      {/* Logo */}
      <div className="w-32 shrink-0">
        <LogoFull className="h-7 w-auto" />
      </div>

      {/* Chapter nav */}
      <div className="flex items-center gap-3 relative">
        {chapters.map((chapter, ci) => (
          <div key={ci} className="flex items-center gap-3">
            {ci > 0 && <div className="h-px w-4 bg-white/10" />}
            <div
              className="relative flex flex-col items-center gap-1.5"
              onMouseEnter={() => setHoveredChapter(ci)}
              onMouseLeave={() => setHoveredChapter(null)}
            >
              <span className="chapter-label whitespace-nowrap">{chapter.label}</span>
              <div className="flex items-center gap-1">
                {chapter.slideIndices.map(si => (
                  <button
                    key={si}
                    onClick={() => onNavigate(si)}
                    className={`h-[3px] w-6 rounded-full transition-all duration-200 ${
                      si === current
                        ? 'bg-[#A3D900]'
                        : 'bg-white/25 hover:bg-white/50'
                    }`}
                    title={slides[si].title}
                  />
                ))}
              </div>
              {/* Tooltip */}
              {hoveredChapter === ci && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                  <div className="rounded-lg border border-white/10 bg-[#0E0E16]/95 px-3 py-1.5 backdrop-blur-md whitespace-nowrap">
                    <span className="text-xs text-white/60">{slides[current]?.title}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <NavIconBtn onClick={onSearch} title="Search (⌘K)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </NavIconBtn>
        <NavIconBtn onClick={onShortcuts} title="Shortcuts (?)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M6 6.5C6 5.4 6.9 4.5 8 4.5s2 .9 2 2c0 1.5-2 1.5-2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="8" cy="11.5" r="0.7" fill="currentColor"/>
          </svg>
        </NavIconBtn>
        <NavIconBtn onClick={onFullscreen} title="Fullscreen (F)">
          {isFullscreen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.5 2.5v3h-3M10.5 2.5v3h3M5.5 13.5v-3h-3M10.5 13.5v-3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 5.5v-3h3M13.5 5.5v-3h-3M2.5 10.5v3h3M13.5 10.5v3h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </NavIconBtn>
      </div>
    </nav>
  )
}

function NavIconBtn({ onClick, title, children }: {
  onClick: () => void
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white/80"
    >
      {children}
    </button>
  )
}
