import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'What services do you provide?',
    a: 'We offer disability accommodation, community and lifestyle programs, employment support and NDIS support coordination, tailored to what matters to you.',
  },
  {
    q: 'Who can access your services?',
    a: "Our services are for people living with disability and their families or carers. You don't need NDIS funding — we also support people who self-fund. If you do have an NDIS plan, our team can help you get started.",
  },
  {
    q: 'Are you a registered NDIS provider?',
    a: "Yes. We're a fully registered NDIS provider, so our services meet the highest standards of quality and compliance.",
  },
  {
    q: 'Where do you offer services?',
    a: 'We support people across New South Wales, Queensland, Victoria and South Australia. Get in touch and we can confirm what is available in your area.',
  },
  {
    q: 'Can families and carers be involved?',
    a: 'Absolutely. We encourage families and carers to be part of the journey — your input helps shape the right supports for your loved one.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq section-pad">
      <div className="container faq-inner">
        <div className="faq-list">
          <span className="eyebrow">FAQs</span>
          <h2>Questions we hear a lot</h2>

          <div className="accordion">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div className="accordion-item" key={item.q}>
                  <button
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className={`accordion-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">+</span>
                  </button>
                  {isOpen && (
                    <p id={`faq-panel-${i}`} className="accordion-panel">
                      {item.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <aside className="faq-card">
          <h3>Still have questions?</h3>
          <p>Reach out — we're here to help you find the answers you need.</p>
          <a className="btn btn-primary" href="#contact">
            Contact us <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  )
}
