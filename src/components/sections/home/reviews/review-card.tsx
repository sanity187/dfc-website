import Image from "next/image";
import { StarRating } from "@/components/primitives/star-rating";
import { CheckCircle, Quote } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/reviews/get-google-reviews";

interface ReviewCardProps {
  review: GoogleReviewItem;
  verifiedLabel: string;
}

export function ReviewCard({ review, verifiedLabel }: ReviewCardProps) {
  const initials = review.authorName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="flex flex-col justify-between p-6 rounded-2xl border border-line bg-panel/75 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/40 relative group">
      <div className="flex flex-col gap-4">
        {/* Header: Author Avatar & Meta */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {review.authorPhotoUrl ? (
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line">
                <Image
                  src={review.authorPhotoUrl}
                  alt={review.authorName}
                  fill
                  sizes="44px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary font-black text-sm border border-secondary/25">
                {initials}
              </div>
            )}

            <div className="flex flex-col">
              <span className="font-bold text-ink text-sm sm:text-base leading-tight">
                {review.authorName}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <CheckCircle className="h-3 w-3 text-secondary shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-dim">{verifiedLabel}</span>
              </div>
            </div>
          </div>

          <Quote className="h-5 w-5 text-dim/20 shrink-0 group-hover:text-secondary/40 transition-colors" />
        </div>

        {/* Star Rating & Relative Time */}
        <div className="flex items-center justify-between gap-2 border-t border-line/60 pt-3">
          <StarRating rating={review.rating} size={15} />
          <span className="text-xs font-medium text-dim/70">{review.relativeTime}</span>
        </div>

        {/* Review Quote Text */}
        <p className="text-sm leading-relaxed text-ink/90 line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Footer Verified Google Badge */}
      <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-[11px] font-semibold text-dim">
        <span className="text-primary font-bold">Google Maps Verified</span>
        <span className="text-secondary font-black">★ {review.rating}.0</span>
      </div>
    </article>
  );
}
