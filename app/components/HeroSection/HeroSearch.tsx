"use client";

import { useFundExplorer } from "../../context/FundExplorerContext";
import { SearchBar } from "../ui";

export function HeroSearch({ className }: { className?: string }) {
  const { updateFilter } = useFundExplorer();

  const handleSearch = (query: string) => {
    updateFilter("search", query);
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  };

  return <SearchBar className={className} onSearch={handleSearch} />;
}
