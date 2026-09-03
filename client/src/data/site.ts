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

export type LandingPage = {
  slug: string;
  title: string;
  italic?: string;
  eyebrow: string;
  intro: string;
  points?: string[];
  procedureSlug?: string;
  sourceChannel: string;
};
export const landingPages: LandingPage[] = [
  {
    slug: "rhinoplasty-malaysia",
    title: "Rhinoplasty from Malaysia",
    italic: "still you.",
    eyebrow: "Malaysia → Shanghai",
    intro: "Patients in KL, Penang and Johor already compare Korea and Thailand. Shanghai is the next comparison when the goal is a quieter nose — structure and proportion, not a trend line.",
    points: [
      "First step: WhatsApp inquiry from home. No flight until a surgeon review says the case belongs in clinic.",
      "What we discuss: previous surgery, breathing, skin thickness, and the look you do not want.",
      "Why this route: English-capable coordination, short-haul Asia flights, and a recovery plan before you leave Shanghai.",
    ],
    procedureSlug: "rhinoplasty",
    sourceChannel: "malaysia",
  },
  {
    slug: "singapore",
    title: "Shanghai from Singapore",
    italic: "a second school.",
    eyebrow: "Singapore → Shanghai",
    intro: "Singapore patients often already have a regulated local option. The reason to look at Shanghai is not price alone — it is a different facial planning school, especially for revision and natural eyelid or nasal work.",
    points: [
      "Fit: second opinions, revision questions, and patients who do not want a ‘done’ look.",
      "Process: remote consult first, then a defined stay window if an in-person plan is appropriate.",
      "Tone: hospital-grade planning, verification-honest surgeon pages, no package theatre.",
    ],
    procedureSlug: "revision-rhinoplasty",
    sourceChannel: "singapore",
  },
  {
    slug: "indonesia",
    title: "Shanghai from Indonesia",
    italic: "plan the return.",
    eyebrow: "Indonesia → Shanghai",
    intro: "Outbound aesthetic travel from Indonesia is growing quickly. The useful question is not only who operates — it is how you get home, who follows the swelling, and what happens if revision is later discussed.",
    points: [
      "Channel: WhatsApp first. Bahasa or English. Photos only through the approved inquiry path.",
      "Stay: build the calendar around swelling and flights, not around a weekend city break.",
      "Aftercare: remote follow-up is available; it does not replace local medical care if something changes.",
    ],
    procedureSlug: "eyelid-surgery",
    sourceChannel: "indonesia",
  },
  {
    slug: "revision-rhinoplasty",
    title: "Revision Rhinoplasty in Shanghai",
    italic: "history first.",
    eyebrow: "For patients considering revision",
    intro: "Begin with your previous procedure, current concerns and the information a surgeon would need before discussing revision options.",
    points: [
      "Bring: operative history if you have it, photos over time, and a clear list of what feels unfinished.",
      "Expect: a slower conversation. Revision is not a second first surgery.",
    ],
    procedureSlug: "revision-rhinoplasty",
    sourceChannel: "revision",
  },
  {
    slug: "why-shanghai",
    title: "Why Consider Shanghai?",
    italic: "in context.",
    eyebrow: "For international patients",
    intro: "Korea has the brand. Thailand has the package. Shanghai is for patients comparing a born-with-it result and a hospital-grade pathway.",
    sourceChannel: "city",
  },
  {
    slug: "surgeon-verification",
    title: "How We Present Surgeon Information",
    italic: "before preference.",
    eyebrow: "Evidence before preference",
    intro: "See how profile claims are labelled, sourced and separated from information that is still awaiting independent verification.",
    sourceChannel: "verification",
  },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
