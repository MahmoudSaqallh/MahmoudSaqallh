"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { personalInfo, t } from "@/lib/content";

const STORAGE_KEY = "splash-seen";
const MIN_DURATION = 2200;

export function SplashLoader() {
  const { locale } = useLocale();
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / MIN_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= MIN_DURATION) {
        clearInterval(interval);
        sessionStorage.setItem(STORAGE_KEY, "true");
        setShow(false);
        document.body.style.overflow = "";
      }
    }, 30);

    return () => clearInterval(interval);
  }, [show]);

  if (!mounted) return null;

  const name = t(personalInfo.name, locale);
  const title = t(personalInfo.title, locale);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-surface shadow-xl shadow-accent/10"
            >
              <span className="text-3xl font-bold text-accent">
                {name.charAt(0)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-2 text-2xl font-bold text-foreground sm:text-3xl"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-10 text-sm text-muted sm:text-base"
            >
              {title}
            </motion.p>

            <div className="w-48 sm:w-56">
              <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs font-medium text-muted"
              >
                {locale === "ar" ? "جاري التحميل..." : "Loading..."}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
