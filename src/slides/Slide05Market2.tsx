const adoptionData = [
  { year: '2020', evs: 250, chargers: 180 },
  { year: '2021', evs: 470, chargers: 310 },
  { year: '2022', evs: 850, chargers: 540 },
  { year: '2023', evs: 1400, chargers: 820 },
  { year: '2024', evs: 2200, chargers: 1100 },
  { year: '2025E', evs: 3500, chargers: 1800 },
  { year: '2030E', evs: 11000, chargers: 6000 },
]

const maxVal = 11000

const keyMetrics = [
  { label: 'EVs registered in UK', value: '1.2M+', change: '+44% YoY' },
  { label: 'Home charge points installed', value: '850K+', change: '+38% YoY' },
  { label: 'Avg. annual EV charging cost (unmanaged)', value: '£780', change: 'vs £120 with myenergi' },
  { label: 'myenergi market share (home EV charging)', value: '~18%', change: '#1 in the UK' },
]

export default function Slide05Market2() {
  return (
    <div
      className="relative min-h-screen flex px-10 py-24 gap-12"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      {/* Left: text + metrics */}
      <div className="w-5/12 flex flex-col justify-center shrink-0">
        <div className="eyebrow mb-4">The Market</div>
        <h1 className="slide-headline mb-5">
          EV Adoption is<br />
          <span style={{ color: '#40ff7a' }}>Accelerating</span>
        </h1>
        <p className="text-sm text-white/50 leading-relaxed mb-8">
          The UK is on course for 11 million EVs by 2030. Every one of those vehicles needs a smart home charger —
          and every smart charger is an opportunity for myenergi.
        </p>

        <div className="space-y-3">
          {keyMetrics.map((m, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 px-4 py-3"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs text-white/45 leading-snug">{m.label}</span>
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[10px] shrink-0"
                  style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
                >
                  {m.change}
                </span>
              </div>
              <div className="mt-1 text-lg font-bold text-white/85">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: bar chart */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="rounded-2xl border border-white/8 p-6 h-full flex flex-col"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="eyebrow mb-2">UK EV & charger growth (thousands)</div>
          <p className="text-xs text-white/35 mb-6">Registered EVs vs home charge points installed</p>

          <div className="flex-1 flex items-end gap-2">
            {adoptionData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col gap-0.5">
                  {/* EV bar */}
                  <div
                    className="w-full rounded-t-sm transition-all duration-700"
                    style={{
                      height: `${(d.evs / maxVal) * 180}px`,
                      background: 'rgba(64,255,122,0.7)',
                      minHeight: '4px',
                    }}
                  />
                  {/* Charger bar */}
                  <div
                    className="w-full rounded-t-sm transition-all duration-700"
                    style={{
                      height: `${(d.chargers / maxVal) * 180}px`,
                      background: 'rgba(64,255,122,0.25)',
                      marginTop: '-100%',
                    }}
                  />
                </div>
                <span className="font-mono text-[9px] text-white/30 rotate-0">{d.year}</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/8">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm" style={{ background: 'rgba(64,255,122,0.7)' }} />
              <span className="text-xs text-white/45">EVs registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm" style={{ background: 'rgba(64,255,122,0.25)' }} />
              <span className="text-xs text-white/45">Home charge points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
