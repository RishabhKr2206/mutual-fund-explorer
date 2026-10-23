import { useId, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import { SearchIcon } from "./Icons";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

/** Compact search field without a submit button, for inline filtering. */
export function SearchInput({ label, className, id, ...props }: SearchInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div
      className={cn(
        "flex h-button-md items-center gap-2 rounded-md border border-input-border bg-surface px-3 transition-colors focus-within:border-primary hover:border-outline",
        className,
      )}
    >
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <SearchIcon className="size-icon-sm shrink-0 text-subtle" />
      <input
        id={inputId}
        type="search"
        autoComplete="off"
        className="h-full min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-placeholder"
        {...props}
      />
    </div>
  );
}
