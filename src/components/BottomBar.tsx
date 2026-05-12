interface Props {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onRestart: () => void
  nextTitle?: string
}

export default function BottomBar({ current, total, onPrev, onNext, onRestart, nextTitle }: Props) {
  const isLast = current === total - 1
  const slideNum = String(current + 1).padStart(2, '0')
  const totalNum = String(total).padStart(2, '0')

  return (
    <div className="flex items-center justify-between px-6 py-4 pointer-events-auto">
      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 11L5 7l4-4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/50">Previous</span>
      </button>

      {/* Counter */}
      <span className="font-mono text-[10px] text-white/35">
        {slideNum} / {totalNum}
      </span>

      {/* Next / End */}
      <div className="flex items-center gap-3">
        {!isLast && (
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30 hidden md:block">
            PRESS FOR NEXT SLIDE
          </span>
        )}
        <button
          onClick={isLast ? onRestart : onNext}
          className="flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition"
          style={
            isLast
              ? { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }
              : { background: '#40ff7a', color: '#000000' }
          }
        >
          {isLast ? (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2a5 5 0 1 0 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 2v3H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em]">Restart</span>
            </>
          ) : (
            <>
              <span className="text-sm font-semibold whitespace-nowrap">{nextTitle}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
