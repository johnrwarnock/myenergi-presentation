import ScrollCTA from '../components/ScrollCTA'

const problems = [
  {
    icon: '⚡',
    tag: 'Rising costs',
    title: 'Energy bills have doubled in three years',
    body: 'UK households now spend an average of £2,500 per year on energy — up from £1,100 in 2021. Consumers are desperate for smarter ways to manage and reduce consumption.',
    stat: '+127%',
    statLabel: 'avg. UK energy bill increase since 2021',
  },
  {
    icon: '☀️',
    tag: 'Wasted renewables',
    title: 'Millions of kWh of solar energy dumped to grid daily',
    body: 'Over 1.3 million UK homes have solar panels, yet most export surplus energy for just 15p/kWh — when they could be using it to charge their EV or heat water for free.',
    stat: '1.3M',
    statLabel: 'UK homes with solar — mostly unoptimised',
  },
  {
    icon: '🏠',
    tag: 'Fragmented systems',
    title: 'Home energy devices don\'t talk to each other',
    body: 'EV chargers, solar panels, batteries and smart meters are all siloed. There\'s no unified intelligence optimising the whole home — until now.',
    stat: '0',
    statLabel: 'connected devices per home without myenergi',
  },
]

export default function Slide02Problem1() {
  return (
    <div
      className="relative min-h-screen flex flex-col px-10 py-24"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #000000 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="eyebrow mb-4">The Problem</div>
        <h1 className="slide-headline mb-4 max-w-2xl">
          The Energy Crisis<br />
          <span style={{ color: '#40ff7a' }}>at Home</span>
        </h1>
        <p className="text-base text-white/50 max-w-xl mb-14 leading-relaxed">
          Rising bills, wasted renewable energy and disconnected technology mean most households
          are paying far more than they should — and contributing more to the grid than necessary.
        </p>

        <div className="space-y-4">
          {problems.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/8 p-6 flex gap-6 transition hover:border-white/14"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Icon + stat */}
              <div className="flex flex-col items-center shrink-0 w-24 gap-1">
                <span className="text-3xl mb-2">{p.icon}</span>
                <span className="stat-figure text-[clamp(1.4rem,3vw,2.2rem)]">{p.stat}</span>
                <span className="text-[10px] text-white/30 text-center leading-tight">{p.statLabel}</span>
              </div>

              {/* Divider */}
              <div className="w-px bg-white/8 shrink-0" />

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]"
                    style={{ background: 'rgba(64,255,122,0.1)', color: '#40ff7a' }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white/85 mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-fade" />
      <ScrollCTA scrollerId="slide-scroller" />
    </div>
  )
}
