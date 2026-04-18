'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">Something went wrong</h1>
      <p className="text-muted mb-8">{error.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
