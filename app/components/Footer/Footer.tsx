import React from "react";
import { COPYRIGHT_YEAR, FOOTER_LINK_GROUPS } from "../../constants/navigation";
import { Container, Logo } from "../ui";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <Container innerClassName="grid grid-cols-1 gap-12 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:py-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 text-base text-muted lg:mt-4 lg:max-w-footer-brand lg:text-sm">
            Helping you invest with clarity and confidence.
          </p>
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-base font-semibold text-ink lg:text-sm">{group.title}</h2>
            <ul className="mt-4 flex flex-col gap-2 lg:gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-muted transition-colors hover:text-primary lg:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container innerClassName="py-5 text-center">
          <p className="text-sm text-muted lg:text-xs">© {COPYRIGHT_YEAR} FundWise. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
