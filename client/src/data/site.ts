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

export type LandingPage = { slug: string; title: string; eyebrow: string; intro: string; procedureSlug?: string; sourceChannel: string };
export const landingPages: LandingPage[] = [
  { slug: "rhinoplasty-malaysia", title: "Rhinoplasty in Shanghai", eyebrow: "For patients travelling from Malaysia", intro: "Explore surgeon profiles, consultation questions, recovery considerations and practical planning before deciding whether a trip to Shanghai is right for you.", procedureSlug: "rhinoplasty", sourceChannel: "malaysia" },
  { slug: "revision-rhinoplasty", title: "Revision Rhinoplasty in Shanghai", eyebrow: "For patients considering revision surgery", intro: "Begin with your previous procedure, current concerns and the information a surgeon would need before discussing revision options.", procedureSlug: "revision-rhinoplasty", sourceChannel: "revision" },
  { slug: "why-shanghai", title: "Why Consider Shanghai?", eyebrow: "For international patients", intro: "Understand the city, the clinical pathway and the practical support available before you decide whether Shanghai belongs on your shortlist.", sourceChannel: "city" },
  { slug: "surgeon-verification", title: "How We Present Surgeon Information", eyebrow: "Evidence before preference", intro: "See how profile claims are labelled, sourced and separated from information that is still awaiting independent verification.", sourceChannel: "verification" },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
