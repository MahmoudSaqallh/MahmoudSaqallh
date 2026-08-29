"use client";

import { useLocale } from "@/components/providers/locale-provider";

export function LangToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-surface px-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
      aria-label={locale === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      {locale === "ar" ? "EN" : "ع"}
    </button>
  );
}
