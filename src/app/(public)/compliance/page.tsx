import type { Metadata } from 'next'
import {
  Lock,
  ScrollText,
  KeyRound,
  Server,
  ShieldCheck,
  Globe,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { PageBottomCTA } from '@/components/sections/page-bottom-cta'

export const metadata: Metadata = {
  title: 'Compliance | IntegrateAPI',
  description:
    'How we handle sensitive data and build systems that fit HIPAA, SOC 2, and other audit requirements — inside your controls, not ours.',
}

interface Commitment {
  icon: LucideIcon
  title: string
  description: string
}

const commitments: Commitment[] = [
  {
    icon: Lock,
    title: 'Encryption in transit and at rest',
    description:
      'TLS everywhere on the wire. Storage layers encrypted at rest with managed keys on whatever cloud or on-prem system you already trust.',
  },
  {
    icon: ScrollText,
    title: 'Access logging',
    description:
      'Sensitive reads and writes get logged with who, what, and when. Logs live inside your environment so they fit your retention policy.',
  },
  {
    icon: KeyRound,
    title: 'Least-privilege access',
    description:
      'Service accounts scoped to what they need and nothing more. No shared credentials. No blanket admin tokens floating in automation.',
  },
  {
    icon: Server,
    title: 'Deployment model is your call',
    description:
      'On-prem, your cloud tenant, or a dedicated environment we build for you. If data can\u2019t leave your network, it doesn\u2019t.',
  },
  {
    icon: ShieldCheck,
    title: 'Vendor selection inside your allowlist',
    description:
      'We build with the model providers, data stores, and third-party tools already approved in your environment. We don\u2019t introduce vendors you can\u2019t cover.',
  },
  {
    icon: Globe,
    title: 'Data-residency choices honored',
    description:
      'Where your data lives matters. We pick regions and providers that keep data inside the borders your policies require.',
  },
]

const practiceItems = [
  'On-prem or your-cloud deployment when the workload is sensitive',
  'Integrations built through vendors already covered in your agreements',
  'Internal access to client systems scoped per engagement',
  'Audit trails on every touchpoint that handles regulated data',
  'Secrets stored in your secret manager, not ours',
]

export default function CompliancePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Page header */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Compliance
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Built inside your controls.
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Our processes can be HIPAA- and SOC 2-compliant when the engagement calls for it. We
              build into the posture your business already runs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Commitments grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How we handle sensitive data</h2>
            <p className="text-muted text-lg mb-16 max-w-2xl">
              Six commitments that show up in every engagement that touches regulated data.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c, i) => {
              const Icon = c.icon
              return (
                <FadeIn key={c.title} delay={i * 0.05}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{c.description}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Working inside your audit posture */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Working inside your audit posture
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                We are not a certified entity ourselves. HIPAA and SOC 2 attest the environment
                where your data lives — your systems, your controls, your vendors. That&apos;s the
                environment that gets audited.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Our job is to build software that fits inside that environment without breaking it.
                We work with your controls, not around them. If something we&apos;d build would
                force a change to your compliance story, we flag it before we write a line of code.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                The practical effect: the tools we deliver land in an environment that&apos;s still
                auditable the same way it was the day before we showed up.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What this looks like in practice */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What this looks like in practice
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Concrete choices we make on engagements where compliance is a hard requirement:
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-3">
                {practiceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <PageBottomCTA
        title="Have a compliance requirement we need to meet?"
        subtitle="Bring it to the discovery call. We'll tell you what's buildable inside it."
        primaryLabel="Book Your Discovery"
      />
    </div>
  )
}
