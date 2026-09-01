"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { t } from "@/lib/content";
import type { LocalizedString } from "@/lib/types";

const TYPE_SPEED = 60;
const ERASE_SPEED = 35;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 400;
const START_DELAY = 600;

type Phase = "typing" | "pause-after" | "erasing" | "pause-before";

interface AnimatedTitleProps {
  phrases: LocalizedString[];
  className?: string;
}

export function AnimatedTitle({ phrases, className }: AnimatedTitleProps) {
  const { locale } = useLocale();
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const words = phrases.map((phrase) => t(phrase, locale));

    let phraseIndex = 0;
    let charIndex = 0;
    let phase: Phase = "typing";
    let timeoutId = 0;

    const schedule = (fn: () => void, delay: number) => {
      timeoutId = window.setTimeout(fn, delay);
    };

    const tick = () => {
      const word = words[phraseIndex];

      if (phase === "typing") {
        if (charIndex < word.length) {
          charIndex += 1;
          textEl.textContent = word.slice(0, charIndex);
          schedule(tick, TYPE_SPEED);
          return;
        }
        phase = "pause-after";
        schedule(tick, PAUSE_AFTER);
        return;
      }

      if (phase === "pause-after") {
        phase = "erasing";
        schedule(tick, 0);
        return;
      }

      if (phase === "erasing") {
        if (charIndex > 0) {
          charIndex -= 1;
          textEl.textContent = word.slice(0, charIndex);
          schedule(tick, ERASE_SPEED);
          return;
        }
        phase = "pause-before";
        schedule(tick, PAUSE_BEFORE);
        return;
      }

      phraseIndex = (phraseIndex + 1) % words.length;
      phase = "typing";
      schedule(tick, 0);
    };

    schedule(tick, START_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [locale, phrases]);

  return (
    <span className={className}>
      <span ref={textRef} className="text-accent" />
      <span
        className="animate-blink ms-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] rounded-[1px] bg-accent align-middle"
        aria-hidden="true"
      />
    </span>
  );
}
