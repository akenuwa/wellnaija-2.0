import { PageFrame, PageIntro } from '@/components/site-shell'

export default function ContactPage() {
  return <PageFrame><PageIntro eyebrow="Your next step starts here" title={<>Let&apos;s make<br /><em>wellbeing</em> possible.</>} copy="Have a question, want to partner, or ready to begin? We would love to hear from you." />
    <main><section className="page-section section-light"><div className="container contact-layout"><div><p className="eyebrow dark-eyebrow">Get in touch</p><h2>We are<br /><em>listening.</em></h2><p className="contact-copy">Send us a note and a member of our team will get back to you. For general enquiries, reach us at <a className="inline-link" href="mailto:hello@wellnaija.com">hello@wellnaija.com</a>.</p></div><form className="contact-form"><label>Name<input type="text" name="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" placeholder="you@example.com" /></label><label>How can we help?<textarea name="message" rows={5} placeholder="Tell us a little more..." /></label><button className="button button-dark" type="submit">Send message <span aria-hidden="true">↗</span></button></form></div></section></main></PageFrame>
}
