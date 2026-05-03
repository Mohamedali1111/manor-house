/** Lightweight placeholder while below-the-fold home chunks load. */
export function HomeBelowFallback() {
  return (
    <div
      className="mx-auto max-w-6xl space-y-3 px-4 py-8 sm:px-6"
      aria-hidden
    >
      <div className="h-3 max-w-md animate-pulse rounded-full bg-muted" />
      <div className="h-32 animate-pulse rounded-2xl bg-muted/80" />
      <div className="h-32 animate-pulse rounded-2xl bg-muted/60 delay-75 sm:delay-0" />
    </div>
  )
}
