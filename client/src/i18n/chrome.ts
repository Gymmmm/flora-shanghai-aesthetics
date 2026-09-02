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
    heroLead: "Plastic surgery in Shanghai for international patients seeking thoughtful, personalized aesthetic care.",
    heroCaptionTitle: "SHANGHAI · MEDICAL AESTHETICS",
    heroCaptionSub: "Plastic surgery for international patients.",
    surgeonsEyebrow: "Shanghai surgeons",
    surgeonsTitle: "Meet the Surgeons",
    surgeonsLead: "Surgeon profiles for international patients researching Shanghai medical aesthetics. Credentials stay verification-honest — never invented.",
    footerTitle: "Flora Shanghai Aesthetics",
    footerBlurb: "Shanghai Medical Aesthetics / Plastic Surgery\nfor International Patients",
    footerContact: "Contact",
    footerInformation: "Information",
    supportHours: "24/7 Multi-language Support",
    inquiryFallback: "International patient inquiry",
    whatsappLabel: "WhatsApp (24h response)",
    emailComingSoon: "Contact email / coming soon",
    whatsappComingSoon: "WhatsApp / coming soon",
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
    heroLead: "为寻求审慎、个性化审美方案的国际患者，提供上海整形外科咨询与行程支持。",
    heroCaptionTitle: "上海 · 医疗美容",
    heroCaptionSub: "面向国际患者的整形外科。",
    surgeonsEyebrow: "上海医生",
    surgeonsTitle: "认识医生团队",
    surgeonsLead: "面向国际患者的上海医疗美容医生简介。资质信息保持核查诚实，从不编造。",
    footerTitle: "Flora 上海美学",
    footerBlurb: "上海医疗美容 / 整形外科\n服务国际患者",
    footerContact: "联系我们",
    footerInformation: "信息说明",
    supportHours: "多语言支持（尽量 24/7）",
    inquiryFallback: "国际患者咨询",
    whatsappLabel: "WhatsApp（约 24 小时回复）",
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
