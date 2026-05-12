import { useState, useEffect, useCallback, useRef } from 'react'
import { slides } from './slideConfig'
import TopNav from './components/TopNav'
import BottomBar from './components/BottomBar'
import SearchOverlay from './components/SearchOverlay'
import ShortcutsModal from './components/ShortcutsModal'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showShortcuts, setShowShortcuts] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const transitioning = useRef(false)

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= slides.length || transitioning.current) return
    transitioning.current = true
    setExiting(current)
    setCurrent(index)
    setTimeout(() => {
      setExiting(null)
      transitioning.current = false
    }, 380)
  }, [current])

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showSearch || showShortcuts) return
      if (e.key === 'Escape') return
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      else if (e.key === '?') setShowShortcuts(true)
      else if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setShowSearch(true) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, showSearch, showShortcuts])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {})
    else document.exitFullscreen().catch(() => {})
  }

  const CurrentSlide = slides[current].component
  const ExitingSlide = exiting !== null ? slides[exiting].component : null

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ background: '#000000' }}>
      {/* Slide stack */}
      <div className="absolute inset-0">
        {ExitingSlide && (
          <div key={`exit-${exiting}`} className="absolute inset-0 pointer-events-none animate-slide-out">
            <div className="h-full w-full overflow-y-auto overflow-x-hidden slide-scroll">
              <ExitingSlide />
            </div>
          </div>
        )}
        <div key={`slide-${current}`} className="absolute inset-0 animate-slide-in">
          <div id="slide-scroller" className="h-full w-full overflow-y-auto overflow-x-hidden slide-scroll">
            <CurrentSlide />
          </div>
        </div>
      </div>

      {/* Top nav overlay */}
      <div className="absolute inset-x-0 top-0 z-40 pointer-events-none">
        <div className="bg-gradient-to-b from-black/80 via-black/40 to-transparent pb-12">
          <TopNav
            current={current}
            onNavigate={goTo}
            onSearch={() => setShowSearch(true)}
            onShortcuts={() => setShowShortcuts(true)}
            onFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </div>
      </div>

      {/* Bottom bar overlay */}
      <div className="absolute inset-x-0 bottom-0 z-40 pointer-events-none">
        <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
          <BottomBar
            current={current}
            total={slides.length}
            onPrev={goPrev}
            onNext={goNext}
            onRestart={() => goTo(0)}
            nextTitle={current < slides.length - 1 ? slides[current + 1].title : undefined}
          />
        </div>
      </div>

      {/* Overlays */}
      {showSearch && (
        <SearchOverlay
          onClose={() => setShowSearch(false)}
          onNavigate={(i) => { goTo(i); setShowSearch(false) }}
        />
      )}
      {showShortcuts && (
        <ShortcutsModal onClose={() => setShowShortcuts(false)} />
      )}
    </div>
  )
}
