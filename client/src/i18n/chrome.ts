export type ChromeLocale = "en" | "zh";

export type ChromeCopy = {
  brandSubtitle: string;
  nav: Record<string, string>;
  footerTitle: string;
  footerBlurb: string;
  footerContact: string;
  footerInformation: string;
  footerRights: string;
  footerHospital: string;
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
    brandSubtitle: "Shanghai · International Patients",
    nav: {
      "/why-shanghai": "Why Flora",
      "/surgeons": "Doctors",
      "/procedures": "Procedures",
      "/patient-journey": "Patient Pathway",
      "/surgeon-verification": "Verification",
      "/consultation": "International Intake",
    },
    footerTitle: "Flora Shanghai Aesthetics Hospital",
    footerBlurb:
      "Flora is a Shanghai medical aesthetics hospital. This site is the hospital's brand site for international patients considering care in Shanghai.",
    footerContact: "Hospital contact",
    footerInformation: "Information",
    footerRights: "All rights reserved.",
    footerHospital: "Hospital of record: Flora Shanghai Aesthetics Hospital, Shanghai.",
    supportHours: "EN / 中文",
    inquiryFallback: "International patient inquiry",
    whatsappLabel: "WhatsApp",
    emailComingSoon: "Email — coming soon",
    whatsappComingSoon: "WhatsApp — coming soon",
    langEn: "EN",
    langZh: "中文",
    langAria: "Language",
  },
  zh: {
    brandSubtitle: "上海 · 国际患者",
    nav: {
      "/why-shanghai": "为何选择 Flora",
      "/surgeons": "医生",
      "/procedures": "项目",
      "/patient-journey": "就医路径",
      "/surgeon-verification": "资质核查",
      "/consultation": "国际患者登记",
    },
    footerTitle: "Flora 上海美学医院",
    footerBlurb: "Flora 是一家上海医疗美容医院。本网站是医院面向国际患者的官方网站。",
    footerContact: "医院联系",
    footerInformation: "信息说明",
    footerRights: "保留所有权利。",
    footerHospital: "医院主体：Flora 上海美学医院（上海）。",
    supportHours: "EN / 中文",
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
