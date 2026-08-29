"use client";

import { motion } from "framer-motion";
import { scrollSection, viewportConfig } from "@/lib/animations";

interface SectionRevealProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionReveal({ id, children, className = "" }: SectionRevealProps) {
  return (
    <section id={id} className={className}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={scrollSection}
      >
        {children}
      </motion.div>
    </section>
  );
}
