import { useState } from 'react'
import LogoBolt from '../components/LogoBolt'

const nodes = [
  { id: 'zappi', label: 'zappi', sub: 'EV Charger', angle: 0, icon: '⚡' },
  { id: 'eddi', label: 'eddi', sub: 'Solar Diverter', angle: 72, icon: '☀️' },
  { id: 'libbi', label: 'libbi', sub: 'Home Battery', angle: 144, icon: '🔋' },
  { id: 'harvi', label: 'harvi', sub: 'Energy Monitor', angle: 216, icon: '📡' },
  { id: 'app', label: 'myenergi', sub: 'App & Hub', angle: 288, icon: '📱' },
]

const features = [
  'Real-time energy routing between all devices',
  'Solar surplus automatically directed to EV or battery',
  'Grid tariff awareness — charge when energy is cheapest',
  'Remote monitoring & control from anywhere',
  'Compatible with Alexa, Google Home & IFTTT',
  'Regular OTA firmware updates with new features',
]

const RADIUS = 110

function polarToXY(angleDeg: number, r: number, cx: number, cy: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export default function Slide08Platform1() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const cx = 160, cy = 160

  return (
    <div
      className="relative min-h-screen flex px-10 py-24 gap-10"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      {/* Left: text + features */}
      <div className="w-5/12 flex flex-col justify-center shrink-0">
        <div className="eyebrow mb-4">The Platform</div>
        <h1 className="slide-headline mb-5">
          The myenergi<br />
          <span style={{ color: '#40ff7a' }}>Ecosystem</span>
        </h1>
        <p className="text-sm text-white/50 leading-relaxed mb-8">
          Every myenergi device connects to a single intelligent hub — sharing energy data in real time
          so your home always makes the smartest decision about how to generate, store and use energy.
        </p>

        <ul className="space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold"
                style={{ background: 'rgba(64,255,122,0.15)', color: '#40ff7a' }}
              >
                ✓
              </span>
              <span className="text-sm text-white/55 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* Tab row */}
        <div className="mt-8 flex flex-wrap gap-2">
          {nodes.map(n => (
            <button
              key={n.id}
              onClick={() => setActiveNode(activeNode === n.id ? null : n.id)}
              className="rounded-full border px-3 py-1.5 text-xs font-medium transition"
              style={{
                background: activeNode === n.id ? 'rgba(64,255,122,0.12)' : 'rgba(255,255,255,0.04)',
                borderColor: activeNode === n.id ? 'rgba(64,255,122,0.3)' : 'rgba(255,255,255,0.08)',
                color: activeNode === n.id ? '#40ff7a' : 'rgba(255,255,255,0.5)',
              }}
            >
              {n.icon} {n.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right: app video hero */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-black"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            src="/videos/app-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(64,255,122,0.12)' }}
          />
        </div>
      </div>
    </div>
  )
}
