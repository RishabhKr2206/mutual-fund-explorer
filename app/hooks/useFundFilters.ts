import { useCallback, useMemo, useState } from "react";
import { DEFAULT_FUND_FILTERS } from "../constants/funds";
import type { Fund, FundFilters } from "../types/fund";
import { useDebounce } from "./useDebounce";

export function useFundFilters(funds: Fund[], initialFilters: Partial<FundFilters> = {}) {
  const [filters, setFilters] = useState<FundFilters>({
    ...DEFAULT_FUND_FILTERS,
    ...initialFilters,
  });

  const debouncedSearch = useDebounce(filters.search);

  const filteredFunds = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    const direction = filters.sortOrder === "asc" ? 1 : -1;

    return funds
      .filter((fund) => {
        if (query && !fund.name.toLowerCase().includes(query)) return false;
        if (filters.category !== "All" && fund.category !== filters.category) return false;
        if (filters.risk !== "All" && fund.risk !== filters.risk) return false;
        return true;
      })
      .sort((a, b) => (a[filters.sortBy] - b[filters.sortBy]) * direction);
  }, [funds, debouncedSearch, filters.category, filters.risk, filters.sortBy, filters.sortOrder]);

  const updateFilter = useCallback(
    <K extends keyof FundFilters>(key: K, value: FundFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const resetFilters = useCallback(() => setFilters(DEFAULT_FUND_FILTERS), []);

  return { filters, filteredFunds, updateFilter, resetFilters };
}
