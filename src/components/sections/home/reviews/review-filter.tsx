"use client";

import { useState, useMemo } from "react";
import { ReviewCard } from "./review-card";
import { ChevronDown, Sparkles } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/reviews/types";

interface ReviewFilterProps {
  reviews: GoogleReviewItem[];
  verifiedLabel: string;
  filterLabels: {
    all: string;
    fiveStars: string;
    fourStars: string;
  };
}

const PAGE_SIZE = 6;

export function ReviewFilter({
  reviews,
  verifiedLabel,
  filterLabels,
}: ReviewFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "5" | "4">("all");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const count5 = useMemo(() => reviews.filter((r) => r.rating === 5).length, [reviews]);
  const count4 = useMemo(() => reviews.filter((r) => r.rating === 4).length, [reviews]);

  const filteredReviews = useMemo(() => {
    if (selectedFilter === "5") {
      return reviews.filter((r) => r.rating === 5);
    }
    if (selectedFilter === "4") {
      return reviews.filter((r) => r.rating === 4);
    }
    return reviews;
  }, [reviews, selectedFilter]);

  const handleFilterChange = (filter: "all" | "5" | "4") => {
    setSelectedFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => handleFilterChange("all")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
            selectedFilter === "all"
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : "bg-panel border border-line text-dim hover:text-ink hover:border-primary/40"
          }`}
        >
          <span>{filterLabels.all}</span>
          <span className="rounded-full bg-white/20 dark:bg-white/10 px-2 py-0.5 text-[10px] font-black">
            {reviews.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleFilterChange("5")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
            selectedFilter === "5"
              ? "bg-secondary text-secondary-foreground shadow-md scale-105"
              : "bg-panel border border-line text-dim hover:text-ink hover:border-secondary/40"
          }`}
        >
          <span className="tracking-tighter">★★★★★</span>
          <span>{filterLabels.fiveStars}</span>
          <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-black">
            {count5}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleFilterChange("4")}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
            selectedFilter === "4"
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : "bg-panel border border-line text-dim hover:text-ink hover:border-primary/40"
          }`}
        >
          <span className="tracking-tighter">★★★★☆</span>
          <span>{filterLabels.fourStars}</span>
          <span className="rounded-full bg-white/20 dark:bg-white/10 px-2 py-0.5 text-[10px] font-black">
            {count4}
          </span>
        </button>
      </div>

      {/* Reviews Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 min-h-[320px]">
        {visibleReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            verifiedLabel={verifiedLabel}
          />
        ))}
      </div>

      {/* Pagination / Load More Controls */}
      <div className="flex flex-col items-center gap-3 pt-2">
        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-6 py-3 text-xs font-bold text-ink shadow-sm transition-all hover:bg-muted hover:border-primary/40 hover:scale-[1.02] cursor-pointer"
          >
            <span>Load More Reviews (+{Math.min(PAGE_SIZE, filteredReviews.length - visibleCount)})</span>
            <ChevronDown className="h-4 w-4 text-secondary animate-bounce" />
          </button>
        ) : (
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-dim">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Showing all {filteredReviews.length} reviews in this filter</span>
          </div>
        )}
      </div>
    </div>
  );
}
