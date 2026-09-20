import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  className?: string;
  size?: number;
}

export function StarRating({
  rating,
  maxStars = 5,
  className = "",
  size = 16,
}: StarRatingProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }).map((_, idx) => {
        const isFilled = idx < Math.round(rating);
        return (
          <Star
            key={idx}
            style={{ width: size, height: size }}
            className={`shrink-0 ${
              isFilled
                ? "fill-secondary text-secondary"
                : "fill-muted text-muted-foreground/30"
            }`}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
