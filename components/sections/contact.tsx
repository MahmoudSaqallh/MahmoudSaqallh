"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ScrollStagger } from "@/components/ui/scroll-stagger";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp } from "@/lib/animations";
import { contactContent, personalInfo, t } from "@/lib/content";

const contactLinks = [
  {
    icon: Phone,
    labelKey: "phoneLabel" as const,
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: Mail,
    labelKey: "emailLabel" as const,
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: personalInfo.whatsapp,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "GitHub",
    href: personalInfo.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "LinkedIn",
    href: personalInfo.linkedin,
  },
];

export function Contact() {
  const { locale } = useLocale();

  return (
    <SectionReveal id="contact" className="bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t(contactContent.title, locale)}
          subtitle={t(contactContent.subtitle, locale)}
        />

        <ScrollStagger className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2" stagger={0.1}>
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const label =
              "labelKey" in link && link.labelKey
                ? t(contactContent[link.labelKey], locale)
                : link.label;

            return (
              <motion.a
                key={label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted">{label}</p>
                  <p className="font-semibold text-foreground">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </ScrollStagger>

        <ScrollReveal direction="up" delay={0.3} className="mt-10 text-center">
          <motion.a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-light"
          >
            <MessageCircle className="h-4 w-4" />
            {t(contactContent.sendMessage, locale)}
          </motion.a>
        </ScrollReveal>
      </div>
    </SectionReveal>
  );
}
