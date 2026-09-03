import { SkeletonHero, SkeletonText, SkeletonBlock } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <SkeletonHero />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-[1.6fr_1fr] gap-12">
        <div className="space-y-4">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-5/6" />
          <SkeletonText className="w-2/3" />
          <SkeletonBlock className="h-32 w-full mt-6" />
          <SkeletonText className="w-full mt-6" />
          <SkeletonText className="w-4/5" />
        </div>
        <div className="space-y-6">
          <SkeletonBlock className="h-40 w-full" />
          <SkeletonBlock className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}
