import ScrollCTA from '../components/ScrollCTA'

const testimonials = [
  {
    quote: "myenergi products practically sell themselves once customers understand what they can do. We've doubled our EV charger installs since becoming an approved installer.",
    name: 'James H.',
    role: 'Solar & EV Installer, Yorkshire',
    rating: 5,
  },
  {
    quote: "The technical support from myenergi is second to none. When I have a question, I get an answer from a real engineer — not a chatbot.",
    name: 'Sarah M.',
    role: 'Electrical Contractor, Scotland',
    rating: 5,
  },
  {
    quote: "libbi has transformed how we talk to customers about the whole energy journey. It's not just a charger any more — it's a complete system.",
    name: 'Tom B.',
    role: 'Renewable Energy Installer, South East',
    rating: 5,
  },
]

const partnerBenefits = [
  { icon: '🎓', title: 'Free technical training', desc: 'Accredited myenergi installer certification, online and in-person' },
  { icon: '📦', title: 'Trade pricing & stock', desc: 'Competitive wholesale pricing, next-day delivery from UK warehouses' },
  { icon: '🔧', title: 'Dedicated support line', desc: 'Priority technical helpline with real engineers, not scripts' },
  { icon: '📣', title: 'Marketing materials', desc: 'Branded collateral, product samples and co-marketing opportunities' },
  { icon: '💼', title: 'Installer portal', desc: 'Online quoting, job management and firmware update tools' },
  { icon: '🏆', title: 'Partner recognition', desc: 'Tiered programme: Registered, Approved, Premier & Elite levels' },
]

export default function Slide13Where2() {
  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-10">
          <div className="flex-1">
            <div className="eyebrow mb-4">Where This Takes You</div>
            <h1 className="slide-headline mb-4 max-w-2xl">
              A Network Built<br />
              <span style={{ color: '#40ff7a' }}>on Trust</span>
            </h1>
            <p className="text-base text-white/50 max-w-xl leading-relaxed">
              3,500+ approved installers choose myenergi because we treat our partners as the foundation
              of the business — not an afterthought.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-2">
            <img
              src="/images/product-champion.png"
              alt="Product Champion"
              className="w-auto object-contain"
              style={{ height: 100 }}
            />
          </div>
        </div>

        <div className="flex gap-8 flex-col md:flex-row">
          {/* Left: partner benefits */}
          <div className="flex-1">
            <div className="chapter-label mb-4">Partner programme benefits</div>
            <div className="grid grid-cols-1 gap-3">
              {partnerBenefits.map(b => (
                <div
                  key={b.title}
                  className="flex items-start gap-3 rounded-xl border border-white/7 px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  <span className="text-xl shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white/80">{b.title}</p>
                    <p className="text-xs text-white/40 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: testimonials + CTA */}
          <div className="w-full md:w-72 shrink-0 flex flex-col gap-4">
            <div className="chapter-label mb-0">What our partners say</div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 p-4 flex flex-col gap-3"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-xs" style={{ color: '#40ff7a' }}>★</span>
                  ))}
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="text-xs font-semibold text-white/70">{t.name}</p>
                  <p className="text-xs text-white/35">{t.role}</p>
                </div>
              </div>
            ))}

            {/* Join CTA */}
            <div
              className="rounded-2xl border px-5 py-5 flex flex-col gap-3"
              style={{ background: 'rgba(64,255,122,0.04)', borderColor: 'rgba(64,255,122,0.2)' }}
            >
              <p className="text-sm font-semibold text-white/85">Join 3,500+ partners</p>
              <p className="text-xs text-white/45 leading-relaxed">
                Apply online in minutes. Approval within 48 hours. Start earning with myenergi this week.
              </p>
              <button
                className="w-full rounded-full py-2.5 text-sm font-semibold transition hover:opacity-90"
                style={{ background: '#40ff7a', color: '#000000' }}
              >
                Apply now →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-fade" />
      <ScrollCTA scrollerId="slide-scroller" />
    </div>
  )
}
