import { categoryColors, riskColors } from "../../theme/theme";
import type { Fund } from "../../types/fund";
import { formatCurrency, formatPercent } from "../../utils/format";
import { Badge, Button, ChevronRightIcon, StarRating, TrendingUpIcon } from "../ui";

interface FundCardProps {
  fund: Fund;
  onViewDetails?: (fund: Fund) => void;
}

export function FundCard({ fund, onViewDetails }: FundCardProps) {
  const category = categoryColors[fund.category];
  const risk = riskColors[fund.risk];

  return (
    <article className="flex h-full flex-col rounded-lg border border-card-border bg-surface p-5 shadow-fund-card transition duration-200 hover:-translate-y-0.5 hover:border-card-border-hover hover:shadow-fund-card-hover">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex size-fund-icon shrink-0 items-center justify-center rounded-md"
          style={{ backgroundColor: category.iconBackground, color: category.icon }}
        >
          <TrendingUpIcon className="size-icon-sm" />
        </span>
        <div className="min-w-0">
          <h3 className="text-md font-semibold text-ink">{fund.name}</h3>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <Badge size="sm" style={{ backgroundColor: category.background, color: category.text }}>
              <span className="sr-only">Category: </span>
              {fund.category}
            </Badge>
            <Badge size="sm" style={{ backgroundColor: risk.background, color: risk.text }}>
              <span className="sr-only">Risk: </span>
              {fund.risk} Risk
            </Badge>
          </div>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-y border-card-border py-4">
        <div>
          <dt className="text-2xs font-medium text-muted uppercase">3Y Returns</dt>
          <dd className="mt-1 text-lg font-bold text-success">{formatPercent(fund.return3Y)}</dd>
        </div>
        <div>
          <dt className="text-2xs font-medium text-muted uppercase">Rating</dt>
          <dd className="mt-1.5">
            <StarRating rating={fund.rating} />
          </dd>
        </div>
        <div>
          <dt className="text-2xs font-medium text-muted uppercase">
            <span aria-hidden>Min. SIP</span>
            <span className="sr-only">Minimum investment</span>
          </dt>
          <dd className="mt-1 text-sm font-semibold text-ink">{formatCurrency(fund.minimumInvestment)}</dd>
        </div>
      </dl>

      <Button
        variant="outline"
        size="sm"
        fullWidth
        className="mt-auto"
        aria-label={`View details for ${fund.name}`}
        onClick={() => onViewDetails?.(fund)}
      >
        View Details
        <ChevronRightIcon className="size-icon-sm" />
      </Button>
    </article>
  );
}
