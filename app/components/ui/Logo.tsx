import { BarChartIcon } from "./Icons";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2.5" aria-label="FundWise home">
      <span className="flex size-logo-mark items-center justify-center rounded-md bg-primary text-inverse">
        <BarChartIcon className="size-icon-sm" />
      </span>
      <span className="text-md font-bold tracking-tight text-primary">FundWise</span>
    </a>
  );
}
