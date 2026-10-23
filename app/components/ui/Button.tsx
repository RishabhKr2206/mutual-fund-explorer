import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "subtle" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-inverse hover:bg-primary-hover",
  secondary: "bg-primary-soft text-primary hover:bg-chart-bar",
  outline: "border border-outline bg-surface-subtle text-ink hover:border-primary hover:bg-primary-soft hover:text-primary",
  subtle: "border border-border bg-surface-subtle text-ink hover:border-outline",
  ghost: "bg-transparent text-ink hover:bg-surface-muted",
  inverse: "bg-surface text-ink hover:bg-primary-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-button-sm px-4 text-sm",
  md: "h-button-md px-5 text-base",
  lg: "h-button-lg px-6 text-md",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "size-button-sm",
  md: "size-button-md",
  lg: "size-button-lg",
};

const baseClasses =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/** Button styles for non-button elements, e.g. `<a className={buttonClasses({ variant: "inverse" })}>`. */
export function buttonClasses({ variant = "primary", size = "md", fullWidth = false, className }: ButtonStyleOptions = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], fullWidth && "w-full", className);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export function Button({ variant, size, fullWidth, type = "button", className, ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size, fullWidth, className })} {...props} />;
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function IconButton({
  variant = "ghost",
  size = "md",
  type = "button",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses[variant], iconSizeClasses[size], className)}
      {...props}
    />
  );
}
