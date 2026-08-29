"use client";

import { motion } from "framer-motion";
import type { Skill, SkillCategory } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

const categoryAccent: Record<SkillCategory, string> = {
  frontend: "from-blue-500/20 to-cyan-500/10 border-blue-500/25 group-hover:border-blue-400/50",
  backend: "from-emerald-500/20 to-green-500/10 border-emerald-500/25 group-hover:border-emerald-400/50",
  tools: "from-violet-500/20 to-purple-500/10 border-violet-500/25 group-hover:border-violet-400/50",
};

const iconBg: Record<SkillCategory, string> = {
  frontend: "bg-blue-500/15 text-blue-500 dark:text-blue-400",
  backend: "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400",
  tools: "bg-violet-500/15 text-violet-500 dark:text-violet-400",
};

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -3, scale: 1.04 }}
      className={`group inline-flex items-center gap-2.5 rounded-xl border bg-gradient-to-br px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-accent/5 ${categoryAccent[skill.category]}`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm ${iconBg[skill.category]}`}
        role="img"
        aria-hidden
      >
        {skill.icon}
      </span>
      <span className="whitespace-nowrap text-xs font-semibold text-foreground sm:text-sm">
        {skill.name}
      </span>
    </motion.div>
  );
}
