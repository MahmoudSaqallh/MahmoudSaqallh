"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ScrollStagger } from "@/components/ui/scroll-stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { aboutContent, t } from "@/lib/content";

export function About() {
  const { locale } = useLocale();

  return (
    <SectionReveal id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t(aboutContent.title, locale)}
          subtitle={t(aboutContent.bio, locale)}
        />

        <ScrollStagger className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {aboutContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label.en}
              variants={fadeInUp}
              custom={index * 0.1}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl border border-border bg-surface p-6 text-center transition-shadow hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <motion.p
                className="mb-2 text-3xl font-bold text-accent"
                variants={scaleIn}
                custom={0.2}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm font-medium text-muted">
                {t(stat.label, locale)}
              </p>
            </motion.div>
          ))}
        </ScrollStagger>
      </div>
    </SectionReveal>
  );
}
