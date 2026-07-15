import './Footer.css'

const COLUMNS = [
  {
    title: 'Who we support',
    links: ['Person with disability', 'Family or carer', 'Support coordinator'],
  },
  {
    title: 'Our services',
    links: ['Accommodation', 'Community & lifestyle', 'Employment', 'In-home support', 'Support coordination'],
  },
  {
    title: 'Resources',
    links: ['FAQs', 'Content hub', 'Client stories'],
  },
  {
    title: 'About',
    links: ['Our history', 'Our leadership', 'Publications & policies', 'Careers'],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="acknowledgement">
          We respectfully acknowledge the Traditional Custodians of the lands throughout
          Australia on which we live and work, and their continuing connection to land,
          sea and community. We pay our respects to Elders past and present.
        </p>

        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-word">Kindred Path</span>
            <a className="footer-phone" href="tel:1800233673">1800 233 673</a>
            <p>
              Level 6, 85 Macquarie Street<br />
              Parramatta NSW 2150
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#main">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kindred Path. A registered NDIS provider.</p>
          <div className="footer-legal">
            <a href="#main">Terms &amp; Conditions</a>
            <a href="#main">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
