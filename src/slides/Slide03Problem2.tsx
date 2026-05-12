const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L8 8H3l4 4-2 7 7-4 7 4-2-7 4-4h-5L12 2z" stroke="#40ff7a" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Charging costs',
    title: 'Charging at home at the wrong time costs 4× more',
    body: 'Peak-rate home charging can cost up to 60p/kWh. Smart solar-integrated charging brings that to near zero for EV drivers with renewable generation.',
    highlight: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
    label: 'Grid strain',
    title: 'Unmanaged EV charging risks destabilising the grid',
    body: 'By 2030, 11M EVs on UK roads need to charge. Without smart load management, simultaneous evening charging creates dangerous demand peaks.',
    highlight: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h4l3-7 4 14 3-7h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Installer complexity',
    title: 'Customers want one solution, not five separate systems',
    body: 'Installers are losing deals to confusion. Customers ask about EV chargers, then solar, then batteries — without a unified platform, every answer requires a different vendor.',
    highlight: false,
  },
]

export default function Slide03Problem2() {
  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="eyebrow mb-4">The Problem — Continued</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          The EV Revolution<br />Needs{' '}
          <span style={{ color: '#40ff7a' }}>Smarter Charging</span>
        </h1>
        <p className="text-base text-white/50 max-w-xl mb-12 leading-relaxed">
          Electric vehicles are transforming transport — but the charging infrastructure hasn't kept pace.
          The gap between EV adoption and intelligent energy management is where myenergi operates.
        </p>

        {/* Three-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border transition"
              style={{
                background: c.highlight ? 'rgba(64,255,122,0.05)' : 'rgba(255,255,255,0.025)',
                borderColor: c.highlight ? 'rgba(64,255,122,0.25)' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{
                  background: c.highlight ? 'rgba(64,255,122,0.1)' : 'rgba(255,255,255,0.05)',
                  borderColor: c.highlight ? 'rgba(64,255,122,0.2)' : 'rgba(255,255,255,0.08)',
                  color: c.highlight ? '#40ff7a' : 'rgba(255,255,255,0.5)',
                }}
              >
                {c.icon}
              </div>
              <div
                className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em]"
                style={{ color: c.highlight ? '#40ff7a' : 'rgba(255,255,255,0.3)' }}
              >
                {c.label}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white/85 leading-snug">{c.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-8 rounded-2xl border border-white/8 px-6 py-4 flex items-center gap-4"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: 'rgba(64,255,122,0.12)' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v14M2 9h14" stroke="#40ff7a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-sm text-white/55">
            <span className="font-semibold text-white/80">myenergi's answer: </span>
            One ecosystem. One app. One platform that connects EV charging, solar diversion, and battery storage — intelligently managed in real time.
          </p>
        </div>
      </div>
    </div>
  )
}
