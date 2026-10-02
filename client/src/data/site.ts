export const navItems = [["Why Shanghai", "/why-shanghai"], ["Surgeons", "/surgeons"], ["Procedures", "/procedures"], ["Patient Stories", "/cases"], ["Your Journey", "/patient-journey"], ["Verification", "/surgeon-verification"]] as const;

export const contact = {
  whatsapp: typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_WHATSAPP || "",
  email: typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_EMAIL || "",
  instagram: "",
  tiktok: "",
  reddit: "",
};

export const supportedLanguages = ["en", "ms", "id", "ru", "ar", "zh"] as const;
export const defaultLanguage = "en" as const;
export const legalReviewed = false;

export const siteCopy = {
  brand: "Flora Shanghai Aesthetics",
  tagline: "Still You. Just Refined.",
  audienceLine: "A Shanghai-based aesthetic surgery pathway designed for international patients.",
  consultationLine: "Start from home with an English-language inquiry. We help organize your questions, medical context, doctor review and Shanghai visit planning.",
  medicalBoundary: "Remote review is preliminary and does not replace an in-person medical assessment. Any diagnosis or treatment plan must be confirmed by an appropriately licensed clinician in the relevant clinical setting.",
  photoNotice: "Photos may be reviewed only to support a preliminary consultation. They are not a diagnosis and do not guarantee treatment suitability or outcome.",
};

export const verificationItems = ["Source", "Source link", "Last checked", "Context"];

export const attributionKeys = ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "landing_page", "referrer", "created_at"] as const;

export const analyticsEvents = ["view_doctor", "view_procedure", "view_case", "click_whatsapp", "start_consultation", "submit_consultation", "upload_photo", "view_verification", "view_patient_journey"] as const;

export const crmPipelineStatuses = ["NEW", "QUALIFIED", "PHOTOS_RECEIVED", "DOCTOR_REVIEW", "CONSULTATION", "QUOTED", "FOLLOW_UP", "DEPOSIT", "TRAVEL_CONFIRMED", "ARRIVED_SHANGHAI", "PROCEDURE_COMPLETED", "RECOVERY", "RETURNED_HOME", "LONG_TERM_FOLLOW_UP", "LOST"] as const;

export type LandingPage = { slug: string; title: string; titleZh: string; eyebrow: string; eyebrowZh: string; intro: string; introZh: string; audience: string; audienceZh: string; refuse: string; refuseZh: string; comparison: string; comparisonZh: string; procedureSlug: string; sourceChannel: string };
export const landingPages: LandingPage[] = [
  { slug: "rhinoplasty-malaysia", title: "Rhinoplasty in Shanghai", titleZh: "在上海重新认识鼻部比例", eyebrow: "For patients in Malaysia comparing options", eyebrowZh: "为正在比较选择的马来西亚患者", intro: "A remote first review for patients who want a refined bridge and a result that still feels like them.", introZh: "为希望改善鼻部立体度、但仍想保留自己辨识度的患者，提供一次远程初步评估。", audience: "For patients in Malaysia comparing Shanghai with Korea and Thailand.", audienceZh: "适合正在比较上海、韩国与泰国选择的马来西亚患者。", refuse: "We do not sell a copied Korean nose, a Westernised face, or a guaranteed result.", refuseZh: "我们不提供复制韩国鼻型、西化面部或结果保证。", comparison: "Korea is the benchmark many patients know; Thailand is the packaged-travel benchmark; Shanghai is a hospital-city, planning-led third look.", comparisonZh: "韩国是许多人熟悉的参照，泰国是套餐式医疗旅行的参照，上海则是以医院与规划为核心的第三种视角。", procedureSlug: "rhinoplasty", sourceChannel: "malaysia" },
  { slug: "eyelid-sea", title: "Eyelid Surgery in Shanghai", titleZh: "在上海重新理解眼睑设计", eyebrow: "For patients in Southeast Asia", eyebrowZh: "为东南亚患者", intro: "Start with crease, expression and the way your eyes already belong to your face—not a template fold.", introZh: "从眼睑褶皱、表情与眼睛原本的气质开始，而不是套用模板式的褶皱。", audience: "For patients in Southeast Asia who want a clearer first conversation about expression and proportion.", audienceZh: "适合希望先从表情与比例出发、展开更清晰初步沟通的东南亚患者。", refuse: "We do not prescribe a crease height or use a Western fold as the default.", refuseZh: "我们不在营销页面预设褶皱高度，也不把西式褶皱作为默认答案。", comparison: "Korea is the benchmark many patients know; Thailand is the packaged-travel benchmark; Shanghai is a hospital-city, planning-led third look.", comparisonZh: "韩国是许多人熟悉的参照，泰国是套餐式医疗旅行的参照，上海则是以医院与规划为核心的第三种视角。", procedureSlug: "eyelid-surgery", sourceChannel: "sea" },
  { slug: "rhinoplasty-indonesia", title: "Rhinoplasty in Shanghai", titleZh: "在上海重新认识鼻部比例", eyebrow: "For patients in Indonesia comparing options", eyebrowZh: "为正在比较选择的印度尼西亚患者", intro: "A remote first review for patients looking for proportion, context and a more informed starting point.", introZh: "为希望从比例、背景与充分信息开始的患者，提供一次远程初步评估。", audience: "For patients in Indonesia comparing Shanghai with Korea and Thailand.", audienceZh: "适合正在比较上海、韩国与泰国选择的印度尼西亚患者。", refuse: "We do not sell a copied Korean nose, a Westernised face, or a guaranteed result.", refuseZh: "我们不提供复制韩国鼻型、西化面部或结果保证。", comparison: "Korea is the benchmark many patients know; Thailand is the packaged-travel benchmark; Shanghai is a hospital-city, planning-led third look.", comparisonZh: "韩国是许多人熟悉的参照，泰国是套餐式医疗旅行的参照，上海则是以医院与规划为核心的第三种视角。", procedureSlug: "rhinoplasty", sourceChannel: "indonesia" },
  { slug: "revision-rhinoplasty", title: "Revision Rhinoplasty in Shanghai", titleZh: "在上海重新开始修复评估", eyebrow: "For patients considering revision surgery", eyebrowZh: "为正在考虑修复手术的患者", intro: "Begin with your records, previous procedure and current concerns before discussing what may be appropriate next.", introZh: "先从既往病历、手术记录与当前困扰开始，再讨论下一步是否适合。", audience: "For patients who need a records-first review before travelling or choosing a surgeon.", audienceZh: "适合希望在出行或选择医生前，先进行以记录为核心评估的患者。", refuse: "We do not promise that a previous result can be undone or that revision is always possible.", refuseZh: "我们不承诺可以撤销既往结果，也不承诺修复手术一定适合或可行。", comparison: "Korea is the benchmark many patients know; Thailand is the packaged-travel benchmark; Shanghai is a hospital-city, planning-led third look.", comparisonZh: "韩国是许多人熟悉的参照，泰国是套餐式医疗旅行的参照，上海则是以医院与规划为核心的第三种视角。", procedureSlug: "revision-rhinoplasty", sourceChannel: "revision" },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
