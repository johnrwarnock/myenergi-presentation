import { useState } from 'react'

type State = 'check' | 'cross' | 'partial'

interface Row {
  metric: string
  youToday: string[]
  marketLeading: State
  myenergi: State
  improvement: string
}

const youTodayOptions = ['No smart charger', 'Basic EV charger', 'Solar + no integration', 'Multiple separate apps']

const rows: Row[] = [
  { metric: 'Smart solar EV charging', youToday: youTodayOptions, marketLeading: 'partial', myenergi: 'check', improvement: 'Up to 0p/kWh' },
  { metric: 'Real-time energy monitoring', youToday: youTodayOptions, marketLeading: 'partial', myenergi: 'check', improvement: 'Full visibility' },
  { metric: 'Grid tariff optimisation', youToday: youTodayOptions, marketLeading: 'cross', myenergi: 'check', improvement: 'Auto-schedule' },
  { metric: 'Battery + EV + solar integration', youToday: youTodayOptions, marketLeading: 'cross', myenergi: 'check', improvement: 'One ecosystem' },
  { metric: 'Offline operation', youToday: youTodayOptions, marketLeading: 'cross', myenergi: 'check', improvement: 'Always works' },
  { metric: 'UK-designed & supported', youToday: youTodayOptions, marketLeading: 'partial', myenergi: 'check', improvement: 'Local expertise' },
]

const icons: Record<State, { icon: string; color: string; bg: string }> = {
  check: { icon: '✓', color: '#40ff7a', bg: 'rgba(64,255,122,0.12)' },
  cross: { icon: '✗', color: 'rgba(255,80,80,0.8)', bg: 'rgba(255,80,80,0.08)' },
  partial: { icon: '~', color: 'rgba(255,200,50,0.8)', bg: 'rgba(255,200,50,0.08)' },
}

function StateCell({ state }: { state: State }) {
  const s = icons[state]
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
      style={{ background: s.bg, color: s.color }}
    >
      {s.icon}
    </span>
  )
}

export default function Slide07Market4() {
  const [selections, setSelections] = useState<Record<number, string>>({})

  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="eyebrow mb-4">The Market</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          How myenergi<br />
          <span style={{ color: '#40ff7a' }}>Compares</span>
        </h1>
        <p className="text-sm text-white/50 max-w-xl mb-8 leading-relaxed">
          Select your current setup to see exactly where myenergi makes the difference.
        </p>

        {/* Table */}
        <div
          className="rounded-2xl border border-white/8 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-5 gap-0 border-b border-white/8 px-4 py-3"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">Metric</div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider text-center">You Today</div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider text-center">Market Average</div>
            <div
              className="text-xs font-semibold uppercase tracking-wider text-center"
              style={{ color: '#40ff7a' }}
            >
              myenergi
            </div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider text-center">With myenergi</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-0 items-center px-4 py-3.5 border-b border-white/5 last:border-0 hover:bg-white/3 transition"
            >
              <div className="text-sm text-white/70">{row.metric}</div>

              {/* You Today — editable dropdown */}
              <div className="flex justify-center">
                <select
                  value={selections[i] ?? row.youToday[0]}
                  onChange={e => setSelections(s => ({ ...s, [i]: e.target.value }))}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/55 outline-none max-w-[130px] cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  {row.youToday.map(o => (
                    <option key={o} value={o} style={{ background: '#0a0a0a' }}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <StateCell state={row.marketLeading} />
              </div>

              <div className="flex justify-center">
                <StateCell state={row.myenergi} />
              </div>

              <div className="flex justify-center">
                <span
                  className="rounded-full px-3 py-0.5 text-xs font-semibold"
                  style={{ background: 'rgba(64,255,122,0.12)', color: '#40ff7a' }}
                >
                  {row.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-6">
          {Object.entries(icons).map(([k, v]) => (
            <div key={k} className="flex items-center gap-2">
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: v.bg, color: v.color }}
              >
                {v.icon}
              </span>
              <span className="text-xs text-white/35 capitalize">{k === 'check' ? 'Fully supported' : k === 'cross' ? 'Not available' : 'Partial'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
