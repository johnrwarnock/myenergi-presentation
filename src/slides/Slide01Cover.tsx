import LogoFull from '../components/LogoFull'
import LogoBolt from '../components/LogoBolt'
import ScrollCTA from '../components/ScrollCTA'

const stats = [
  { value: '500K+', label: 'Devices installed' },
  { value: '40+', label: 'Countries reached' },
  { value: '600MWh', label: 'Clean energy managed daily' },
]

const bullets = [
  { text: 'Smart EV charging', highlight: 'zappi' },
  { text: 'Solar & wind energy diversion', highlight: 'eddi' },
  { text: 'Home battery storage', highlight: 'libbi' },
  { text: 'Wireless energy monitoring', highlight: 'harvi' },
]

export default function Slide01Cover() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: '#000000' }}>
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      {/* Top logos */}
      <div className="relative flex justify-between items-start px-10 pt-24 pb-0">
        <LogoFull className="h-9 w-auto" />
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <LogoBolt className="h-5 w-auto" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
            Smart Energy Partner
          </span>
        </div>
      </div>

      {/* Main content: two columns */}
      <div className="relative flex-1 flex flex-row items-center px-10 py-12 gap-12">
        {/* Left: text + bullets */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <div className="eyebrow mb-5">Powering the Smart Energy Revolution</div>
          <h1 className="slide-headline mb-8">
            Smart Energy.<br />
            <span style={{ color: '#40ff7a' }}>Smarter</span> Homes.
          </h1>
          <p className="text-base text-white/55 mb-10 max-w-xl leading-relaxed">
            myenergi builds the UK's most loved home energy management ecosystem — connecting EV chargers,
            solar diverters, home batteries and energy monitors into one seamless platform.
          </p>
          <ul className="space-y-3">
            {bullets.map(b => (
              <li key={b.highlight} className="flex items-center gap-3">
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold shrink-0"
                  style={{ background: 'rgba(64,255,122,0.15)', color: '#40ff7a' }}
                >
                  ✓
                </span>
                <span className="text-sm text-white/60">
                  {b.text} —{' '}
                  <span className="font-semibold" style={{ color: '#40ff7a' }}>{b.highlight}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: app render centred */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/images/app.png"
            alt="myenergi app"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>

      {/* Stat counters */}
      <div className="relative px-10 pb-24">
        <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <span className="stat-figure mb-1">{s.value}</span>
              <span className="text-xs text-white/40 text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-fade" />
      <ScrollCTA scrollerId="slide-scroller" />
    </div>
  )
}
