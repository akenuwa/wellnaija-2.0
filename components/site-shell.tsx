'use client'

import { useState } from 'react'

export const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wellnaija-logo-on-teal-bUzycqEcIXT31dA42saD3bRxRxj79D.png'

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export function ArrowIcon() {
  return <Arrow />
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['/how-it-works', 'How it works'],
    ['/who-we-serve', 'Who we serve'],
    ['/about', 'About us'],
    ['/contact', 'Contact'],
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="brand" aria-label="WellNaija home"><img src={logoUrl} alt="WellNaija" /></a>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Get started <Arrow /></a>
        </nav>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle menu</span><span /><span />
        </button>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer section-dark">
      <div className="container footer-top">
        <a href="/" className="brand footer-brand"><img src={logoUrl} alt="WellNaija" /></a>
        <div className="footer-links">
          <div><p className="footer-label">Explore</p><a href="/how-it-works">How it works</a><a href="/who-we-serve">Who we serve</a><a href="/about">About us</a></div>
          <div><p className="footer-label">Connect</p><a href="mailto:hello@wellnaija.com">hello@wellnaija.com</a><a href="/contact">Instagram</a><a href="/contact">LinkedIn</a></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 WellNaija. Made with care.</span><span>Privacy · Terms</span></div>
    </footer>
  )
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: React.ReactNode; copy: string }) {
  return <section className="page-intro section-dark"><div className="container page-intro-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-text">{copy}</p></div><div className="page-mascot"><img src="/images/mascot-doctor.png" alt="WellNaija mascot with a verified care clipboard" /></div></div></section>
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href}>{children} <Arrow /></a>
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="button button-dark" href={href}>{children} <Arrow /></a>
}

export { Arrow }
