import { StarRating } from "@/components/primitives/star-rating";
import { ExternalLink } from "lucide-react";

interface ReviewSummaryBadgeProps {
  rating: number;
  totalReviews: number;
  mapsUri: string;
  ratingLabel: string;
  reviewsLabel: string;
  viewAllLabel: string;
}

export function ReviewSummaryBadge({
  rating,
  totalReviews,
  mapsUri,
  ratingLabel,
  reviewsLabel,
  viewAllLabel,
}: ReviewSummaryBadgeProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl border border-line bg-panel/80 shadow-md backdrop-blur-md">
      {/* Left: Google Brand & Score */}
      <div className="flex items-center gap-4">
        {/* Authentic Google "G" Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-white shadow-xs p-2">
          <svg viewBox="0 0 24 24" className="h-full w-full" aria-label="Google">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-ink">{rating.toFixed(1)}</span>
            <StarRating rating={rating} size={18} />
          </div>
          <span className="text-xs font-semibold text-dim">
            {totalReviews.toLocaleString()} {reviewsLabel} · {ratingLabel}
          </span>
        </div>
      </div>

      {/* Right: Direct Link to Google Maps Reviews */}
      <a
        href={mapsUri}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:scale-[1.02] shrink-0"
      >
        <span>{viewAllLabel}</span>
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
