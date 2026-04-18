'use client'

export function StatsBar() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-foreground">Free to start</span>
            <span className="text-muted mt-1 text-sm">No upfront cost</span>
          </div>
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-foreground">$0</span>
            <span className="text-muted mt-1 text-sm">Upfront cost</span>
          </div>
          <div className="flex flex-col items-center py-6 sm:py-0 sm:px-12 text-center">
            <span className="text-4xl font-bold text-foreground">1</span>
            <span className="text-muted mt-1 text-sm">Partner, not a vendor</span>
          </div>
        </div>
      </div>
    </section>
  )
}
