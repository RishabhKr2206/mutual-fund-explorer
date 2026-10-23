import React from "react";
import { HERO_BREADCRUMBS } from "../../constants/navigation";
import { Breadcrumb, Container } from "../ui";
import { HeroSearch } from "./HeroSearch";
import { PortfolioCard } from "./PortfolioCard";

export const HeroSection = () => {
  return (
    <section aria-labelledby="hero-title" className="bg-surface-hero">
      <div className="border-b border-border bg-surface-subtle">
        <Container innerClassName="flex h-breadcrumb items-center">
          <Breadcrumb items={HERO_BREADCRUMBS} />
        </Container>
      </div>

      <Container innerClassName="flex flex-col gap-10 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-18">
        <div className="w-full lg:max-w-hero-content">
          <p className="text-xs font-bold tracking-eyebrow text-success uppercase">10,000+ Mutual Funds</p>
          <h1
            id="hero-title"
            className="mt-5 font-serif text-display-sm text-heading md:text-display-md lg:text-display"
          >
            Find the right investment for your goals
          </h1>
          <p className="mt-5 max-w-hero-content text-md leading-7 text-body md:mt-6 md:text-lg">
            Compare top-rated mutual funds, track your portfolio, and invest seamlessly — all in one place.
            Start your SIP from as little as ₹500.
          </p>
          <HeroSearch className="mt-8" />
        </div>

        <PortfolioCard className="mx-auto w-full max-w-hero-card-mobile lg:mx-0 lg:w-hero-card lg:max-w-hero-card lg:shrink-0" />
      </Container>
    </section>
  );
};
