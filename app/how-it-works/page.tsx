import { ArrowIcon, ArrowLink, PageFrame, PageIntro, PrimaryButton } from '@/components/site-shell'

const steps = [
  ['01', 'Start with your story', 'Tell us what is on your mind, from a new symptom to a long-term wellbeing goal. No jargon, no judgement.'],
  ['02', 'Find your next step', 'Receive clear guidance shaped around your needs, location, context, and preferred way to access care.'],
  ['03', 'Connect with the right support', 'Meet trusted providers and resources that understand the realities of life in Nigeria.'],
  ['04', 'Keep moving forward', 'Come back to track progress, ask new questions, and build healthier habits at your own pace.'],
]

export default function HowItWorksPage() {
  return <PageFrame><PageIntro eyebrow="Your wellbeing, your way" title={<>Small steps.<br /><em>Real change.</em></>} copy="A clear, human path from wondering what to do next to feeling supported in your care." />
    <main>
      <section className="page-section section-light"><div className="container"><div className="section-heading"><p className="eyebrow dark-eyebrow">How WellNaija helps</p><h2>Care, made<br /><em>simpler.</em></h2><p>Healthcare can be difficult to navigate. We make the journey feel more approachable, informed, and connected.</p></div><div className="process-grid">{steps.map(([number, title, copy]) => <article className="process-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="section-dark page-section"><div className="container page-split"><div><p className="eyebrow">Built around you</p><h2>Support that<br />meets you <em>there.</em></h2></div><div className="trust-copy"><p>Whether you are at home, at work, or on the move, WellNaija is designed to fit into real life.</p><p>Our approach brings together practical information, trusted people, and a sense of belonging.</p><PrimaryButton href="/contact">Begin your journey</PrimaryButton></div></div></section>
    </main></PageFrame>
}
