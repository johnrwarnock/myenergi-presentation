import { useState } from 'react'
import ScrollCTA from '../components/ScrollCTA'

type ToggleState = 'check' | 'cross' | 'partial'

const toggleRows: { label: string; initial: ToggleState }[] = [
  { label: 'Fast charge (full grid power)', initial: 'check' },
  { label: 'Eco mode (solar surplus priority)', initial: 'check' },
  { label: 'Eco+ mode (100% renewable only)', initial: 'check' },
  { label: 'Scheduled overnight charging', initial: 'check' },
  { label: 'Boost to minimum charge level', initial: 'check' },
  { label: 'CT clamp integration (harvi)', initial: 'check' },
]

const nextStates: Record<ToggleState, ToggleState> = {
  check: 'partial',
  partial: 'cross',
  cross: 'check',
}

const stateConfig: Record<ToggleState, { icon: string; color: string; bg: string }> = {
  check: { icon: '✓', color: '#40ff7a', bg: 'rgba(64,255,122,0.12)' },
  partial: { icon: '~', color: 'rgba(255,190,50,0.9)', bg: 'rgba(255,190,50,0.08)' },
  cross: { icon: '✗', color: 'rgba(255,80,80,0.8)', bg: 'rgba(255,80,80,0.08)' },
}

const tabs = ['Overview', 'Specifications', 'Eco Modes', 'Installation']

const tabContent: Record<string, React.ReactNode> = {
  Overview: (
    <div className="space-y-3 text-sm text-white/55 leading-relaxed">
      <p>zappi is the world's first EV charger designed from the ground up to work with renewable energy sources. Rather than just drawing from the grid, zappi monitors your solar or wind generation in real time and prioritises using that free energy to charge your vehicle.</p>
      <p>The result: EV owners with solar panels can charge their car for free during daylight hours — and zappi ensures every last watt of surplus generation is put to work instead of exported for a fraction of its value.</p>
      <p>zappi connects to the myenergi hub (or directly via Wi-Fi) and integrates with eddi and libbi to create an intelligent whole-home energy management system.</p>
    </div>
  ),
  Specifications: (
    <div className="grid grid-cols-2 gap-3">
      {[
        ['Output', '7kW single-phase / 22kW three-phase'],
        ['Connector', 'Type 1 or Type 2 (tethered or untethered)'],
        ['Dimensions', '230 × 140 × 90mm'],
        ['IP Rating', 'IP65 (outdoor safe)'],
        ['Communications', 'Wi-Fi, myenergi hub wireless'],
        ['Warranty', '3 years standard, 5 years registered'],
      ].map(([k, v]) => (
        <div key={k} className="rounded-xl border border-white/8 px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="font-mono text-[10px] text-white/30 uppercase tracking-wider mb-0.5">{k}</div>
          <div className="text-sm text-white/70">{v}</div>
        </div>
      ))}
    </div>
  ),
  'Eco Modes': (
    <div className="space-y-3">
      {[
        { name: 'Fast', icon: '⚡', desc: 'Maximum charge speed using grid power. Ignores solar generation.' },
        { name: 'Eco', icon: '☀️', desc: 'Uses solar surplus where available, supplements with grid to maintain minimum charge rate.' },
        { name: 'Eco+', icon: '🌿', desc: 'Charges exclusively on surplus solar. Pauses when no renewable surplus is available.' },
      ].map(m => (
        <div key={m.name} className="flex gap-3 rounded-xl border border-white/8 p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <span className="text-xl shrink-0">{m.icon}</span>
          <div>
            <span className="text-sm font-semibold text-white/80">{m.name} mode</span>
            <p className="text-sm text-white/45 mt-0.5">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  ),
  Installation: (
    <div className="space-y-2 text-sm text-white/55 leading-relaxed">
      <p>zappi must be installed by a qualified electrician and registered with your DNO. myenergi approved installers receive full technical training and dedicated support.</p>
      <ul className="space-y-1.5 mt-3">
        {['Part P compliant installation required', 'DNO notification for OZEV grant eligibility', 'Compatible with consumer units rated 100A+', 'Approved installer network across the UK & Europe'].map(i => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-[#40ff7a] text-xs">✓</span>{i}
          </li>
        ))}
      </ul>
    </div>
  ),
}

export default function Slide10Platform3() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [states, setStates] = useState<ToggleState[]>(toggleRows.map(r => r.initial))

  function toggle(i: number) {
    setStates(s => s.map((st, idx) => idx === i ? nextStates[st] : st))
  }

  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      {/* Header */}
      <div
        className="w-full rounded-2xl border border-white/8 px-6 py-4 mb-8 flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.025)' }}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">⚡</span>
          <div>
            <span className="text-lg font-bold" style={{ color: '#40ff7a' }}>zappi</span>
            <span className="ml-2 chapter-label">Smart EV Charger</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="rounded-full px-3 py-1 font-mono text-[10px]"
            style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
          >
            #1 UK Smart EV Charger
          </div>
          <div
            className="rounded-full px-3 py-1 font-mono text-[10px]"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
          >
            From £799
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-1">
        {/* Left: tabbed content */}
        <div className="flex-1 flex flex-col">
          <div className="eyebrow mb-2">The Platform</div>
          <h1 className="slide-headline mb-4">
            <span style={{ color: '#40ff7a' }}>zappi</span> —<br />Smart EV Charger
          </h1>

          {/* Tab bar */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className="rounded-full border px-4 py-1.5 text-xs font-medium transition"
                style={{
                  background: activeTab === t ? '#40ff7a' : 'rgba(255,255,255,0.04)',
                  borderColor: activeTab === t ? 'transparent' : 'rgba(255,255,255,0.08)',
                  color: activeTab === t ? '#000000' : 'rgba(255,255,255,0.5)',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className="rounded-2xl border border-white/8 p-5 flex-1"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            {tabContent[activeTab]}
          </div>
        </div>

        {/* Right: feature toggle list */}
        <div className="w-72 shrink-0 flex flex-col gap-4">
          <div
            className="rounded-2xl border border-white/8 p-5 flex-1"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="eyebrow mb-4">Feature checklist</div>
            <p className="text-xs text-white/35 mb-4">Click to toggle compatibility status</p>
            <div className="space-y-2">
              {toggleRows.map((row, i) => {
                const s = stateConfig[states[i]]
                return (
                  <button
                    key={i}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition hover:bg-white/3"
                    style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <span
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all"
                      style={{ background: s.bg, color: s.color }}
                    >
                      {s.icon}
                    </span>
                    <span className="text-xs text-white/55">{row.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl border px-5 py-4"
            style={{ background: 'rgba(64,255,122,0.04)', borderColor: 'rgba(64,255,122,0.2)' }}
          >
            <p className="text-sm font-semibold text-white/80 mb-1">Ready to quote?</p>
            <p className="text-xs text-white/45 mb-3">Access trade pricing and configure a full zappi system for your next installation.</p>
            <button
              className="w-full rounded-full py-2 text-sm font-semibold transition hover:opacity-90"
              style={{ background: '#40ff7a', color: '#000000' }}
            >
              Trade portal →
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-fade" />
      <ScrollCTA scrollerId="slide-scroller" />
    </div>
  )
}
