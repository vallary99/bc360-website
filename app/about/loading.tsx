import { SkeletonHero, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <SkeletonHero />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12">
        <div className="space-y-3">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-4/5" />
        </div>
        <div className="space-y-3">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-3/4" />
        </div>
      </div>
    </div>
  );
}
