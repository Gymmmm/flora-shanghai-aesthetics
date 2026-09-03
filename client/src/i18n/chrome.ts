export type ChromeLocale = "en" | "zh";

export type ChromeCopy = {
  brandSubtitle: string;
  nav: Record<string, string>;
  privateConsultation: string;
  startConsultation: string;
  exploreSurgeons: string;
  viewAllSurgeons: string;
  submitForReview: string;
  heroEyebrow: string;
  heroLead: string;
  heroCaptionTitle: string;
  heroCaptionSub: string;
  surgeonsEyebrow: string;
  surgeonsTitle: string;
  surgeonsLead: string;
  footerTitle: string;
  footerBlurb: string;
  footerContact: string;
  footerInformation: string;
  supportHours: string;
  inquiryFallback: string;
  whatsappLabel: string;
  emailComingSoon: string;
  whatsappComingSoon: string;
  langEn: string;
  langZh: string;
  langAria: string;
};

export const chromeCopy: Record<ChromeLocale, ChromeCopy> = {
  en: {
    brandSubtitle: "Shanghai Medical Aesthetics",
    nav: {
      "/why-shanghai": "Why Shanghai",
      "/surgeons": "Surgeons",
      "/procedures": "Procedures",
      "/cases": "Patient Stories",
      "/patient-journey": "Your Journey",
      "/surgeon-verification": "Verification",
    },
    privateConsultation: "Private Consultation",
    startConsultation: "Start Consultation",
    exploreSurgeons: "Explore Surgeons",
    viewAllSurgeons: "View all surgeons",
    submitForReview: "Submit for Review",
    heroEyebrow: "Shanghai Medical Aesthetics / Plastic Surgery for International Patients",
    heroLead: "Refine — do not redefine. A consultation-first pathway for international patients considering plastic surgery in Shanghai.",
    heroCaptionTitle: "SHANGHAI · MEDICAL AESTHETICS",
    heroCaptionSub: "A considered approach to change.",
    surgeonsEyebrow: "Shanghai surgeons",
    surgeonsTitle: "Meet the Surgeons",
    surgeonsLead: "Start with the questions that matter. Each profile is written so expertise, focus and verification status are easy to understand.",
    footerTitle: "Flora Shanghai Aesthetics",
    footerBlurb: "Shanghai Medical Aesthetics / Plastic Surgery\nfor International Patients",
    footerContact: "Contact",
    footerInformation: "Information",
    supportHours: "Multi-language support",
    inquiryFallback: "International patient inquiry",
    whatsappLabel: "WhatsApp",
    emailComingSoon: "Email — coming soon",
    whatsappComingSoon: "WhatsApp — coming soon",
    langEn: "EN",
    langZh: "中文",
    langAria: "Language",
  },
  zh: {
    brandSubtitle: "上海医疗美容",
    nav: {
      "/why-shanghai": "为何上海",
      "/surgeons": "医生团队",
      "/procedures": "项目介绍",
      "/cases": "患者故事",
      "/patient-journey": "就医旅程",
      "/surgeon-verification": "资质核查",
    },
    privateConsultation: "私人咨询",
    startConsultation: "开始咨询",
    exploreSurgeons: "了解医生",
    viewAllSurgeons: "查看全部医生",
    submitForReview: "提交初步咨询",
    heroEyebrow: "上海医疗美容 / 面向国际患者的整形外科路径",
    heroLead: "精致，而不是重塑。为考虑在上海求诊的国际患者，提供咨询优先、可验证的就医路径。",
    heroCaptionTitle: "上海 · 医疗美容",
    heroCaptionSub: "对变化的审慎方式。",
    surgeonsEyebrow: "上海医生",
    surgeonsTitle: "认识医生团队",
    surgeonsLead: "从真正重要的问题开始。每份简介都让专长、方向与核验状态更容易理解。",
    footerTitle: "Flora 上海美学",
    footerBlurb: "上海医疗美容 / 整形外科\n服务国际患者",
    footerContact: "联系我们",
    footerInformation: "信息说明",
    supportHours: "多语言支持",
    inquiryFallback: "国际患者咨询",
    whatsappLabel: "WhatsApp",
    emailComingSoon: "邮箱 / 即将开通",
    whatsappComingSoon: "WhatsApp / 即将开通",
    langEn: "EN",
    langZh: "中文",
    langAria: "语言切换",
  },
};

export const footerLinkLabels: Record<ChromeLocale, Record<string, string>> = {
  en: {
    "/privacy": "Privacy Policy",
    "/medical-disclaimer": "Medical Disclaimer",
    "/terms": "Terms of Use",
    "/patient-media-consent": "Patient Media Consent",
    "/data-processing-notice": "Data Processing Notice",
  },
  zh: {
    "/privacy": "隐私政策",
    "/medical-disclaimer": "医疗免责声明",
    "/terms": "使用条款",
    "/patient-media-consent": "患者影像授权",
    "/data-processing-notice": "数据处理说明",
  },
};
