import type { BreadcrumbItem } from "../components/ui/Breadcrumb";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Investments", href: "#explore", active: true },
  { label: "Research", href: "#" },
  { label: "Learn", href: "#" },
];

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_LINKS = [
  { label: "Mutual Funds", href: "#explore" },
  { label: "Calculators", href: "#" },
  { label: "Help Center", href: "#" },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  { title: "Products", links: FOOTER_LINKS },
  { title: "Resources", links: FOOTER_LINKS },
  { title: "Support", links: FOOTER_LINKS },
];

export const COPYRIGHT_YEAR = 2026;

export const HERO_BREADCRUMBS: BreadcrumbItem[] = [
  { label: "Home", href: "#" },
  { label: "Investments", href: "#" },
  { label: "Mutual Funds" },
];
