import type { FundCategory, FundFilters, RiskLevel, SortKey, SortOrder } from "../types/fund";

export const FUND_CATEGORIES: FundCategory[] = ["Equity", "Debt", "Hybrid", "Index Funds"];

export const RISK_LEVELS: RiskLevel[] = ["Low", "Moderate", "High", "Very High"];

export const SORT_OPTIONS: { value: SortKey; label: string; order: SortOrder }[] = [
  { value: "return3Y", label: "Sort: Returns", order: "desc" },
  { value: "rating", label: "Sort: Rating", order: "desc" },
  { value: "popularity", label: "Sort: Popularity", order: "desc" },
  { value: "minimumInvestment", label: "Sort: Min. SIP", order: "asc" },
];

export const DEFAULT_FUND_FILTERS: FundFilters = {
  search: "",
  category: "All",
  risk: "All",
  sortBy: "return3Y",
  sortOrder: "desc",
};
