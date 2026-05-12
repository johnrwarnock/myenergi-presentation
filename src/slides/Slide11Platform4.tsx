const connectivity = [
  {
    id: 'harvi',
    emoji: '📡',
    title: 'harvi',
    sub: 'Wireless CT Clamp',
    color: '#40ff7a',
    description: 'No cabling required. harvi clips onto your existing electricity supply cables and wirelessly transmits generation and consumption data to the myenergi hub — unlocking smart charging without rewiring.',
    bullets: ['Wireless 868MHz transmission', 'Up to 3 CT inputs', '300m+ range (line of sight)', 'Battery or supply powered'],
  },
  {
    id: 'hub',
    emoji: '🔗',
    title: 'myenergi hub',
    sub: 'Connectivity Hub',
    color: '#7BCF00',
    description: 'The intelligent centre of your myenergi system. The hub coordinates all devices, connects them to the internet, enables remote access via the app, and runs local automation even without connectivity.',
    bullets: ['Ethernet + Wi-Fi connectivity', 'Controls all myenergi devices', 'Local operation without internet', 'OTA firmware updates'],
  },
]

const appFeatures = [
  { icon: '⚡', label: 'Live energy dashboard' },
  { icon: '📅', label: 'Charging schedules' },
  { icon: '💰', label: 'Cost & savings tracker' },
  { icon: '📊', label: 'Historical energy reports' },
  { icon: '🌍', label: 'Carbon footprint data' },
  { icon: '🔔', label: 'Smart notifications' },
  { icon: '🤖', label: 'Automation & IFTTT' },
  { icon: '👥', label: 'Multi-device management' },
]

export default function Slide11Platform4() {
  return (
    <div
      className="relative min-h-screen flex px-10 py-24 gap-10"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      {/* Left: two product cards */}
      <div className="w-5/12 flex flex-col justify-center gap-5 shrink-0">
        <div>
          <div className="eyebrow mb-3">The Platform</div>
          <h1 className="slide-headline mb-4">
            Complete Home<br />
            <span style={{ color: '#40ff7a' }}>Connectivity</span>
          </h1>
          <p className="text-sm text-white/50 leading-relaxed">
            harvi and the myenergi hub complete the ecosystem — providing wireless energy monitoring and
            seamless cloud connectivity that ties every device together.
          </p>
        </div>

        {connectivity.map(c => (
          <div
            key={c.id}
            className="rounded-2xl border p-5"
            style={{ background: 'rgba(255,255,255,0.025)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{c.emoji}</span>
              <div>
                <span className="font-semibold text-sm" style={{ color: c.color }}>{c.title}</span>
                <div className="chapter-label" style={{ color: 'rgba(255,255,255,0.3)' }}>{c.sub}</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-3">{c.description}</p>
            <ul className="space-y-1.5">
              {c.bullets.map(b => (
                <li key={b} className="flex items-center gap-2 text-xs text-white/45">
                  <span style={{ color: c.color }} className="text-[10px]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right: app panel */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="rounded-3xl border border-white/8 p-6 h-full flex flex-col"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {/* App header */}
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
              style={{ background: 'rgba(64,255,122,0.1)', border: '1px solid rgba(64,255,122,0.2)' }}
            >
              📱
            </div>
            <div>
              <p className="font-semibold text-white/85">myenergi app</p>
              <p className="text-xs text-white/35">iOS · Android · Web portal</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span
                className="rounded-full px-2.5 py-1 font-mono text-[10px]"
                style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
              >
                4.8 ★
              </span>
              <span className="text-xs text-white/30">App Store</span>
            </div>
          </div>

          {/* App feature grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {appFeatures.map(f => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-white/6 px-3 py-3"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <span className="text-xl shrink-0">{f.icon}</span>
                <span className="text-sm text-white/60 leading-snug">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-5 rounded-2xl border px-5 py-4 flex items-center justify-between"
            style={{ background: 'rgba(64,255,122,0.04)', borderColor: 'rgba(64,255,122,0.15)' }}
          >
            <div>
              <p className="text-sm font-semibold text-white/80">See live energy data</p>
              <p className="text-xs text-white/40">Demo the app with sample data</p>
            </div>
            <button
              className="rounded-full px-4 py-2 text-sm font-semibold transition hover:opacity-90 shrink-0"
              style={{ background: '#40ff7a', color: '#000000' }}
            >
              View demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
