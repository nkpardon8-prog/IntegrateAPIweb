export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="h-8 w-48 bg-card rounded animate-pulse" />
        <div className="h-4 w-full bg-card rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-card rounded animate-pulse" />
        <div className="h-32 w-full bg-card rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-card rounded animate-pulse" />
      </div>
    </div>
  )
}
