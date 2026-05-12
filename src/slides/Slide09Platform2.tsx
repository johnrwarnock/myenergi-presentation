import { useState } from 'react'

const products = [
  {
    id: 'zappi',
    image: '/images/zappi.png',
    name: 'zappi',
    tagline: 'Smart EV Charger',
    color: '#40ff7a',
    description: 'The UK\'s #1 smart EV charger. zappi automatically uses surplus solar or wind energy to charge your vehicle — so you can drive on sunshine for free.',
    specs: ['7kW or 22kW variants', '3 charging modes: Fast, Eco, Eco+', 'Solar & wind compatible', 'Works without internet', 'App controlled'],
    price: 'From £799 inc. VAT',
    badge: 'Best Seller',
  },
  {
    id: 'eddi',
    image: '/images/eddi.png',
    name: 'eddi',
    tagline: 'Solar Diverter',
    color: '#56c1dd',
    description: 'Stop wasting solar energy. eddi diverts surplus renewable electricity to your hot water cylinder or space heating — turning excess generation into free hot water.',
    specs: ['Up to 3.68kW diversion', 'Dual heater control', 'Works with any immersion heater', 'Pairs with zappi', 'Detailed energy reporting'],
    price: 'From £299 inc. VAT',
    badge: null,
  },
  {
    id: 'libbi',
    image: '/images/libbi2.png',
    name: 'libbi',
    tagline: 'Home Battery',
    color: '#b2f903',
    description: 'Store solar energy for when you need it most. libbi home battery integrates with the whole myenergi ecosystem — charge from solar, discharge to power your home or EV.',
    specs: ['5kWh to 20kWh capacity', 'AC or DC coupled', '97% round-trip efficiency', '10-year warranty', 'Grid tariff optimisation'],
    price: 'From £3,999 inc. VAT',
    badge: 'New',
  },
]

export default function Slide09Platform2() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: '#000000' }}
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="eyebrow mb-4">The Platform</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          Meet the<br />
          <span style={{ color: '#40ff7a' }}>Products</span>
        </h1>
        <p className="text-base text-white/50 max-w-xl mb-10 leading-relaxed">
          Three complementary devices. One unified ecosystem. Each product is powerful alone —
          together they form the most complete home energy management system available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map(p => (
            <div
              key={p.id}
              className="rounded-2xl border flex flex-col transition-all"
              style={{
                background: 'rgba(255,255,255,0.025)',
                borderColor: expanded === p.id ? `${p.color}33` : 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="p-6">
                {/* Badge */}
                {p.badge ? (
                  <span
                    className="mb-3 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                    style={{ background: `${p.color}1A`, color: p.color }}
                  >
                    {p.badge}
                  </span>
                ) : (
                  <div className="mb-3 h-5" />
                )}

                {/* Product render */}
                <div className="h-40 w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-black">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="mb-1">
                  <span className="text-xl font-bold" style={{ color: p.color }}>{p.name}</span>
                </div>
                <div className="chapter-label mb-3">{p.tagline}</div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{p.description}</p>

                {expanded === p.id && (
                  <ul className="space-y-1.5 mb-4">
                    {p.specs.map(s => (
                      <li key={s} className="flex items-center gap-2 text-sm text-white/55">
                        <span style={{ color: p.color }} className="text-xs">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/8">
                  <span className="text-xs font-semibold text-white/55">{p.price}</span>
                  <button
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    className="rounded-full border px-3 py-1 text-xs font-medium transition"
                    style={{
                      borderColor: 'rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {expanded === p.id ? 'Close ↑' : 'Open →'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* harvi callout */}
        <div
          className="mt-5 rounded-2xl border border-white/8 px-5 py-4 flex items-center gap-4"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <img src="/images/harvi.jpg" alt="harvi" className="h-12 w-auto object-contain shrink-0 rounded-lg bg-black" />
          <div>
            <span className="text-sm font-semibold text-white/75">harvi</span>
            <span className="mx-2 text-white/20">·</span>
            <span className="chapter-label">Wireless CT Clamp</span>
            <p className="text-sm text-white/45 mt-0.5">Wireless energy monitoring — no CT tails wiring needed. Sends generation and consumption data to the myenergi hub wirelessly. From £99.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
