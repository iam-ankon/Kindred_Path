import './Stats.css'

const STATS = [
  { value: '80%', label: 'Workplace confidence rate among employment clients' },
  { value: '2,100+', label: 'People supported across Australia in 2025' },
  { value: '75+', label: 'Years spent walking alongside our communities' },
]

export default function Stats() {
  return (
    <section className="stats section-pad">
      <div className="container">
        <div className="stats-head">
          <h2>A leading provider of disability support services</h2>
          <a className="btn btn-ghost" href="#contact">
            Get in touch <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
