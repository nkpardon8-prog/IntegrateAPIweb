import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-lg font-bold text-foreground mb-3">IntegrateAPI</p>
            <p className="text-sm text-muted leading-relaxed">
              We show up, learn your business, and build the tools that make it run better.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Company</p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/compliance" className="text-sm text-muted hover:text-foreground transition-colors">
                Compliance
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Services</p>
            <div className="flex flex-col gap-3">
              <Link href="/what-we-do" className="text-sm text-muted hover:text-foreground transition-colors">
                What We Do
              </Link>
              <Link href="/how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="/results" className="text-sm text-muted hover:text-foreground transition-colors">
                Results
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors">
                Get in touch
              </Link>
              <p className="text-sm text-muted">Salt Lake City & Seattle</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; 2026 IntegrateAPI.</p>
          <p className="text-xs text-muted">Made with calm precision.</p>
        </div>
      </div>
    </footer>
  )
}
