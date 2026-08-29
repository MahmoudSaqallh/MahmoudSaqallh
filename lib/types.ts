export type Locale = "ar" | "en";

export type LocalizedString = Record<Locale, string>;

export interface NavItem {
  id: string;
  label: LocalizedString;
  href?: string;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export type ProjectCategory = "html" | "react";

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  technologies: string[];
  url: string;
  category: ProjectCategory;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "whatsapp";
}

export interface PersonalInfo {
  name: LocalizedString;
  title: LocalizedString;
  phone: string;
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface ResumeEntry {
  title: LocalizedString;
  organization: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
}
