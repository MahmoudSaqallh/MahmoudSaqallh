"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Home } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const notFoundContent = {
  title: { ar: "الصفحة غير موجودة", en: "Page Not Found" },
  subtitle: {
    ar: "عذراً، الصفحة اللي بتدور عليها مش موجودة أو تم نقلها.",
    en: "Sorry, the page you're looking for doesn't exist or has been moved.",
  },
  home: { ar: "العودة للرئيسية", en: "Back to Home" },
  resume: { ar: "عرض السيرة", en: "View Resume" },
};

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-8xl font-bold text-transparent sm:text-9xl"
          >
            404
          </motion.p>

          <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            {notFoundContent.title[locale]}
          </h1>
          <p className="mx-auto mb-10 max-w-md text-muted">
            {notFoundContent.subtitle[locale]}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              <Home className="h-4 w-4" />
              {notFoundContent.home[locale]}
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FileText className="h-4 w-4" />
              {notFoundContent.resume[locale]}
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
