export type FundCategory = "Equity" | "Debt" | "Hybrid" | "Index Funds";

export type RiskLevel = "Low" | "Moderate" | "High" | "Very High";

export interface Fund {
  id: number;
  name: string;
  category: FundCategory;
  risk: RiskLevel;
  return3Y: number;
  rating: number;
  minimumInvestment: number;
  popularity: number;
}

export type SortKey = "popularity" | "return3Y" | "rating" | "minimumInvestment";

export type SortOrder = "asc" | "desc";

export interface FundFilters {
  search: string;
  category: FundCategory | "All";
  risk: RiskLevel | "All";
  sortBy: SortKey;
  sortOrder: SortOrder;
}
