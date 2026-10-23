import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const SearchIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const ChevronRightIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...baseProps} strokeWidth={2.5} {...props}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const TrendingUpIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

export const SlidersIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
);

export const SparklesIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M10 4.5 11.6 9l4.4 1.5-4.4 1.6L10 16.5 8.4 12 4 10.5 8.4 9 10 4.5Z" />
    <path d="M18 3v4M16 5h4M18 16v4M16 18h4" />
  </svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg {...baseProps} fill="currentColor" stroke="none" {...props}>
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);

export const BarChartIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 4v16h16" />
    <path d="M9 16v-4M13 16V9M17 16v-6" />
  </svg>
);
