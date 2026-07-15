import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact-inner">
        <div className="contact-copy">
          <span className="eyebrow">Contact us</span>
          <h2>Let's say hello</h2>
          <p>
            Get in touch to chat about accommodation options, community programs,
            support services or employment opportunities. We'd love to hear from you.
          </p>
          <a className="btn btn-primary" href="tel:1800233673">
            Call 1800 233 673 <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <form className="newsletter-card" onSubmit={handleSubmit}>
          <h3>Subscribe to our newsletter</h3>
          <p>Stay updated with our latest news and stories.</p>
          {submitted ? (
            <p className="newsletter-success">Thanks for signing up — welcome aboard!</p>
          ) : (
            <div className="newsletter-row">
              <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="newsletter-input"
              />
              <button className="btn btn-primary" type="submit">Sign up</button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
