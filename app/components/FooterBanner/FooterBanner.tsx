import React from "react";
import { buttonClasses, ChevronRightIcon, Container, ShieldCheckIcon, SparklesIcon } from "../ui";

const FooterBanner = () => {
  return (
    <section aria-labelledby="cta-title" className="pb-12 md:pb-16">
      <Container>
        <div className="grid overflow-hidden rounded-lg md:min-h-banner-min md:grid-cols-[2fr_1fr] lg:grid-cols-[7fr_3fr]">
          <div className="flex flex-col justify-center bg-primary p-8 md:p-10">
            <span
              aria-hidden
              className="flex size-banner-icon items-center justify-center rounded-md bg-on-primary-overlay text-inverse"
            >
              <SparklesIcon className="size-icon-md" />
            </span>
            <h2 id="cta-title" className="mt-5 font-serif text-2xl text-inverse">
              Start investing today
            </h2>
            <p className="mt-3 max-w-banner-content text-sm leading-6 text-on-primary-muted">
              Build a diversified portfolio with expert-curated funds and investments that match your goals.
            </p>
            <a href="#explore" className={buttonClasses({ variant: "inverse", size: "sm", className: "mt-6 self-start" })}>
              Get Started
              <ChevronRightIcon className="size-icon-sm" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 bg-accent px-6 py-11 text-inverse md:gap-3">
            <ShieldCheckIcon className="size-24 md:size-18" strokeWidth={1.75} />
            <p className="text-sm font-semibold">Secure. Simple. Transparent.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterBanner;
