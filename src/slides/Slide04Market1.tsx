import ScrollCTA from '../components/ScrollCTA'

const marketStats = [
  { value: '£200B', label: 'Global home energy management market by 2030', sub: 'CAGR 18.2%' },
  { value: '£4.8B', label: 'UK smart home energy market 2025', sub: 'Growing 22% YoY' },
  { value: '36M', label: 'UK homes — target addressable market', sub: '~8M already renewable-ready' },
]

const segments = [
  { label: 'EV Charging Infrastructure', pct: 38, color: '#40ff7a' },
  { label: 'Solar & Diversion Systems', pct: 27, color: '#7BCF00' },
  { label: 'Home Battery Storage', pct: 21, color: '#5AAA00' },
  { label: 'Energy Monitoring & Controls', pct: 14, color: '#3A8000' },
]

export default function Slide04Market1() {
  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="eyebrow mb-4">The Market</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          A{' '}
          <span style={{ color: '#40ff7a' }}>£200 Billion</span>
          <br />Global Opportunity
        </h1>
        <p className="text-base text-white/50 max-w-xl mb-12 leading-relaxed">
          The home energy management market is one of the fastest-growing sectors in cleantech.
          Policy tailwinds, consumer demand and rising energy costs are converging to drive explosive adoption.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {marketStats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/8 p-6 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <span className="stat-figure mb-2">{s.value}</span>
              <span className="text-sm text-white/55 leading-snug mb-2">{s.label}</span>
              <span
                className="mt-auto rounded-full px-2.5 py-0.5 font-mono text-[10px] self-start"
                style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
              >
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Market segment breakdown */}
        <div
          className="rounded-2xl border border-white/8 p-6"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="mb-5">
            <span className="eyebrow">Market segmentation</span>
          </div>
          <div className="space-y-4">
            {segments.map((s, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-white/65">{s.label}</span>
                  <span className="font-mono text-sm font-semibold" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${s.pct}%`, background: s.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy callout */}
        <div
          className="mt-6 rounded-2xl border px-6 py-4 flex items-start gap-4"
          style={{ background: 'rgba(64,255,122,0.04)', borderColor: 'rgba(64,255,122,0.15)' }}
        >
          <span className="text-xl shrink-0 mt-0.5">📋</span>
          <div>
            <p className="text-sm font-semibold text-white/80 mb-1">UK Government mandate</p>
            <p className="text-sm text-white/50 leading-relaxed">
              The UK ban on new petrol and diesel cars from 2035, combined with mandatory smart charging
              requirements for all new homes, positions myenergi at the centre of a legislatively-driven market shift.
            </p>
          </div>
        </div>
      </div>

      <div className="scroll-fade" />
      <ScrollCTA scrollerId="slide-scroller" />
    </div>
  )
}
