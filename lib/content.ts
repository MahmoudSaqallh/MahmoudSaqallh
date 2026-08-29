import type { LocalizedString, NavItem, Skill } from "./types";

export const personalInfo = {
  name: {
    ar: "محمود ساق الله",
    en: "Mahmoud Saq Allah",
  },
  title: {
    ar: "مطور MERN Stack",
    en: "MERN Stack Developer",
  },
  phone: "0599663952",
  whatsapp: "https://wa.me/970599663952",
  email: "mahmoudsaqallah@gmail.com",
  github: "https://github.com/MahmoudSaqallh",
  linkedin: "https://linkedin.com/in/mahmoudsaqallah",
};

export const navItems: NavItem[] = [
  {
    id: "home",
    label: { ar: "الرئيسية", en: "Home" },
  },
  {
    id: "about",
    label: { ar: "عني", en: "About" },
  },
  {
    id: "skills",
    label: { ar: "المهارات", en: "Skills" },
  },
  {
    id: "projects",
    label: { ar: "أعمالي", en: "Projects" },
  },
  {
    id: "contact",
    label: { ar: "تواصل", en: "Contact" },
  },
  {
    id: "resume",
    label: { ar: "السيرة", en: "Resume" },
    href: "/resume",
  },
];

export const heroContent = {
  greeting: {
    ar: "مرحباً، أنا",
    en: "Hi, I'm",
  },
  subtitle: {
    ar: "أبني تطبيقات ويب حديثة وسريعة باستخدام MERN Stack",
    en: "I build modern, fast web applications using the MERN Stack",
  },
  ctaProjects: {
    ar: "عرض أعمالي",
    en: "View My Work",
  },
  ctaContact: {
    ar: "تواصل معي",
    en: "Contact Me",
  },
};

export const aboutContent = {
  title: { ar: "عني", en: "About Me" },
  bio: {
    ar: "مطور Full Stack متخصص في بناء تطبيقات ويب احترافية باستخدام MongoDB و Express و React و Node.js. أهتم بتجربة المستخدم، الأداء العالي، والكود النظيف. أعمل على تحويل الأفكار إلى منتجات رقمية متكاملة.",
    en: "A Full Stack developer specialized in building professional web applications using MongoDB, Express, React, and Node.js. I focus on user experience, high performance, and clean code. I turn ideas into complete digital products.",
  },
  stats: [
    {
      value: "6+",
      label: { ar: "مشاريع منجزة", en: "Projects Done" },
    },
    {
      value: "18+",
      label: { ar: "تقنيات", en: "Technologies" },
    },
    {
      value: "2+",
      label: { ar: "سنوات خبرة", en: "Years Experience" },
    },
  ],
};

export const skillsContent = {
  title: { ar: "مهاراتي", en: "My Skills" },
  subtitle: {
    ar: "التقنيات والأدوات التي أعمل بها يومياً",
    en: "Technologies and tools I work with daily",
  },
  categories: {
    frontend: { ar: "واجهات أمامية", en: "Frontend" },
    backend: { ar: "خلفية وتطبيقات", en: "Backend" },
    tools: { ar: "أدوات ومنصات", en: "Tools & Platforms" },
  },
};

export const skills: Skill[] = [
  { name: "HTML", icon: "🌐", category: "frontend" },
  { name: "CSS", icon: "💎", category: "frontend" },
  { name: "JavaScript", icon: "📜", category: "frontend" },
  { name: "TypeScript", icon: "📘", category: "frontend" },
  { name: "jQuery", icon: "📦", category: "frontend" },
  { name: "Bootstrap", icon: "🅱️", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Sass", icon: "🎯", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Redux", icon: "🔄", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Express.js", icon: "⚡", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "REST APIs", icon: "🔗", category: "backend" },
  { name: "Git", icon: "📂", category: "tools" },
  { name: "GitHub", icon: "🐙", category: "tools" },
  { name: "Postman", icon: "📮", category: "tools" },
  { name: "npm", icon: "📋", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Figma", icon: "🎭", category: "tools" },
  { name: "Vercel", icon: "🚀", category: "tools" },
];

export const projectsContent = {
  title: { ar: "أعمالي", en: "My Projects" },
  subtitle: {
    ar: "مجموعة من المشاريع التي قمت بتطويرها",
    en: "A collection of projects I've developed",
  },
  viewProject: { ar: "عرض المشروع", en: "View Project" },
  filters: {
    all: { ar: "الكل", en: "All" },
    html: { ar: "HTML / CSS / JS", en: "HTML / CSS / JS" },
    react: { ar: "React & Next.js", en: "React & Next.js" },
  },
  empty: {
    ar: "لا توجد مشاريع في هذا التصنيف",
    en: "No projects in this category",
  },
};

export const contactContent = {
  title: { ar: "تواصل معي", en: "Get In Touch" },
  subtitle: {
    ar: "هل لديك مشروع أو فكرة؟ يسعدني التواصل معك",
    en: "Have a project or idea? I'd love to hear from you",
  },
  phoneLabel: { ar: "الهاتف", en: "Phone" },
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" },
  sendMessage: { ar: "أرسل رسالة", en: "Send a Message" },
};

export const footerContent = {
  rights: {
    ar: "جميع الحقوق محفوظة",
    en: "All rights reserved",
  },
  builtWith: {
    ar: "صُنع بـ Next.js و Tailwind CSS",
    en: "Built with Next.js & Tailwind CSS",
  },
};

export function t(text: LocalizedString, locale: "ar" | "en"): string {
  return text[locale];
}
