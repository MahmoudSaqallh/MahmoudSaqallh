"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="mb-12 text-center"
    >
      <motion.h2
        variants={fadeInUp}
        custom={0}
        className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          custom={0.1}
          className="mx-auto max-w-2xl text-base text-muted sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={{
          hidden: { width: 0, opacity: 0 },
          visible: {
            width: 64,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-accent to-accent-light"
      />
    </motion.div>
  );
}
