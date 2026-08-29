"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { projectsContent, t } from "@/lib/content";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useLocale();
  const hasUrl = project.url && project.url !== "#";

  const cardContent = (
    <>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={t(project.title, locale)}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        {hasUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg">
              {t(projectsContent.viewProject, locale)}
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground">
          {t(project.title, locale)}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted">
          {t(project.description, locale)}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
    >
      {hasUrl ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
          aria-label={`${t(projectsContent.viewProject, locale)} - ${t(project.title, locale)}`}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.article>
  );
}
