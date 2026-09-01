"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { HeroImage } from "@/components/ui/hero-image";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { useLocale } from "@/components/providers/locale-provider";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { heroContent, personalInfo, t } from "@/lib/content";

export function Hero() {
  const { locale } = useLocale();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="hero-blob absolute -start-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-blob absolute -end-32 bottom-20 h-96 w-96 rounded-full bg-accent-light/15 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute start-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

        <div className="hero-grid absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-start"
        >
          <motion.p
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
          >
            {t(heroContent.greeting, locale)}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            custom={0.1}
            className="mb-4 text-white bg-clip-text text-3xl font-bold tracking-tighter  sm:text-4xl lg:text-5xl"
          >
            {t(personalInfo.name, locale)}
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            custom={0.2}
            className="mb-6 text-2xl font-semibold text-muted sm:text-3xl"
          >
            <AnimatedTitle phrases={heroContent.roles} />
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={0.3}
            className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            {t(heroContent.subtitle, locale)}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={0.4}
            className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white"
            >
              {t(heroContent.ctaProjects, locale)}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-border bg-surface px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t(heroContent.ctaContact, locale)}
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={0.5}
            className="flex items-center justify-center gap-4 lg:justify-start"
          >
            {[
              { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
              { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              { href: `tel:${personalInfo.phone}`, icon: Phone, label: "Phone" },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="order-1 flex justify-center lg:order-2"
        >
          <HeroImage
            src="/profile.jpg"
            alt={t(personalInfo.name, locale)}
            badge={t(personalInfo.title, locale)}
          />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
