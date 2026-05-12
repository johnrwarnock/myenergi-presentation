interface Props {
  onClose: () => void
}

const shortcuts = [
  { key: '→ / Space', label: 'Next slide' },
  { key: '←', label: 'Previous slide' },
  { key: 'F', label: 'Toggle fullscreen' },
  { key: '?', label: 'Show shortcuts' },
  { key: '⌘K', label: 'Search slides' },
  { key: 'Esc', label: 'Close overlay' },
]

export default function ShortcutsModal({ onClose }: Props) {
  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      onKeyDown={handleKey}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-white/80">Keyboard shortcuts</span>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-white/40 transition hover:bg-white/10 hover:text-white/80"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ul className="space-y-2">
          {shortcuts.map(s => (
            <li key={s.key} className="flex items-center justify-between">
              <span className="text-sm text-white/50">{s.label}</span>
              <kbd className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/60">
                {s.key}
              </kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
