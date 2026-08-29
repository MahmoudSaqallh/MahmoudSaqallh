"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";

interface ScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function ScrollStagger({
  children,
  className,
  stagger = 0.12,
}: ScrollStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
