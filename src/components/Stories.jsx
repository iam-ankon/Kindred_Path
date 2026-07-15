import './Stories.css'

const STORIES = [
  {
    program: 'Supported independent living',
    quote: "Living together is awesome — it's the best thing I've ever had.",
    person: 'Jean, SIL client',
    color: 'var(--coral)',
  },
  {
    program: 'In-home support',
    quote: 'Having the support to go out and get on with life? Completely life changing.',
    person: 'Samantha, in-home support client',
    color: 'var(--ocean)',
  },
  {
    program: 'Inclusive employment',
    quote: 'I like meeting new people every day. My workplace treats me like family.',
    person: 'Marites, employment client',
    color: 'var(--sunshine)',
  },
  {
    program: 'Youth employment coaching',
    quote: "I'm having the best time, and learning so I can get a job I really love.",
    person: 'Trey, youth coaching client',
    color: 'var(--meadow)',
  },
]

export default function Stories() {
  return (
    <section id="stories" className="stories section-pad">
      <div className="container">
        <span className="eyebrow">Client stories</span>
        <h2>Stories from the people we walk alongside</h2>

        <div className="stories-grid">
          {STORIES.map((s) => (
            <figure className="story-card" key={s.person} style={{ '--accent': s.color }}>
              <span className="story-quote-mark" aria-hidden="true">“</span>
              <blockquote>{s.quote}</blockquote>
              <figcaption>
                <span className="story-program">{s.program}</span>
                <span className="story-person">{s.person}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
