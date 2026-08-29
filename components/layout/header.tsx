"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/components/providers/locale-provider";
import { LangToggle } from "@/components/ui/lang-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems, personalInfo, t } from "@/lib/content";

export function Header() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string, href?: string) => {
    setIsOpen(false);
    if (href) return;
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {isHome ? (
          <button
            onClick={() => handleNav("home")}
            className="text-lg font-bold text-foreground transition-colors hover:text-accent"
          >
            {t(personalInfo.name, locale).split(" ")[0]}
            <span className="text-accent">.</span>
          </button>
        ) : (
          <Link
            href="/"
            className="text-lg font-bold text-foreground transition-colors hover:text-accent"
          >
            {t(personalInfo.name, locale).split(" ")[0]}
            <span className="text-accent">.</span>
          </Link>
        )}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.href ? "text-accent" : "text-muted"
                }`}
              >
                {t(item.label, locale)}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNav(item.id, item.href)}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {t(item.label, locale)}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) =>
                item.href ? (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent"
                    >
                      {t(item.label, locale)}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNav(item.id, item.href)}
                    className="rounded-lg px-4 py-3 text-start text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent"
                  >
                    {t(item.label, locale)}
                  </motion.button>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
