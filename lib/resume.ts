import type { LocalizedString } from "./types";

export const resumePdfPath = "/resume.pdf";

export const resumeContent = {
  pageTitle: { ar: "السيرة الذاتية", en: "Resume" },
  downloadPdf: { ar: "تحميل PDF", en: "Download PDF" },
  summary: {
    title: { ar: "نبذة", en: "Summary" },
    text: {
      ar: "مطور Full Stack متخصص في MERN Stack مع خبرة في بناء مواقع وتطبيقات ويب احترافية. أعمل على تطوير واجهات مستخدم حديثة، APIs قوية، وقواعد بيانات فعّالة. أهتم بالأداء، تجربة المستخدم، والكود النظيف.",
      en: "Full Stack developer specialized in the MERN Stack with experience building professional websites and web applications. I develop modern user interfaces, robust APIs, and efficient databases with a focus on performance, UX, and clean code.",
    },
  },
  experience: {
    title: { ar: "الخبرة العملية", en: "Work Experience" },
    items: [
      {
        title: { ar: "مطور MERN Stack", en: "MERN Stack Developer" },
        organization: { ar: "عمل حر / مستقل", en: "Freelance" },
        period: { ar: "2023 — الحاضر", en: "2023 — Present" },
        description: {
          ar: "تطوير مواقع وتطبيقات ويب كاملة للعملاء باستخدام React و Next.js و Node.js و MongoDB. بناء متاجر إلكترونية، منصات تعليمية، ومواقع شركات.",
          en: "Developing full web applications for clients using React, Next.js, Node.js, and MongoDB. Building e-commerce stores, education platforms, and corporate websites.",
        },
      },
      {
        title: { ar: "مطور ويب Frontend", en: "Frontend Web Developer" },
        organization: { ar: "مشاريع شخصية وعملاء", en: "Personal & Client Projects" },
        period: { ar: "2022 — 2023", en: "2022 — 2023" },
        description: {
          ar: "بناء واجهات مستخدم تفاعلية باستخدام HTML و CSS و JavaScript و Bootstrap و Tailwind CSS و jQuery.",
          en: "Building interactive user interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and jQuery.",
        },
      },
    ],
  },
  education: {
    title: { ar: "التعليم", en: "Education" },
    items: [
      {
        title: { ar: "بكالوريوس علم الحاسوب", en: "Bachelor's in Computer Science" },
        organization: { ar: "جامعة فلسطين", en: "Palestine University" },
        period: { ar: "2019 — 2023", en: "2019 — 2023" },
        description: {
          ar: "تخصص في هندسة البرمجيات وتطوير تطبيقات الويب.",
          en: "Specialized in software engineering and web application development.",
        },
      },
    ],
  },
  skills: {
    title: { ar: "المهارات", en: "Skills" },
  },
  projects: {
    title: { ar: "المشاريع", en: "Projects" },
  },
  contact: {
    title: { ar: "التواصل", en: "Contact" },
  },
};

export function tResume(text: LocalizedString, locale: "ar" | "en"): string {
  return text[locale];
}
