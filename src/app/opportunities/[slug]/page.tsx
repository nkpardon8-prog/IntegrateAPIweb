import { notFound } from 'next/navigation'
import { jobs } from '@/data/jobs'
import { ApplicationForm } from '@/components/opportunities/application-form'
import { FadeIn } from '@/components/motion/fade-in'

export default async function RoleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const job = jobs.find(j => j.slug === slug)
  if (!job || !job.published) notFound()

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{job.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-accent border border-accent/30 bg-accent/10 rounded px-2 py-1">
                {job.type}
              </span>
              <span className="text-xs font-medium text-muted border border-border bg-foreground/[0.03] rounded px-2 py-1">
                {job.location}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {job.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <FadeIn>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Qualifications</h2>
              <ul className="flex flex-col gap-3">
                {job.qualifications.map((q, i) => (
                  <li key={i} className="flex gap-3 text-muted leading-relaxed">
                    <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {job.niceToHave.length > 0 && (
            <FadeIn delay={0.05}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Nice to have</h2>
                <ul className="flex flex-col gap-3">
                  {job.niceToHave.map((n, i) => (
                    <li key={i} className="flex gap-3 text-muted leading-relaxed">
                      <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Apply</h2>
            <ApplicationForm roleSlug={job.slug} />
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
