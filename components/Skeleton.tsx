/**
 * Shared skeleton building blocks used by route-level loading.tsx files.
 * These render instantly (no data dependency) so Next.js can show them
 * immediately while the real route segment streams in.
 */

export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-sm ${className}`} aria-hidden="true" />;
}

export function SkeletonText({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-sm h-4 ${className}`} aria-hidden="true" />;
}

export function SkeletonHero() {
  return (
    <div className="relative border-b border-hairline overflow-hidden">
      <div className="skeleton h-[420px] sm:h-[460px] lg:h-[480px] w-full" aria-hidden="true" />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="border border-hairline rounded-sm p-6 h-full flex flex-col gap-3">
      <SkeletonText className="w-1/3" />
      <SkeletonText className="w-4/5 h-5" />
      <SkeletonText className="w-full" />
      <SkeletonText className="w-2/3" />
      <SkeletonText className="w-1/3 mt-auto" />
    </div>
  );
}

export function SkeletonCardGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonPage({ cards = 6 }: { cards?: number }) {
  return (
    <div role="status" aria-label="Loading">
      <SkeletonHero />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <SkeletonCardGrid count={cards} />
      </div>
    </div>
  );
}
