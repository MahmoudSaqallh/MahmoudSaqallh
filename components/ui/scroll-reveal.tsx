"use client";

import { motion } from "framer-motion";
import {
  scrollVariants,
  viewportConfig,
  type ScrollDirection,
} from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: ScrollDirection;
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={scrollVariants[direction]}
      custom={delay}
      transition={duration ? { duration } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
