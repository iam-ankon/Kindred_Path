import './Services.css'

const GROUPS = [
  {
    name: 'Disability accommodation',
    color: 'var(--coral)',
    items: [
      { title: 'Supported independent living (SIL)', body: 'Live with others or on your own, with support for daily tasks like cleaning and personal care.' },
      { title: 'Specialist disability accommodation (SDA)', body: 'A specialised home for people who need very high levels of support.' },
      { title: 'Short & medium term accommodation', body: 'Respite stays to recharge, or longer stays while funding or housing comes through.' },
      { title: 'Individualised living options', body: 'Tailored support that lets you choose where, how and who you live with.' },
    ],
  },
  {
    name: 'Community & lifestyle support',
    color: 'var(--meadow)',
    items: [
      { title: 'Explore community activity program', body: 'Support to do the activities you already love — and discover new ones.' },
      { title: 'Drop-in community support', body: 'We come to you, for errands, outings or simply trying something new.' },
    ],
  },
  {
    name: 'Employment',
    color: 'var(--sunshine)',
    items: [
      { title: 'Inclusive Employment Australia', body: 'Personalised support to start or grow a sustainable, meaningful career.' },
      { title: 'Youth employment coaching', body: 'For people 25 and under figuring out study, training or their first job.' },
      { title: 'Australian Disability Enterprise', body: 'A supported job at our Ingleburn, NSW factory — bring the curiosity, we bring the rest.' },
    ],
  },
  {
    name: 'In-home & coordination',
    color: 'var(--ocean)',
    items: [
      { title: 'Assistance with daily living', body: 'Friendly support with everyday tasks and errands, right in your own home.' },
      { title: 'NDIS support coordination', body: 'Help getting the most from your NDIS plan, matched to your goals.' },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="services section-pad">
      <div className="container">
        <span className="eyebrow">Our services</span>
        <h2>Support for wherever you're headed</h2>
        <p className="services-lead">
          Accommodation, community, employment and coordination support across New
          South Wales, Queensland, South Australia and Victoria.
        </p>

        <div className="services-groups">
          {GROUPS.map((g) => (
            <div className="service-group" key={g.name}>
              <div className="service-group-head">
                <span className="dot" style={{ background: g.color }} aria-hidden="true" />
                <h3>{g.name}</h3>
              </div>
              <div className="service-items">
                {g.items.map((item) => (
                  <div className="service-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    <a className="service-link" href="#contact">Learn more <span aria-hidden="true">→</span></a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
