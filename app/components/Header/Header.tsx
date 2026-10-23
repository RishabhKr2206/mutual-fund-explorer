"use client";

import React, { useEffect, useId, useState } from "react";
import { NAV_LINKS } from "../../constants/navigation";
import { cn } from "../../utils/cn";
import { Button, CloseIcon, Container, IconButton, Logo, MenuIcon, SearchIcon } from "../ui";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container innerClassName="flex h-header-mobile items-center justify-between gap-6 md:h-header">
        <Logo />

        <nav aria-label="Primary" className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-primary",
                    link.active ? "font-semibold text-ink" : "text-muted",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <IconButton aria-label="Search" size="sm" className="text-ink">
            <SearchIcon className="size-icon-base" />
          </IconButton>
          <div className="hidden md:block">
            <Button size="sm">Log in</Button>
          </div>
          <IconButton
            variant="subtle"
            size="sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden"
          >
            {isMenuOpen ? <CloseIcon className="size-icon-md" /> : <MenuIcon className="size-icon-md" />}
          </IconButton>
        </div>
      </Container>

      <div id={menuId} hidden={!isMenuOpen} className="border-t border-border md:hidden">
        <Container innerClassName="py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={link.active ? "page" : undefined}
                    className="-mx-2 block rounded-sm px-2 py-1.5 font-sans text-md leading-6 font-normal tracking-normal text-menu-text transition-colors hover:bg-menu-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button size="sm" fullWidth className="mt-2" onClick={closeMenu}>
            Log In
          </Button>
        </Container>
      </div>
    </header>
  );
}

export default Header;
