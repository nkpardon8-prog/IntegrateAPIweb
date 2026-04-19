import { voice } from './voice'
import { company } from './company'
import { services } from './services'
import { engagementProcess } from './process'
import { team } from './team'
import { caseStudies } from './case-studies'
import { compliance } from './compliance'
import { pricing } from './pricing'
import { faq } from './faq'

export { voice }

// process.ts exports as `engagementProcess` to avoid shadowing Node's `process` global
// (@openrouter/ai-sdk-provider reads process.env.OPENROUTER_API_KEY at module load).
export const knowledgeBase = [
  `## COMPANY\n${company}`,
  `## SERVICES\n${services}`,
  `## PROCESS\n${engagementProcess}`,
  `## TEAM\n${team}`,
  `## CASE STUDIES\n${caseStudies}`,
  `## COMPLIANCE\n${compliance}`,
  `## PRICING\n${pricing}`,
  `## FAQ\n${faq}`,
].join('\n\n')

// Per-route blocks that prime the model with what the user is looking at right now.
const pageContexts: Record<string, string> = {
  '/': `The user is on the home page. Hero: "Your outsourced AI and tech department." Core pitch: we come in free, learn the business, tell them where the opportunities are. The page covers underserved industries, stats, pain points, how an AI agent works (Trigger → Brain → Tools → Decisions → Outcomes), services preview, how-it-works preview, results preview, and an FAQ. Questions likely ask for overview, differentiation, and "what would you build for me."`,
  '/what-we-do': `The user is on the services page. Above the services grid is the agent anatomy diagram (Trigger → Brain → Tools → Decisions → Outcomes). Services listed: AI Agent Systems, Custom Software & CRM, Automated Sales Pipelines, Back Office Automation, AI Phone Systems, Websites & Digital Presence, Staff Training & AI Adoption, System Maintenance & Evolution. Compliance callout links to /compliance. Prioritize service-detail questions and "can you build X."`,
  '/how-it-works': `The user is on the process page. Content: Discovery Engagement (Day 1 → End of Week → Decision), "One week on us" callout, Escalation Model (Phase 1 Start Small → Phase 2 Build Trust → Phase 3 Go Deep), "Why we work this way" explainer. Prioritize process, onboarding, timeline, and commitment questions.`,
  '/results': `The user is on the case studies page. Real examples: B2B outreach platform (3x pipeline growth), service-business operations dashboard (1 unified platform), dental practice management (unified admin), retail vinyl inventory (hours saved weekly), law firm intake (faster intake), dental recall automation (fewer no-shows). Prioritize case-study detail, industry fit, and "can you do this for my business" questions.`,
  '/compliance': `The user is on the compliance page. Content: concrete commitments (encryption at rest + in transit, access logging, least-privilege access, deployment model choice, vendor selection inside their allowlist, data-residency choices), "we are not a certified entity ourselves" disclaimer, and practice bullets. Prioritize HIPAA/SOC 2, data handling, on-prem vs cloud, and vendor-approval questions. Never claim IntegrateAPI holds certifications. Do not mention BAA or DPA signing, that is a sales-call topic.`,
  '/about': `The user is on the about page. Content: team (Nick Pardon on sales/BD/ops, Omid Zahrai on engineering), origin story, "what makes us different," where we work (Salt Lake City, Seattle, remote-capable). Prioritize "who are you," "why did you start this," "who will I work with" questions.`,
  '/contact': `The user is on the contact page. If they want to be contacted, collect name, email, and a short business description, then call submit_lead. Don't repeat what the page already does, they're already one click from sending a form.`,
}

export function getPageContext(pathname: string | null | undefined): string | null {
  if (!pathname) return null
  // Normalize trailing slash: `/results/` and `/results` should behave identically.
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  // Exact match first.
  if (pageContexts[normalized]) return pageContexts[normalized]
  // Prefix match, longest-first, so that /results/[slug] can fall back to /results,
  // /what-we-do/ai-agents to /what-we-do, etc. /admin/* intentionally has no key, the
  // public chatbot has no business priming off an admin path.
  const prefixes = Object.keys(pageContexts).sort((a, b) => b.length - a.length)
  for (const prefix of prefixes) {
    if (prefix === '/') continue // would match everything; exact-match already handled
    if (normalized.startsWith(prefix + '/')) return pageContexts[prefix]
  }
  return null
}
