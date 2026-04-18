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
    <div className="bg-[#121220] text-[#f0f0f0] min-h-screen">
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{job.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-[#3b82f6] border border-[#3b82f6]/30 bg-[#3b82f6]/10 rounded px-2 py-1">
                {job.type}
              </span>
              <span className="text-xs font-medium text-[#a0a0b0] border border-white/[0.08] bg-white/[0.03] rounded px-2 py-1">
                {job.location}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {job.body.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#a0a0b0] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <FadeIn>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Qualifications</h2>
              <ul className="flex flex-col gap-3">
                {job.qualifications.map((q, i) => (
                  <li key={i} className="flex gap-3 text-[#a0a0b0] leading-relaxed">
                    <span className="text-[#3b82f6] mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
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
                    <li key={i} className="flex gap-3 text-[#a0a0b0] leading-relaxed">
                      <span className="text-[#3b82f6] mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
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
