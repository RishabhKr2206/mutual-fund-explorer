import { mediaQueries } from "../theme/theme";
import { useMediaQuery } from "./useMediaQuery";

export function useBreakpoint() {
  const isSm = useMediaQuery(mediaQueries.sm);
  const isMd = useMediaQuery(mediaQueries.md);
  const isLg = useMediaQuery(mediaQueries.lg);
  const isXl = useMediaQuery(mediaQueries.xl);

  return {
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
    isSm,
    isMd,
    isLg,
    isXl,
  };
}
