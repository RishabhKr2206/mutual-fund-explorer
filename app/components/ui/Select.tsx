import type { SelectHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { ChevronDownIcon } from "./Icons";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export function Select({ options, className, ...props }: SelectProps) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <select
        className="h-button-md w-full cursor-pointer appearance-none rounded-md border border-input-border bg-surface pr-9 pl-3 text-sm font-medium text-ink transition-colors outline-none hover:border-outline focus-visible:border-primary"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-icon-sm -translate-y-1/2 text-ink" />
    </div>
  );
}
