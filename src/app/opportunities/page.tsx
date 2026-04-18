import { jobs } from '@/data/jobs'
import { RoleCard } from '@/components/opportunities/role-card'
import { FadeIn } from '@/components/motion/fade-in'

export default function OpportunitiesPage() {
  const published = jobs.filter(j => j.published)

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Page header */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Opportunities
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Join an early team building real AI for real businesses.
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              A small set of roles built for people who want a front-row seat to how AI is actually deployed inside small and mid-sized companies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Role list */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {published.length === 0 ? (
            <FadeIn>
              <div className="bg-card border border-dashed border-border-strong rounded-xl p-8 text-center">
                <p className="text-foreground text-xl font-semibold mb-2">No open roles right now.</p>
                <p className="text-muted max-w-2xl mx-auto">
                  Check back soon. We hire in waves.
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {published.map((job, i) => (
                <FadeIn key={job.slug} delay={i * 0.08}>
                  <RoleCard job={job} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
