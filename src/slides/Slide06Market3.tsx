const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L10 10H5l4 5-2 8 7-4 7 4-2-8 4-5h-5L14 4z" stroke="#40ff7a" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(64,255,122,0.08)"/>
      </svg>
    ),
    label: 'Revenue stream 1',
    title: 'Product sales & margin',
    body: 'Industry-leading installer margins on zappi, eddi, libbi and harvi. Competitive pricing structures, volume discounts and dedicated account management for registered partners.',
    metric: '25–35%',
    metricLabel: 'typical installer margin',
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Revenue stream 2',
    title: 'Recurring service & support',
    body: 'Annual maintenance packages, remote monitoring and priority support plans generate predictable recurring income beyond the initial installation.',
    metric: '£180–£350',
    metricLabel: 'per system per year',
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22l6-6 4 4 6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Revenue stream 3',
    title: 'Ecosystem upsell opportunities',
    body: 'Every zappi installation opens the door to eddi, libbi and harvi. Customers with one myenergi product convert to multi-product at 3× the rate of non-myenergi customers.',
    metric: '3×',
    metricLabel: 'upsell conversion rate',
    highlight: false,
  },
]

export default function Slide06Market3() {
  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="eyebrow mb-4">The Market</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          The Installer<br />
          <span style={{ color: '#40ff7a' }}>Advantage</span>
        </h1>
        <p className="text-base text-white/50 max-w-xl mb-12 leading-relaxed">
          Partnering with myenergi isn't just about selling hardware — it's about building a
          sustainable, recurring business around the most trusted brand in home energy management.
        </p>

        {/* Three-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border flex flex-col"
              style={{
                background: c.highlight ? 'rgba(64,255,122,0.04)' : 'rgba(255,255,255,0.025)',
                borderColor: c.highlight ? 'rgba(64,255,122,0.2)' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border"
                style={{
                  background: c.highlight ? 'rgba(64,255,122,0.08)' : 'rgba(255,255,255,0.04)',
                  borderColor: c.highlight ? 'rgba(64,255,122,0.18)' : 'rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.4)',
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
              <h3 className="text-sm font-semibold text-white/85 leading-snug mb-3">{c.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed flex-1">{c.body}</p>

              {/* Metric */}
              <div
                className="mt-5 rounded-xl border px-4 py-3 flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: c.highlight ? '#40ff7a' : 'rgba(64,255,122,0.7)' }}
                >
                  {c.metric}
                </span>
                <span className="text-xs text-white/35">{c.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-8 rounded-2xl border border-white/8 px-6 py-4 flex items-center justify-between gap-4"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <p className="text-sm text-white/55">
            Ready to become a myenergi approved installer? Join{' '}
            <span className="font-semibold text-white/75">3,500+ partner businesses</span> across the UK and Europe.
          </p>
          <button
            className="shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition hover:opacity-90"
            style={{ background: '#40ff7a', color: '#000000' }}
          >
            Become a partner →
          </button>
        </div>
      </div>
    </div>
  )
}
