"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectsContent, t } from "@/lib/content";
import { projects } from "@/lib/projects";
import type { ProjectCategory } from "@/lib/types";

type FilterKey = "all" | ProjectCategory;

const filters: FilterKey[] = ["all", "html", "react"];

export function Projects() {
  const { locale } = useLocale();
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <SectionReveal id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t(projectsContent.title, locale)}
          subtitle={t(projectsContent.subtitle, locale)}
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((key) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-accent bg-accent text-white shadow-lg shadow-accent/25"
                    : "border-border bg-surface text-muted hover:border-accent/50 hover:text-accent"
                }`}
              >
                {t(projectsContent.filters[key], locale)}
                <span
                  className={`ms-2 rounded-full px-1.5 py-0.5 text-xs ${
                    isActive ? "bg-white/20 text-white" : "bg-border/70 text-muted"
                  }`}
                >
                  {key === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === key).length}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center text-muted"
            >
              {t(projectsContent.empty, locale)}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
}
