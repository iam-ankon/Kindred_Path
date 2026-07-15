import './Audience.css'

const PATHS = [
  {
    title: 'I am a person with disability',
    body: 'Explore support that fits around your goals, your interests and the life you want to live.',
    icon: 'person',
  },
  {
    title: 'I am a family member or carer',
    body: "Find out how we work alongside you to support someone you love.",
    icon: 'family',
  },
  {
    title: 'I am a support coordinator',
    body: 'Partner with us to line up the right supports for your clients, fast.',
    icon: 'coordinator',
  },
]

const ICONS = {
  person: (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <circle cx="32" cy="22" r="12" fill="var(--coral)" />
      <path d="M10 56c2-16 12-24 22-24s20 8 22 24" fill="none" stroke="var(--ocean-deep)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <circle cx="22" cy="20" r="9" fill="var(--sunshine)" />
      <circle cx="44" cy="24" r="7" fill="var(--meadow)" />
      <path d="M8 56c1-13 8-20 16-20 6 0 11 4 13 10" fill="none" stroke="var(--ocean-deep)" strokeWidth="4" strokeLinecap="round" />
      <path d="M34 56c1-11 6-18 14-18s13 6 14 18" fill="none" stroke="var(--ocean-deep)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  coordinator: (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <rect x="14" y="14" width="36" height="36" rx="8" fill="var(--sky-deep)" />
      <path d="M22 32l7 7 13-15" fill="none" stroke="var(--ocean-deep)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Audience() {
  return (
    <section id="audience" className="audience section-pad">
      <div className="container">
        <span className="eyebrow">Let's start exploring</span>
        <h2>Adventure starts with a single step</h2>

        <div className="audience-grid">
          {PATHS.map((p) => (
            <a className="audience-card" href="#contact" key={p.title}>
              <span className="audience-icon">{ICONS[p.icon]}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="audience-link">Learn more <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>

        <p className="audience-footer">
          Not sure where to start?{' '}
          <a className="inline-link" href="#contact">Let's chat →</a>
        </p>
      </div>
    </section>
  )
}
