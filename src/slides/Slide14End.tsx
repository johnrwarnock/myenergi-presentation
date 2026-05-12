import LogoFull from '../components/LogoFull'
import LogoBolt from '../components/LogoBolt'

export default function Slide14End() {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(64,255,122,0.06) 0%, rgba(64,255,122,0.01) 50%, #000000 100%)',
      }}
    >
      {/* Decorative rings */}
      {[300, 480, 660].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/5 pointer-events-none"
          style={{
            width: size,
            height: size,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1 - i * 0.25,
          }}
        />
      ))}

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(64,255,122,0.12) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center px-10 z-10">
        {/* Logo mark */}
        <div
          className="flex h-20 w-20 items-center justify-center rounded-3xl border mb-8 animate-pulse-glow"
          style={{
            background: 'rgba(64,255,122,0.08)',
            borderColor: 'rgba(64,255,122,0.25)',
            boxShadow: '0 0 40px rgba(64,255,122,0.15)',
          }}
        >
          <LogoBolt className="h-12 w-auto" color="#40ff7a" />
        </div>

        {/* Label */}
        <div className="chapter-label mb-6" style={{ color: 'rgba(64,255,122,0.6)' }}>
          Smart Energy · Smarter Homes
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.05] mb-8 text-balance"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Let's Power the<br />
          <span style={{ color: '#40ff7a' }}>Future Together</span>
        </h1>

        <p className="text-base text-white/45 max-w-md mb-10 leading-relaxed">
          Join the myenergi partner network and help your customers take control of their energy —
          while building a smarter, more sustainable business.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            className="rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
            style={{ background: '#40ff7a', color: '#000000' }}
          >
            Become a partner today →
          </button>
          <button
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/65 transition hover:bg-white/10 hover:text-white/80 backdrop-blur-md"
          >
            Visit myenergi.com
          </button>
        </div>

        {/* Full logo */}
        <LogoFull className="h-8 w-auto opacity-60" />

        {/* Footer note */}
        <p className="mt-6 font-mono text-[10px] text-white/20 uppercase tracking-[0.14em]">
          Designed &amp; built in Lincolnshire, UK · myenergi.com
        </p>
      </div>
    </div>
  )
}
