export const navItems = [["Why Shanghai", "/why-shanghai"], ["Surgeons", "/surgeons"], ["Procedures", "/procedures"], ["Cases", "/cases"], ["Patient Journey", "/patient-journey"], ["Verify", "/surgeon-verification"]] as const;

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
  medicalBoundary: "Remote review is not a final diagnosis. Final treatment plans must be confirmed by a licensed doctor in appropriate clinical context.",
  photoNotice: "Photos are reviewed only for preliminary consultation and do not constitute diagnosis.",
};

export const verificationItems = ["Source name", "Source URL", "Verification date", "Context note"];

export const attributionKeys = ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "landing_page", "referrer", "created_at"] as const;

export const analyticsEvents = ["view_doctor", "view_procedure", "view_case", "click_whatsapp", "start_consultation", "submit_consultation", "upload_photo", "view_verification", "view_patient_journey"] as const;

export const crmPipelineStatuses = ["NEW", "QUALIFIED", "PHOTOS_RECEIVED", "DOCTOR_REVIEW", "CONSULTATION", "QUOTED", "FOLLOW_UP", "DEPOSIT", "TRAVEL_CONFIRMED", "ARRIVED_SHANGHAI", "PROCEDURE_COMPLETED", "RECOVERY", "RETURNED_HOME", "LONG_TERM_FOLLOW_UP", "LOST"] as const;

export type LandingPage = { slug: string; title: string; eyebrow: string; intro: string; procedureSlug?: string; sourceChannel: string };
export const landingPages: LandingPage[] = [
  { slug: "rhinoplasty-malaysia", title: "Rhinoplasty in Shanghai", eyebrow: "Malaysia / international patient pathway", intro: "A focused entry point for questions about rhinoplasty, verification, and planning in Shanghai.", procedureSlug: "rhinoplasty", sourceChannel: "malaysia" },
  { slug: "revision-rhinoplasty", title: "Revision Rhinoplasty", eyebrow: "A context-first pathway", intro: "Start with previous surgery, current concerns, and the questions a clinician needs to review.", procedureSlug: "revision-rhinoplasty", sourceChannel: "revision" },
  { slug: "why-shanghai", title: "Why Shanghai", eyebrow: "A broader point of view", intro: "Understand the city, the care pathway, and the information needed before a decision.", sourceChannel: "city" },
  { slug: "surgeon-verification", title: "Surgeon Verification", eyebrow: "Evidence before preference", intro: "Learn how factual profile information should be sourced, dated, and contextualized.", sourceChannel: "verification" },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
