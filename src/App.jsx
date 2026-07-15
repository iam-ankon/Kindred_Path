import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Audience from './components/Audience.jsx'
import Services from './components/Services.jsx'
import Stories from './components/Stories.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Audience />
        <Services />
        <Stories />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
