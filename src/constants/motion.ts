/**
 * MOTION VARIANTS & SPECIFICATIONS
 * Standardized animation variants for the Portfolio website.
 * Uses Framer Motion v12 package (motion/react).
 */

export const TRANSITIONS = {
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  smooth: {
    type: "tween" as const,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: 1.2,
  },
  fast: {
    type: "tween" as const,
    ease: "easeOut" as const,
    duration: 0.4,
  },
  slow: {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 1.2,
  },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const FADE_UP = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const FADE_DOWN = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

export const FADE_LEFT = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150 },
};

export const FADE_RIGHT = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -150 },
};

export const STAGGER_CONTAINER = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const HOVER_SCALE = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.2,
};

// HELPER: Combine variants with transitions
export const createVariant = (variant: any, transition: any = TRANSITIONS.smooth) => ({
  ...variant,
  animate: {
    ...variant.animate,
    transition,
  },
});
