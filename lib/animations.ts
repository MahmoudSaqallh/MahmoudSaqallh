import type { Variants } from "framer-motion";

export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px" as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

export const scrollSection: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export type ScrollDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

export const scrollVariants: Record<ScrollDirection, Variants> = {
  up: fadeInUp,
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  left: slideInLeft,
  right: slideInRight,
  scale: scaleIn,
  fade: fadeIn,
};
