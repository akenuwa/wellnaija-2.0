'use client'

import { useState } from 'react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wellnaija-logo-on-teal-bUzycqEcIXT31dA42saD3bRxRxj79D.png'

const journey = [
  ['01', 'Tell us what you need', 'Share your symptoms, goals, or questions in a safe, private space.'],
  ['02', 'Get matched to care', 'We connect you with trusted professionals and practical next steps.'],
  ['03', 'Feel supported', 'Track your progress and keep your wellbeing moving forward.'],
]

const audience = [
  ['For you', 'Clear, compassionate guidance for every stage of your health journey.', 'Start your journey'],
  ['For providers', 'A simpler way to reach the people who need your expertise most.', 'Join our network'],
  ['For organisations', 'Better tools to make wellbeing part of everyday life at work and beyond.', 'Partner with us'],
]

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="WellNaija home">
            <img src={logoUrl} alt="WellNaija" />
          </a>
          <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#who-we-serve" onClick={() => setMenuOpen(false)}>Who we serve</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#start" onClick={() => setMenuOpen(false)}>Get started <Arrow /></a>
          </nav>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="sr-only">Toggle menu</span>
            <span /> <span />
          </button>
        </div>
      </header>

      <section id="top" className="hero section-dark">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Health, made human.</p>
            <h1>Wellbeing that feels <em>like home.</em></h1>
            <p className="hero-text">WellNaija makes quality health and wellbeing support easier to find, understand, and trust — wherever you are in Nigeria.</p>
            <div className="hero-actions"><a className="button button-light" href="#start">Begin your journey <Arrow /></a><a className="text-link light-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="hero-art" aria-label="WellNaija wellbeing illustration" role="img">
            <div className="art-sun" /><div className="art-line art-line-one" /><div className="art-line art-line-two" /><div className="art-leaf leaf-one" /><div className="art-leaf leaf-two" /><span className="art-caption">A healthier<br />you, together.</span>
          </div>
        </div>
        <div className="container hero-bottom"><span>Designed for real life</span><span>Built for Nigeria</span><span>Rooted in care</span></div>
      </section>

      <section id="how-it-works" className="section-light journey-section"><div className="container"><div className="section-heading"><p className="eyebrow dark-eyebrow">Your wellbeing, your way</p><h2>Small steps.<br /><em>Real change.</em></h2><p>Health support should not feel complicated. We are here to make every step clearer and more human.</p></div><div className="journey-grid">{journey.map(([number, title, copy]) => <article className="journey-card" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

      <section id="who-we-serve" className="section-paper audience-section"><div className="container"><div className="split-heading"><div><p className="eyebrow dark-eyebrow">There is room for everyone</p><h2>Care works<br /><em>better together.</em></h2></div><p>Whether you are looking for support, offering it, or building a healthier community, WellNaija meets you where you are.</p></div><div className="audience-grid">{audience.map(([title, copy, action], i) => <article className={`audience-card audience-${i + 1}`} key={title}><span className="card-index">0{i + 1}</span><h3>{title}</h3><p>{copy}</p><a className="text-link" href="#start">{action} <Arrow /></a></article>)}</div></div></section>

      <section id="about" className="trust-section section-dark"><div className="container trust-grid"><div><p className="eyebrow">Why WellNaija</p><h2>Care that listens<br />before it <em>leads.</em></h2></div><div className="trust-copy"><p>We believe wellbeing is not one-size-fits-all. It is personal, cultural, and always changing.</p><p>That is why we bring together trusted expertise, local understanding, and thoughtful technology — so you can make choices that feel right for you.</p><a className="button button-outline" href="#contact">Learn more about us <Arrow /></a></div></div></section>

      <section id="start" className="cta-section section-amber"><div className="container cta-inner"><p className="eyebrow dark-eyebrow">Your next step starts here</p><h2>Ready to feel<br /><em>well?</em></h2><p>Join a growing community choosing a kinder, clearer way to care for their wellbeing.</p><a className="button button-dark" href="#contact">Get started <Arrow /></a></div></section>

      <footer id="contact" className="footer section-dark"><div className="container footer-top"><a href="#top" className="brand footer-brand"><img src={logoUrl} alt="WellNaija" /></a><div className="footer-links"><div><p className="footer-label">Explore</p><a href="#how-it-works">How it works</a><a href="#who-we-serve">Who we serve</a><a href="#about">About us</a></div><div><p className="footer-label">Connect</p><a href="mailto:hello@wellnaija.com">hello@wellnaija.com</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div></div></div><div className="container footer-bottom"><span>© 2026 WellNaija. Made with care.</span><span>Privacy · Terms</span></div></footer>
    </main>
  )
}
