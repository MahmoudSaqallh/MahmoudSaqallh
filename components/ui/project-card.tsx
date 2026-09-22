"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { projectsContent, t } from "@/lib/content";
import type { Project } from "@/lib/types";
import { ImageLightbox } from "@/components/ui/image-lightbox";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { locale } = useLocale();
  const hasUrl = project.url && project.url !== "#";
  const images =
    project.images && project.images.length > 0 ? project.images : [project.image];
  const hasSlider = images.length > 1;
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!hasSlider) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [hasSlider, images.length]);

  const goTo = (i: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(i);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActive((c) => (c + 1) % images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const cardContent = (
    <>
      <div
        className={`relative aspect-video overflow-hidden ${!hasUrl ? "cursor-zoom-in" : ""}`}
        onClick={!hasUrl ? openLightbox : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={t(project.title, locale)}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        {hasUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg">
              {t(projectsContent.viewProject, locale)}
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        )}

        {!hasUrl && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-lg backdrop-blur">
              <Maximize2 className="h-4 w-4" />
            </span>
          </div>
        )}

        {hasSlider && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute start-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-accent hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute end-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-accent hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute inset-x-0 bottom-2 z-10 flex items-center justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => goTo(i, e)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
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

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          alt={t(project.title, locale)}
          index={active}
          onIndexChange={setActive}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </motion.article>
  );
}
