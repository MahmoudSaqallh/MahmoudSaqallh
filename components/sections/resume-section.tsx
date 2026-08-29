"use client";

import { motion } from "framer-motion";
import type { LocalizedString } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export function ResumeSection({ title, children, delay = 0 }: ResumeSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      variants={fadeInUp}
      custom={delay}
      className="mb-10"
    >
      <h2 className="mb-4 flex items-center gap-3 text-lg font-bold text-foreground sm:text-xl">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {title}
        <span className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </motion.section>
  );
}

interface ResumeEntryCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export function ResumeEntryCard({
  title,
  organization,
  period,
  description,
}: ResumeEntryCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-5 transition-colors hover:border-accent/30">
      <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-foreground">{title}</h3>
          <p className="text-sm font-medium text-accent">{organization}</p>
        </div>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {period}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export function ResumeEntryList({
  items,
  locale,
  t,
}: {
  items: {
    title: LocalizedString;
    organization: LocalizedString;
    period: LocalizedString;
    description: LocalizedString;
  }[];
  locale: "ar" | "en";
  t: (text: LocalizedString, locale: "ar" | "en") => string;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ResumeEntryCard
          key={item.title.en}
          title={t(item.title, locale)}
          organization={t(item.organization, locale)}
          period={t(item.period, locale)}
          description={t(item.description, locale)}
        />
      ))}
    </div>
  );
}
