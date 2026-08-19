import { ArrowLink, PageFrame, PageIntro } from '@/components/site-shell'

const audiences = [
  ['For individuals', 'Your health is personal. Get accessible guidance, trusted connections, and a calmer way to make decisions about your wellbeing.', 'Start your journey', '/contact', 'audience-1'],
  ['For providers', 'Grow your reach without losing the human connection. Join a network built around better experiences for patients and practitioners.', 'Join our network', '/contact', 'audience-2'],
  ['For organisations', 'Create healthier workplaces and communities with thoughtful tools that make wellbeing easier to understand and act on.', 'Partner with us', '/contact', 'audience-3'],
]

export default function WhoWeServePage() {
  return <PageFrame><PageIntro eyebrow="There is room for everyone" title={<>Care works<br /><em>better together.</em></>} copy="WellNaija connects people, professionals, and organisations around a shared belief: everyone deserves support that feels relevant and respectful." />
    <main><section className="page-section section-paper"><div className="container"><div className="audience-grid audience-grid-large">{audiences.map(([title, copy, action, href, tone], index) => <article className={`audience-card ${tone}`} key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p><ArrowLink href={href}>{action}</ArrowLink></article>)}</div></div></section><section className="section-light page-section"><div className="container centered-callout"><p className="eyebrow dark-eyebrow">One community, many journeys</p><h2>There is a place<br /><em>for your care.</em></h2><p>Wherever you are starting from, we are here to help you take the next step with confidence.</p><ArrowLink href="/how-it-works">See how it works</ArrowLink></div></section></main></PageFrame>
}
