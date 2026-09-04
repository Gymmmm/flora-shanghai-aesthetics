export const navItems = [["Why Shanghai", "/why-shanghai"], ["Surgeons", "/surgeons"], ["Procedures", "/procedures"], ["Patient Stories", "/cases"], ["Your Journey", "/patient-journey"], ["Verification", "/surgeon-verification"]] as const;

/** Digits for wa.me builders: strip non-digits (App.tsx already does .replace(/\D/g, "")). */
export const DEFAULT_WHATSAPP = "+855 969510544";

export const DEFAULT_INSTAGRAM = "goat.2014238";

export const contact = {
  whatsapp: (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_WHATSAPP) || DEFAULT_WHATSAPP,
  email: typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_EMAIL || "",
  instagram: (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_INSTAGRAM) || DEFAULT_INSTAGRAM,
  tiktok: "",
  reddit: "",
};

export const supportedLanguages = ["en", "ms", "id", "ru", "ar", "zh"] as const;
export const defaultLanguage = "en" as const;
export const legalReviewed = false;

export const siteCopy = {
  brand: "Flora Shanghai Aesthetics",
  tagline: "Still You. Just Refined.",
  audienceLine: "Shanghai Medical Aesthetics / Plastic Surgery for International Patients.",
  consultationLine: "Start from home. No travel required for the first conversation. We help organise questions, medical context, surgeon review and — if it is appropriate — a Shanghai visit.",
  medicalBoundary: "Remote review is preliminary and does not replace an in-person medical assessment. Any diagnosis or treatment plan must be confirmed by an appropriately licensed clinician in the relevant clinical setting.",
  photoNotice: "Photos may be reviewed only to support a preliminary consultation. They are not a diagnosis and do not guarantee treatment suitability or outcome.",
};

export const verificationItems = ["Source", "Source link", "Last checked", "Context"];

export const attributionKeys = ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "landing_page", "referrer", "created_at"] as const;

export const analyticsEvents = ["view_doctor", "view_procedure", "view_case", "click_whatsapp", "start_consultation", "submit_consultation", "upload_photo", "view_verification", "view_patient_journey"] as const;

export const crmPipelineStatuses = ["NEW", "QUALIFIED", "PHOTOS_RECEIVED", "DOCTOR_REVIEW", "CONSULTATION", "QUOTED", "FOLLOW_UP", "DEPOSIT", "TRAVEL_CONFIRMED", "ARRIVED_SHANGHAI", "PROCEDURE_COMPLETED", "RECOVERY", "RETURNED_HOME", "LONG_TERM_FOLLOW_UP", "LOST"] as const;

export type LandingPage = { slug: string; title: string; eyebrow: string; intro: string; procedureSlug?: string; sourceChannel: string };
export const landingPages: LandingPage[] = [
  { slug: "rhinoplasty-malaysia", title: "Rhinoplasty in Shanghai", eyebrow: "Malaysia & Singapore pathway", intro: "Korea is often the first comparison. Shanghai is a second look: a planning-led conversation about proportion, breathing and a result that still reads as you. Start remotely from Kuala Lumpur or Singapore before any flight is booked.", procedureSlug: "rhinoplasty", sourceChannel: "malaysia" },
  { slug: "rhinoplasty-indonesia", title: "Rhinoplasty in Shanghai", eyebrow: "Indonesia pathway", intro: "Start in English from Jakarta, Surabaya or Bali. A remote review comes first. Travel to Shanghai is a later decision, not a package you buy from a webpage.", procedureSlug: "rhinoplasty", sourceChannel: "indonesia" },
  { slug: "revision-rhinoplasty", title: "Revision Rhinoplasty in Shanghai", eyebrow: "For patients considering revision surgery", intro: "Begin with your previous procedure, current concerns and the records a surgeon would need. Revision is a context-first pathway — not a promise that everything can be undone.", procedureSlug: "revision-rhinoplasty", sourceChannel: "revision" },
  { slug: "eyelid-sea", title: "Eyelid Surgery in Shanghai", eyebrow: "Southeast Asia pathway", intro: "Eyelid design is one of the most searched procedures among patients travelling within Asia. Flora starts with expression and anatomy, not a single crease template. A virtual review can happen before you decide whether Shanghai is the right city.", procedureSlug: "eyelid-surgery", sourceChannel: "asean" },
  { slug: "why-shanghai", title: "Why Consider Shanghai?", eyebrow: "For international patients", intro: "Compare Shanghai with Korea and Thailand using public market context, then decide whether a remote consultation is worth your time. No outcome is promised on a webpage.", sourceChannel: "city" },
  { slug: "surgeon-verification", title: "How We Present Surgeon Information", eyebrow: "Evidence before preference", intro: "See how profile claims are labelled, sourced and separated from information that is still awaiting independent verification.", sourceChannel: "verification" },
];

export const footerLinks = [
  ["Malaysia & Singapore", "/lp/rhinoplasty-malaysia"],
  ["Indonesia", "/lp/rhinoplasty-indonesia"],
  ["Eyelid / SEA", "/lp/eyelid-sea"],
  ["Revision", "/lp/revision-rhinoplasty"],
  ["Privacy Policy", "/privacy"],
  ["Medical Disclaimer", "/medical-disclaimer"],
  ["Terms of Use", "/terms"],
  ["Patient Media Consent", "/patient-media-consent"],
  ["Data Processing Notice", "/data-processing-notice"],
] as const;
