const milestones = [
  { year: '2016', event: 'myenergi founded in Lincolnshire', type: 'origin' },
  { year: '2017', event: 'zappi launched — first smart EV charger with solar integration', type: 'product' },
  { year: '2019', event: 'eddi solar diverter launched', type: 'product' },
  { year: '2020', event: '100,000 devices installed across the UK', type: 'milestone' },
  { year: '2021', event: 'European expansion — 12 new markets', type: 'growth' },
  { year: '2022', event: 'libbi home battery launched · 300,000 devices milestone', type: 'product' },
  { year: '2023', event: '500,000 devices · £100M+ revenue milestone', type: 'milestone' },
  { year: '2024', event: 'harvi 2.0 · myenergi hub Gen 3 · 40+ country distribution', type: 'growth' },
  { year: '2025+', event: 'Vehicle-to-home (V2H) technology · AI-powered energy optimisation', type: 'future' },
]

const typeConfig: Record<string, { color: string; dot: string }> = {
  origin: { color: 'rgba(255,255,255,0.5)', dot: 'rgba(255,255,255,0.3)' },
  product: { color: '#40ff7a', dot: '#40ff7a' },
  milestone: { color: '#7BCF00', dot: '#7BCF00' },
  growth: { color: 'rgba(64,255,122,0.7)', dot: 'rgba(64,255,122,0.7)' },
  future: { color: 'rgba(64,255,122,0.4)', dot: 'rgba(64,255,122,0.25)' },
}

const growthStats = [
  { value: '500K+', label: 'Devices installed globally', sub: 'As of 2024' },
  { value: '3,500+', label: 'Approved installer partners', sub: 'UK & Europe' },
  { value: '40+', label: 'Countries distributing', sub: 'And growing' },
]

export default function Slide12Where1() {
  return (
    <div
      className="relative min-h-screen flex px-10 py-24 gap-10"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      {/* Left: stats */}
      <div className="w-5/12 flex flex-col justify-center shrink-0">
        <div className="eyebrow mb-4">Where This Takes You</div>
        <h1 className="slide-headline mb-5">
          Growth That<br />
          <span style={{ color: '#40ff7a' }}>Speaks for Itself</span>
        </h1>
        <p className="text-sm text-white/50 leading-relaxed mb-8">
          In just 8 years, myenergi has grown from a Lincolnshire startup to the UK's most trusted home energy
          management brand — and the acceleration is only getting faster.
        </p>

        <div className="space-y-4">
          {growthStats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/8 px-5 py-4 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <div>
                <div className="stat-figure text-[clamp(1.6rem,3vw,2.4rem)]">{s.value}</div>
                <div className="text-sm text-white/55">{s.label}</div>
              </div>
              <div className="ml-auto">
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[10px]"
                  style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
                >
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: timeline */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="rounded-2xl border border-white/8 p-6"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="eyebrow mb-5">Company timeline</div>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[72px] top-0 bottom-0 w-px"
              style={{ background: 'rgba(64,255,122,0.15)' }}
            />

            <div className="space-y-4">
              {milestones.map((m, i) => {
                const cfg = typeConfig[m.type]
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-white/30 w-12 shrink-0 pt-0.5 text-right">{m.year}</span>
                    <div className="relative flex items-start gap-3 pl-5">
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#000000] shrink-0"
                        style={{ background: cfg.dot }}
                      />
                      <p
                        className="text-sm leading-snug"
                        style={{ color: m.type === 'future' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.65)' }}
                      >
                        {m.event}
                        {m.type === 'future' && (
                          <span
                            className="ml-2 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                            style={{ background: 'rgba(64,255,122,0.08)', color: 'rgba(64,255,122,0.5)' }}
                          >
                            Upcoming
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
