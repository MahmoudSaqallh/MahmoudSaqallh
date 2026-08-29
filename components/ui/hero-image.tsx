"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
  src: string;
  alt: string;
  badge?: string;
}

export function HeroImage({ src, alt, badge }: HeroImageProps) {
  return (
    <div className="relative flex items-center justify-center py-4">
      {/* soft glow */}
      <div className="absolute h-64 w-64 rounded-full bg-accent/20 blur-[60px] sm:h-80 sm:w-80" />

      {/* outer ring — static, clean */}
      <div className="absolute h-[300px] w-[300px] rounded-full border border-accent/20 sm:h-[360px] sm:w-[360px]" />
      <div className="absolute h-[316px] w-[316px] rounded-full border border-dashed border-accent/10 sm:h-[376px] sm:w-[376px]" />

      {/* portrait */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="relative h-72 w-72 overflow-hidden rounded-full sm:h-80 sm:w-80">
          {/* gradient border */}
          <div
            className="absolute -inset-[3px] z-0 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-light), var(--accent))",
            }}
          />

          <div className="relative z-10 m-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] overflow-hidden rounded-full bg-background">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 288px, 320px"
            />
          </div>
        </div>

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2 text-xs font-semibold text-foreground shadow-lg"
          >
            <span className="me-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {badge}
          </motion.div>
        )}
      </motion.div>

      {/* corner accents */}
      <motion.div
        className="absolute end-[12%] top-[18%] h-3 w-3 rounded-full bg-accent"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[20%] start-[10%] h-2 w-2 rounded-full bg-accent-light"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
}
