"use client";

import React, { useId, useState } from "react";
import { FUND_CATEGORIES, RISK_LEVELS, SORT_OPTIONS } from "../../constants/funds";
import { useFundExplorer } from "../../context/FundExplorerContext";
import type { Fund, FundFilters, SortKey } from "../../types/fund";
import { formatCurrency, formatPercent } from "../../utils/format";
import { Button, Chip, Container, SearchInput, Select, SlidersIcon } from "../ui";
import { FundCard } from "./FundCard";

const CATEGORY_TABS: FundFilters["category"][] = ["All", ...FUND_CATEGORIES];
const RISK_OPTIONS: FundFilters["risk"][] = ["All", ...RISK_LEVELS];

function showFundDetails(fund: Fund) {
  window.alert(
    `${fund.name}\n\nCategory: ${fund.category}\nRisk: ${fund.risk}\n3Y Returns: ${formatPercent(fund.return3Y)}\nRating: ${fund.rating}\nMinimum Investment: ${formatCurrency(fund.minimumInvestment)}`,
  );
}

const ExploreFundsSection = () => {
  const { filters, filteredFunds, updateFilter, resetFilters } = useFundExplorer();
  const [showFilters, setShowFilters] = useState(false);
  const filterPanelId = useId();

  const handleSortChange = (value: string) => {
    const option = SORT_OPTIONS.find((item) => item.value === value);
    if (!option) return;
    updateFilter("sortBy", option.value as SortKey);
    updateFilter("sortOrder", option.order);
  };

  const countLabel = `${filteredFunds.length} ${filteredFunds.length === 1 ? "fund" : "funds"} available`;

  return (
    <section id="explore" aria-labelledby="explore-title" className="scroll-mt-header py-10 md:py-12">
      <Container>
        <div role="group" aria-label="Filter by category" className="-mx-gutter flex gap-2 overflow-x-auto px-gutter md:mx-0 md:px-0">
          {CATEGORY_TABS.map((category) => (
            <Chip
              key={category}
              selected={filters.category === category}
              onClick={() => updateFilter("category", category)}
            >
              {category}
            </Chip>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 md:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="explore-title" className="font-serif text-2xl text-heading">
              Explore Mutual Funds
            </h2>
            <p aria-live="polite" className="mt-1 text-xs text-muted">
              {countLabel}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <SearchInput
              label="Search funds"
              placeholder="Search funds..."
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
              className="w-full sm:flex-1 lg:w-search-compact lg:flex-none"
            />
            <Button
              variant="subtle"
              size="sm"
              aria-expanded={showFilters}
              aria-controls={filterPanelId}
              onClick={() => setShowFilters((open) => !open)}
              className="w-full sm:h-button-md sm:w-auto"
            >
              <SlidersIcon className="size-icon-sm" />
              Filter
              {filters.risk !== "All" && (
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-2xs text-inverse">1</span>
              )}
            </Button>
            <Select
              aria-label="Sort funds"
              options={SORT_OPTIONS}
              value={filters.sortBy}
              onChange={(event) => handleSortChange(event.target.value)}
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        <div
          id={filterPanelId}
          hidden={!showFilters}
          className="mt-4 rounded-lg border border-card-border bg-surface p-4"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-xs font-semibold text-ink uppercase">Risk level</span>
              <div role="group" aria-label="Filter by risk" className="flex flex-wrap gap-2">
                {RISK_OPTIONS.map((risk) => (
                  <Chip key={risk} selected={filters.risk === risk} onClick={() => updateFilter("risk", risk)}>
                    {risk}
                  </Chip>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={resetFilters} className="self-start md:self-auto">
              Clear all
            </Button>
          </div>
        </div>

        {filteredFunds.length > 0 ? (
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filteredFunds.map((fund) => (
              <li key={fund.id}>
                <FundCard fund={fund} onViewDetails={showFundDetails} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 flex flex-col items-center rounded-lg border border-dashed border-card-border-hover bg-surface px-6 py-12 text-center">
            <p className="font-serif text-xl text-heading">No funds match your filters</p>
            <p className="mt-2 text-sm text-muted">Try a different search term or clear the filters.</p>
            <Button variant="secondary" className="mt-5" onClick={resetFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ExploreFundsSection;
