"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useFundFilters } from "../hooks/useFundFilters";
import type { Fund } from "../types/fund";

type FundExplorerValue = ReturnType<typeof useFundFilters> & { funds: Fund[] };

const FundExplorerContext = createContext<FundExplorerValue | null>(null);

/** Shares one filter state between the hero search and the explore section. */
export function FundExplorerProvider({ funds, children }: { funds: Fund[]; children: ReactNode }) {
  const value = useFundFilters(funds);

  return <FundExplorerContext.Provider value={{ ...value, funds }}>{children}</FundExplorerContext.Provider>;
}

export function useFundExplorer(): FundExplorerValue {
  const context = useContext(FundExplorerContext);
  if (!context) throw new Error("useFundExplorer must be used inside <FundExplorerProvider>");
  return context;
}
