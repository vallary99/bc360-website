import { SkeletonText, SkeletonBlock } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-8 pb-14">
          <SkeletonText className="w-1/3 mb-6" />
          <SkeletonBlock className="h-10 w-full mb-3" />
          <SkeletonBlock className="h-10 w-3/4" />
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14 space-y-4">
        <SkeletonText className="w-full" />
        <SkeletonText className="w-full" />
        <SkeletonText className="w-5/6" />
        <SkeletonText className="w-full mt-6" />
        <SkeletonText className="w-2/3" />
      </div>
    </div>
  );
}
