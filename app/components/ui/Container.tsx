import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

/** Horizontal gutters on the outside, so content is exactly `max-w-page` (1152px) wide. */
export function Container({ children, className, innerClassName }: ContainerProps) {
  return (
    <div className={cn("w-full px-gutter md:px-8", className)}>
      <div className={cn("mx-auto w-full max-w-page", innerClassName)}>{children}</div>
    </div>
  );
}
