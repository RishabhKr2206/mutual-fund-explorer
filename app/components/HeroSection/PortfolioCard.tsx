import { cn } from "../../utils/cn";
import { formatCurrency, formatPercent } from "../../utils/format";
import { ArrowUpIcon, Badge } from "../ui";

const PORTFOLIO_VALUE = 428650;
const PORTFOLIO_GROWTH = 28.4;

/** Bar heights as a percentage of the chart height; the last `HIGHLIGHTED_BARS` are emphasised. */
const CHART_BARS = [33, 42, 39, 53, 49, 67, 60, 72, 68, 86, 81, 100];
const HIGHLIGHTED_BARS = 3;

const ALLOCATIONS = [
  { label: "HDFC", share: 25 },
  { label: "SBI", share: 25 },
  { label: "ICICI", share: 25 },
  { label: "UTI", share: 25 },
];

export function PortfolioCard({ className }: { className?: string }) {
  return (
    <figure
      aria-label="Sample portfolio overview"
      className={cn("rounded-lg bg-surface p-5 shadow-card md:p-6", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted">Portfolio value</p>
          <p className="mt-1 text-xl font-bold text-ink md:text-2xl">
            {formatCurrency(PORTFOLIO_VALUE)}
          </p>
        </div>
        <Badge variant="success" className="mt-3">
          <ArrowUpIcon className="size-3" />
          {formatPercent(PORTFOLIO_GROWTH)}
        </Badge>
      </div>

      <div
        aria-hidden
        className="mt-6 flex h-chart items-end gap-1.5 md:gap-2.5"
      >
        {CHART_BARS.map((height, index) => (
          <span
            key={index}
            className={cn(
              "flex-1 rounded-t-sm",
              index >= CHART_BARS.length - HIGHLIGHTED_BARS
                ? "bg-primary hover:bg-white "
                : "bg-chart-bar hover:bg-blue-300 ",
            )}
            id={`chart-bar-${index}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <dl className="mt-4 grid grid-cols-4 gap-2 md:gap-2.5">
        {ALLOCATIONS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center rounded-md bg-surface-muted px-1 py-2.5 "
          >
            <dt className="text-2xs text-muted">{item.label}</dt>
            <dd className="text-2xs font-bold text-ink">
              {formatPercent(item.share, 0)}
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
