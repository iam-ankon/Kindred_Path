import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-sky" aria-hidden="true">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax slice" className="hero-scene">
          <circle cx="1030" cy="90" r="70" fill="var(--sunshine)" opacity="0.9" />
          <path d="M0 420 C 200 360, 340 460, 560 400 S 900 340, 1200 410 V520 H0 Z" fill="var(--sky-deep)" />
          <path d="M0 460 C 220 420, 380 500, 640 450 S 980 400, 1200 460 V520 H0 Z" fill="var(--meadow)" opacity="0.35" />
          {/* kite */}
          <g transform="translate(150,120) rotate(12)">
            <path d="M0 -26 L26 0 L0 26 L-26 0 Z" fill="var(--coral)" />
            <path d="M0 26 Q 10 70 -6 110" stroke="var(--ocean-deep)" strokeWidth="2" fill="none" strokeDasharray="4 6" />
          </g>
          {/* bird */}
          <g transform="translate(870,60)">
            <path d="M0 0 Q 12 -14 24 0 Q 12 -6 0 0 Z" fill="var(--ocean-deep)" />
          </g>
          <g transform="translate(920,110) scale(0.8)">
            <path d="M0 0 Q 12 -14 24 0 Q 12 -6 0 0 Z" fill="var(--ocean-deep)" />
          </g>
        </svg>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Registered NDIS provider</span>
          <h1>Good friends.<br />Great adventures.</h1>
          <p className="hero-lead">
            We're a disability support provider that helps people live independently,
            connect with community, build skills and find work they love — at a pace
            and in a way that's entirely theirs.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Explore with us <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#services">See our services</a>
          </div>
        </div>

        <div className="hero-art" role="img" aria-label="Illustration of two friends walking a dotted trail past a sun, hills and a kite">
          <svg viewBox="0 0 380 380" className="hero-badge">
            <circle cx="190" cy="190" r="188" fill="var(--sky)" stroke="var(--sky-deep)" strokeWidth="2" />
            <path d="M60 300 C 100 200, 150 260, 190 190 S 280 120, 320 90" fill="none" stroke="var(--ocean)" strokeWidth="4" strokeDasharray="2 14" strokeLinecap="round" />
            <circle cx="60" cy="300" r="8" fill="var(--coral)" />
            <circle cx="320" cy="90" r="8" fill="var(--meadow)" />
            {/* two friends */}
            <g transform="translate(150,150)">
              <circle cx="0" cy="0" r="16" fill="var(--sunshine)" />
              <rect x="-12" y="16" width="24" height="34" rx="12" fill="var(--coral)" />
              <circle cx="34" cy="10" r="14" fill="#f3c8a4" />
              <rect x="23" y="24" width="22" height="30" rx="11" fill="var(--ocean)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
