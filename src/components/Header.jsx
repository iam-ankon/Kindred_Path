import { useState } from 'react'
import './Header.css'

const NAV = [
  { label: 'Who we support', href: '#audience' },
  { label: 'Our services', href: '#services' },
  { label: 'Client stories', href: '#stories' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-phone" href="tel:1800233673">
            <span aria-hidden="true">☎</span> 1800 233 673
          </a>
          <span className="topbar-tag">A registered NDIS provider, walking alongside you</span>
        </div>
      </div>

      <div className="container nav-row">
        <a href="#main" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="19" fill="var(--coral)" />
              <path d="M11 22c3-8 6-11 9-11s6 3 9 11" stroke="white" strokeWidth="2.6" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="14" r="3" fill="white" />
            </svg>
          </span>
          <span className="brand-word">Kindred Path</span>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
