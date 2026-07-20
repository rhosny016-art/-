import type { Variants } from "framer-motion";

/** Standard fade-up entrance used across all section content. */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
};
