"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ScrollStagger } from "@/components/ui/scroll-stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";
import { skills, skillsContent, t } from "@/lib/content";
import type { SkillCategory } from "@/lib/types";

const categories: SkillCategory[] = ["frontend", "backend", "tools"];

const categoryDot: Record<SkillCategory, string> = {
  frontend: "bg-blue-500",
  backend: "bg-emerald-500",
  tools: "bg-violet-500",
};

export function Skills() {
  const { locale } = useLocale();

  return (
    <SectionReveal id="skills" className="relative overflow-hidden bg-surface/30 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-20 top-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -end-20 bottom-1/4 h-64 w-64 rounded-full bg-accent-light/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t(skillsContent.title, locale)}
          subtitle={t(skillsContent.subtitle, locale)}
        />

        <div className="space-y-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <ScrollReveal key={category} direction="up" delay={catIndex * 0.1}>
                <div className="rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur-sm sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${categoryDot[category]}`}
                    />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
                      {t(skillsContent.categories[category], locale)}
                    </h3>
                    <div className="h-px flex-1 bg-border" />
                    <span className="rounded-full bg-border/60 px-2 py-0.5 text-xs font-medium text-muted">
                      {categorySkills.length}
                    </span>
                  </div>

                  <ScrollStagger
                    className="flex flex-wrap gap-2.5"
                    stagger={0.04}
                  >
                    {categorySkills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </ScrollStagger>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
