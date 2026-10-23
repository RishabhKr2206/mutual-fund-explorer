import { cn } from "../../utils/cn";
import { formatRating } from "../../utils/format";
import { StarIcon } from "./Icons";

interface StarRatingProps {
  rating: number;
  max?: number;
  showValue?: boolean;
  className?: string;
}

export function StarRating({ rating, max = 5, showValue = true, className }: StarRatingProps) {
  const filled = Math.round(rating);

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span role="img" aria-label={`Rated ${formatRating(rating)} out of ${max}`} className="inline-flex">
        {Array.from({ length: max }, (_, index) => (
          <StarIcon key={index} className={cn("size-star", index < filled ? "text-star" : "text-star-empty")} />
        ))}
      </span>
      {showValue && <span className="text-xs text-muted">{formatRating(rating)}</span>}
    </span>
  );
}
