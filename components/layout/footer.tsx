"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { footerContent, personalInfo, t } from "@/lib/content";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp}
      className="border-t border-border bg-surface/50 py-8"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} {t(personalInfo.name, locale)}. {t(footerContent.rights, locale)}.
        </p>
        <p className="mt-2 text-xs text-muted/70">
          {t(footerContent.builtWith, locale)}
        </p>
      </div>
    </motion.footer>
  );
}
