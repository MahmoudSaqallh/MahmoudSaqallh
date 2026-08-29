"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { useLocale } from "@/components/providers/locale-provider";
import {
  ResumeEntryList,
  ResumeSection,
} from "@/components/sections/resume-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { personalInfo, skills, t } from "@/lib/content";
import { projects } from "@/lib/projects";
import { resumeContent, resumePdfPath } from "@/lib/resume";

export default function ResumePage() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === "ar" ? "العودة للرئيسية" : "Back to Home"}
            </Link>

            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="mb-1 text-3xl font-bold text-foreground sm:text-4xl">
                    {t(personalInfo.name, locale)}
                  </h1>
                  <p className="text-lg font-medium text-accent">
                    {t(personalInfo.title, locale)}
                  </p>
                </div>
                <a
                  href={resumePdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
                >
                  <Download className="h-4 w-4" />
                  {t(resumeContent.downloadPdf, locale)}
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {personalInfo.phone}
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <ResumeSection title={t(resumeContent.summary.title, locale)}>
            <p className="leading-relaxed text-muted">
              {t(resumeContent.summary.text, locale)}
            </p>
          </ResumeSection>

          <ResumeSection
            title={t(resumeContent.experience.title, locale)}
            delay={0.1}
          >
            <ResumeEntryList
              items={resumeContent.experience.items}
              locale={locale}
              t={t}
            />
          </ResumeSection>

          <ResumeSection
            title={t(resumeContent.education.title, locale)}
            delay={0.15}
          >
            <ResumeEntryList
              items={resumeContent.education.items}
              locale={locale}
              t={t}
            />
          </ResumeSection>

          <ResumeSection
            title={t(resumeContent.skills.title, locale)}
            delay={0.2}
          >
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection
            title={t(resumeContent.projects.title, locale)}
            delay={0.25}
          >
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-border bg-surface/50 p-4"
                >
                  <h3 className="font-semibold text-foreground">
                    {t(project.title, locale)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {t(project.description, locale)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ResumeSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
