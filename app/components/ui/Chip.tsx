import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

/** Toggleable pill used for filters. */
export function Chip({ selected = false, type = "button", className, ...props }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cn(
        "inline-flex h-button-sm shrink-0 cursor-pointer items-center justify-center rounded-md px-4 text-base whitespace-nowrap md:text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        selected ? "bg-primary font-semibold text-inverse" : "bg-chip text-chip-text hover:bg-chart-bar",
        className,
      )}
      {...props}
    />
  );
}
