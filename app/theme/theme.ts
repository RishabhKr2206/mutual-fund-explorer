import type { CSSProperties } from "react";
import type { FundCategory, RiskLevel } from "../types/fund";

/* -------------------------------------------------------------------------- */
/*                                   Utils                                    */
/* -------------------------------------------------------------------------- */

export const BASE_FONT_SIZE = 16;

/** pxToRem(24) -> "1.5rem" */
export function pxToRem(px: number, base: number = BASE_FONT_SIZE): string {
  return `${Number((px / base).toFixed(4))}rem`;
}

/** remToPx("1.5rem") -> 24 */
export function remToPx(rem: string | number, base: number = BASE_FONT_SIZE): number {
  return parseFloat(String(rem)) * base;
}

/**
 * withAlpha("#12397C", 0.12) -> "rgba(18, 57, 124, 0.12)"
 * withAlpha("oklch(36% .12 261)", 0.12) -> "color-mix(in oklch, oklch(36% .12 261) 12%, transparent)"
 */
export function withAlpha(color: string, alpha: number): string {
  if (!color.startsWith("#")) {
    return `color-mix(in oklch, ${color} ${Number((alpha * 100).toFixed(2))}%, transparent)`;
  }
  const value = color.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const toKebab = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/* -------------------------------------------------------------------------- */
/*                                   Colors                                   */
/* -------------------------------------------------------------------------- */

export const colors = {
  primary: "oklch(36% .12 261)",
  primaryHover: "oklch(31% .12 261)",
  primarySoft: "#EDF4FC",

  heading: "#05142B",
  ink: "#11223C",
  body: "#596676",
  muted: "#5C6D86",
  subtle: "#8A8F93",
  inverse: "#FFFFFF",

  menuText: "#3C1121",
  menuHover: "#FEF7FA",

  surface: "#FFFFFF",
  /** Root background behind every section. */
  background: "oklch(98.5% .006 255)",
  surfaceSubtle: "oklch(98.5% .006 255)",
  surfaceHero: "oklch(96.5% .025 253)",
  surfaceMuted: "#EDF4FC",
  chartBar: "#E7EFF9",

  border: "#D4DFED",
  inputBorder: "#CCD2E2",
  cardBorder: "#E6EBF2",
  cardBorderHover: "#C5CCD4",
  outline: "#7D8995",
  placeholder: "#93989B",

  chip: "#E6F0FC",
  chipText: "#263552",
  star: "#E58A00",
  starEmpty: "#D9DEE5",

  accent: "#178E3A",
  onPrimaryMuted: "#C3CEDE",
  onPrimaryOverlay: "#36578E",

  success: "#288650",
  successSoft: "#D5F8E2",
  warning: "#B45309",
  warningSoft: "#FEF3C7",
  danger: "#B91C1C",
  dangerSoft: "#FEE2E2",
} as const;

type TagColors = { text: string; background: string };

export const riskColors: Record<RiskLevel, TagColors> = {
  Low: { text: "#36854E", background: "#D5F5DE" },
  Moderate: { text: "#B7801E", background: "#FFF0C7" },
  High: { text: "#C93A4A", background: "#FFE4E1" },
  "Very High": { text: "#C93A4A", background: "#FFE4E1" },
};

/** `icon` tints the fund logo placeholder; `iconBackground` is its tile. */
export const categoryColors: Record<FundCategory, TagColors & { icon: string; iconBackground: string }> = {
  Equity: { text: "#2F80C1", background: "#D7F1FD", icon: "#4B8FC0", iconBackground: "#D3F3FF" },
  Debt: { text: "#2F8A4C", background: "#D5F5DE", icon: "#509964", iconBackground: "#D3FADB" },
  Hybrid: { text: "#8A5CC2", background: "#F4E4FF", icon: "#8969B2", iconBackground: "#F4E7FF" },
  "Index Funds": { text: "#B07B12", background: "#FFECC3", icon: "#B88E2A", iconBackground: "#FFEEC6" },
};

/* -------------------------------------------------------------------------- */
/*                                Breakpoints                                 */
/* -------------------------------------------------------------------------- */

// Tailwind reads breakpoints from static CSS, so app/globals.css repeats these
// as `--breakpoint-*`. Keep both in sync.
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const mediaQueries = {
  sm: `(min-width: ${pxToRem(breakpoints.sm)})`,
  md: `(min-width: ${pxToRem(breakpoints.md)})`,
  lg: `(min-width: ${pxToRem(breakpoints.lg)})`,
  xl: `(min-width: ${pxToRem(breakpoints.xl)})`,
  "2xl": `(min-width: ${pxToRem(breakpoints["2xl"])})`,
} as const satisfies Record<Breakpoint, string>;

/* -------------------------------------------------------------------------- */
/*                              Spacing & sizes                               */
/* -------------------------------------------------------------------------- */

/** Tailwind spacing unit: `p-4` = 4 * unit = 16px. */
export const spacingUnit = pxToRem(4);

/** Fixed widths, used as `max-w-*` / `w-*`. */
export const containers = {
  page: pxToRem(1152),
  heroContent: pxToRem(588),
  heroCard: pxToRem(472),
  heroCardMobile: pxToRem(448),
  searchCompact: pxToRem(224),
  bannerContent: pxToRem(600),
  footerBrand: pxToRem(320),
} as const;

/** Fixed heights and element sizes, used as `h-*` / `size-*`. */
export const sizes = {
  header: pxToRem(72),
  headerMobile: pxToRem(64),
  breadcrumb: pxToRem(48),
  logoMark: pxToRem(32),
  iconSm: pxToRem(16),
  iconBase: pxToRem(18),
  iconMd: pxToRem(20),
  buttonSm: pxToRem(36),
  buttonMd: pxToRem(40),
  buttonLg: pxToRem(48),
  input: pxToRem(56),
  inputMobile: pxToRem(48),
  chart: pxToRem(128),
  fundIcon: pxToRem(40),
  bannerIcon: pxToRem(40),
  bannerMin: pxToRem(312),
  star: pxToRem(14),
  gutter: pxToRem(16),
} as const;

export const radii = {
  sm: pxToRem(6),
  md: pxToRem(8),
  lg: pxToRem(12),
  xl: pxToRem(16),
  full: pxToRem(9999),
} as const;

export const shadows = {
  input: `0 ${pxToRem(1)} ${pxToRem(2)} ${withAlpha(colors.heading, 0.06)}`,
  card: `0 ${pxToRem(12)} ${pxToRem(32)} ${withAlpha(colors.primary, 0.12)}`,
  fundCard: `0 ${pxToRem(2)} ${pxToRem(8)} ${withAlpha(colors.primary, 0.05)}`,
  fundCardHover: `0 ${pxToRem(12)} ${pxToRem(28)} ${withAlpha(colors.primary, 0.12)}`,
  menu: `0 ${pxToRem(16)} ${pxToRem(24)} ${withAlpha(colors.heading, 0.08)}`,
} as const;

/* -------------------------------------------------------------------------- */
/*                                 Typography                                 */
/* -------------------------------------------------------------------------- */

export const typography = {
  fontFamily: {
    sans: "var(--font-manrope), Manrope, Arial, sans-serif",
    serif: "var(--font-dm-serif-display), 'DM Serif Display', Georgia, serif",
  },
  fontSize: {
    "2xs": { size: pxToRem(11), lineHeight: pxToRem(16) },
    xs: { size: pxToRem(12), lineHeight: pxToRem(16) },
    sm: { size: pxToRem(13), lineHeight: pxToRem(20) },
    base: { size: pxToRem(15), lineHeight: pxToRem(24) },
    md: { size: pxToRem(16), lineHeight: pxToRem(26) },
    lg: { size: pxToRem(18), lineHeight: pxToRem(30) },
    xl: { size: pxToRem(24), lineHeight: pxToRem(32) },
    "2xl": { size: pxToRem(28), lineHeight: pxToRem(36) },
    displaySm: { size: pxToRem(36), lineHeight: pxToRem(44) },
    displayMd: { size: pxToRem(52), lineHeight: pxToRem(64) },
    display: { size: pxToRem(64), lineHeight: pxToRem(80) },
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    eyebrow: "0.06em",
    tight: "-0.01em",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Theme                                    */
/* -------------------------------------------------------------------------- */

export const theme = {
  colors,
  riskColors,
  categoryColors,
  breakpoints,
  mediaQueries,
  spacingUnit,
  containers,
  sizes,
  radii,
  shadows,
  typography,
} as const;

export type Theme = typeof theme;

type TokenTree = { [key: string]: string | number | TokenTree };

function flattenTokens(prefix: string, tokens: TokenTree, out: Record<string, string>) {
  for (const [key, value] of Object.entries(tokens)) {
    const name = `${prefix}-${toKebab(key)}`;
    if (typeof value === "object") flattenTokens(name, value, out);
    else out[name] = String(value);
  }
  return out;
}

/**
 * Theme tokens as `--fw-*` CSS custom properties. Applied on <html> in
 * app/layout.tsx; app/globals.css maps them onto Tailwind utilities.
 */
export const themeCssVariables = flattenTokens(
  "--fw",
  {
    color: colors,
    spacing: { unit: spacingUnit },
    container: containers,
    size: sizes,
    radius: radii,
    shadow: shadows,
    font: typography.fontFamily,
    text: typography.fontSize,
    tracking: typography.letterSpacing,
  },
  {},
) as CSSProperties;

export default theme;
