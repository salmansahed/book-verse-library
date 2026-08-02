import { Card, Skeleton } from "@heroui/react";

export const BookCardSkeleton = () => {
  return (
    <Card className="bg-white border border-zinc-200/60 rounded-2xl p-3.5 shadow-xs space-y-3.5">
      {/* Image Skeleton */}
      <Skeleton className="rounded-xl">
        <div className="aspect-3/4 w-full bg-zinc-200" />
      </Skeleton>

      {/* Content Skeleton */}
      <div className="space-y-2 pt-1 px-1">
        {/* Title Skeleton */}
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-5 bg-zinc-200" />
        </Skeleton>
        {/* Author Skeleton */}
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 bg-zinc-200" />
        </Skeleton>
        {/* Button Skeleton */}
        <Skeleton className="w-full rounded-xl mt-3">
          <div className="h-10 bg-zinc-200" />
        </Skeleton>
      </div>
    </Card>
  );
};

// FeaturedBooksSkeleton Component
export const FeaturedBooksSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
};
