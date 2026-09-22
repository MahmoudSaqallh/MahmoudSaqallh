import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "lilia",
    title: {
      ar: "Lilia",
      en: "Lilia",
    },
    description: {
      ar: "موقع وكالة رقمية حديثة يعرض الخدمات والأعمال بأسلوب عصري وجذاب",
      en: "A modern digital agency website showcasing services and work with a sleek design",
    },
    image: "/projects/lilia.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://incredible-bubblegum-63ecb1.netlify.app/",
    category: "html",
  },
  {
    id: "games",
    title: {
      ar: "Mahmoud",
      en: "Mahmoud",
    },
    description: {
      ar: "موقع شخصي بأسلوب ووردبريس يشارك الكتب والألعاب والقصص والأحداث الشخصية",
      en: "A WordPress-style personal website sharing books, games, stories, and personal events",
    },
    image: "/projects/games.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://gamess-chi.vercel.app/",
    category: "html",
  },
  {
    id: "for-education",
    title: {
      ar: "FOR EDUCATION",
      en: "FOR EDUCATION",
    },
    description: {
      ar: "منصة تعليم إلكتروني متكاملة لإدارة الدورات والمحتوى التعليمي",
      en: "A complete e-learning platform for managing courses and educational content",
    },
    image: "/projects/for-education.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://cozy-gumdrop-c02ca5.netlify.app/",
    category: "html",
  },
  {
    id: "shop",
    title: {
      ar: "ShoOp",
      en: "ShoOp",
    },
    description: {
      ar: "متجر إلكتروني للأزياء مع واجهة مستخدم أنيقة وتجربة تسوق سلسة",
      en: "A fashion e-commerce store with an elegant UI and smooth shopping experience",
    },
    image: "/projects/shop.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://melodious-meringue-9b35d0.netlify.app/",
    category: "html",
  },
  {
    id: "amiri-schools",
    title: {
      ar: "المدارس الأميرية",
      en: "Amiri Schools",
    },
    description: {
      ar: "موقع مدرسة عربي شامل يعرض البرامج التعليمية والأنشطة والتواصل مع أولياء الأمور",
      en: "A comprehensive Arabic school website showcasing programs, activities, and parent communication",
    },
    image: "/projects/amiri-schools.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://dazzling-gumption-8ce4ae.netlify.app/",
    category: "html",
  },
  {
    id: "orvena",
    title: {
      ar: "Orvena",
      en: "Orvena",
    },
    description: {
      ar: "متجر أزياء إلكتروني عصري مبني بـ Next.js مع أداء عالي وتصميم فاخر",
      en: "A modern fashion e-commerce store built with Next.js featuring high performance and luxury design",
    },
    image: "/projects/orvena.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://fastidious-shortbread-cb638e.netlify.app/",
    category: "react",
  },
  {
    id: "public-service-association",
    title: {
      ar: "جمعية الخدمة العامة",
      en: "Public Service Association",
    },
    description: {
      ar: "موقع طبي لجمعية الخدمة العامة ومجموعة مستشفياتها مع العيادات والحجز وبوابة المريض",
      en: "A medical website for the Public Service Association and its hospitals with clinics, booking, and patient portal",
    },
    image: "/projects/public-service-association.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://scintillating-bombolone-86d1be.netlify.app/",
    category: "react",
  },
  {
    id: "dqq",
    title: {
      ar: "Dqq",
      en: "Dqq",
    },
    description: {
      ar: "نظام ذكي لإدارة المستودعات والمتاجر الإلكترونية، يسهّل تجهيز الطلبات ويقلل الأخطاء ويرفع كفاءة عمليات الشحن والتخزين",
      en: "An intelligent warehouse and e-commerce management system that streamlines order fulfillment, reduces errors, and improves shipping and inventory efficiency",
    },
    image: "/projects/dqq.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    url: "https://dqq-rco3.vercel.app/",
    category: "react",
  },
  {
    id: "travelor",
    title: {
      ar: "Travelor",
      en: "Travelor",
    },
    description: {
      ar: "موقع سياحة وسفر يعرض الوجهات والرحلات السياحية مع تصميم عصري وواجهة سهلة الاستخدام",
      en: "A tour and travel website showcasing destinations and trips with a modern design and easy-to-use interface",
    },
    image: "/projects/travelor.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    url: "https://travelor-pjsm.vercel.app/",
    category: "react",
  },
  {
    id: "dqq-dashboard",
    title: {
      ar: "لوحة تحكم دقّق",
      en: "Dqq Dashboard",
    },
    description: {
      ar: "لوحة تحكم إدارية لنظام دقّق تعرض الطلبات وبوالص الشحن والتقارير وأداء المستودعات بواجهة تحكم متكاملة",
      en: "An admin dashboard for the Dqq system covering orders, waybills, reports, and warehouse performance in one control panel",
    },
    image: "/projects/dqq-dashboard-1.png",
    images: [
      "/projects/dqq-dashboard-1.png",
      "/projects/dqq-dashboard-2.png",
      "/projects/dqq-dashboard-3.png",
      "/projects/dqq-dashboard-4.png",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    url: "#",
    category: "react",
  },
];
