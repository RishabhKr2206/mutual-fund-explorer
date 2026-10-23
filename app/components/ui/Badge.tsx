import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant = "success" | "warning" | "danger" | "neutral";
export type BadgeSize = "sm" | "md";

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
  neutral: "bg-surface-muted text-ink",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "rounded-sm px-2 py-0.5 text-2xs font-medium",
  md: "rounded-full px-2.5 py-1 text-xs font-semibold",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  /** For data-driven colors from the theme (e.g. `riskColors`), overrides `variant`. */
  style?: CSSProperties;
}

export function Badge({ children, variant = "neutral", size = "md", className, style }: BadgeProps) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap",
        sizeClasses[size],
        !style && variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
