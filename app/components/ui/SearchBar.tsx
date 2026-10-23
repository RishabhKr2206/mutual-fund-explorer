"use client";

import { useId, useState, type FormEvent } from "react";
import { cn } from "../../utils/cn";
import { Button } from "./Button";
import { SearchIcon } from "./Icons";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  defaultValue?: string;
  label?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  placeholder = "Search mutual funds, AMCs...",
  buttonLabel = "Search",
  defaultValue = "",
  label = "Search mutual funds",
  className,
  onSearch,
}: SearchBarProps) {
  const inputId = useId();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn(
        "flex h-input-mobile w-full items-center gap-3 rounded-md border border-input-border bg-surface pr-2 pl-4 md:h-input shadow-input transition-colors focus-within:border-primary",
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
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-full min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
      />
      <Button type="submit" size="sm">
        {buttonLabel}
      </Button>
    </form>
  );
}
