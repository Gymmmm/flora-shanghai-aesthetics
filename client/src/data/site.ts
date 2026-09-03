export const navItems = [["Why Shanghai", "/why-shanghai"], ["Surgeons", "/surgeons"], ["Procedures", "/procedures"], ["Patient Stories", "/cases"], ["Your Journey", "/patient-journey"], ["Verification", "/surgeon-verification"]] as const;

/** Digits for wa.me builders: strip non-digits (App.tsx already does .replace(/\\D/g, "")). */
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
  eyebrow: string;
  italic: string;
  intro: string;
  points: string[];
  procedureSlug?: string;
  marketId?: string;
  sourceChannel: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "from-malaysia",
    title: "Shanghai from Malaysia",
    eyebrow: "KUL · ~5 hours",
    italic: "Still you.",
    intro: "Malaysia already understands cross-border care. The open question is not ‘can I fly’ — it is whether Shanghai’s quieter facial language is a better fit than Seoul’s brand.",
    points: [
      "About 12,000 Malaysians were treated in Korea in 2025 — more than double the year before.",
      "English WhatsApp inquiry first. No flight required to start.",
      "Rhinoplasty, eyelids and revision are planned as refinement, not a new face.",
      "A coordinator helps with questions, surgeon review and — only if appropriate — travel timing.",
    ],
    marketId: "malaysia",
    sourceChannel: "malaysia",
  },
  {
    slug: "rhinoplasty-malaysia",
    title: "Rhinoplasty from Malaysia",
    eyebrow: "For patients travelling from Malaysia",
    italic: "Refine, not redefine.",
    intro: "A planning-led conversation about nasal shape, structure and proportion — before anyone books a ticket to Shanghai.",
    points: [
      "Share previous surgery, breathing questions and the change you actually want.",
      "Remote review organises the file. It is not a diagnosis.",
      "Pricing stays consultation-only until a clinician sees your context.",
      "KUL–PVG is a short-haul flight if an in-person assessment is later recommended.",
    ],
    procedureSlug: "rhinoplasty",
    marketId: "malaysia",
    sourceChannel: "malaysia",
  },
  {
    slug: "from-singapore",
    title: "Shanghai from Singapore",
    eyebrow: "SIN · ~5 hours",
    italic: "Another city, not a lesser one.",
    intro: "Singaporeans do not travel because care is missing at home. They travel for a specific aesthetic judgement. In 2025, 43,222 Singapore patients were treated in Korea — and plastic-surgery visits rose sharply.",
    points: [
      "Shanghai is the alternative when the Seoul look is too visible.",
      "Start with a private consult. Compare surgeons on verification, not slogans.",
      "Revision and proportion work are first-class conversations here.",
      "Five hours is enough to visit — and enough to decide not to.",
    ],
    marketId: "singapore",
    sourceChannel: "singapore",
  },
  {
    slug: "rhinoplasty-singapore",
    title: "Rhinoplasty from Singapore",
    eyebrow: "For patients travelling from Singapore",
    italic: "Proportion first.",
    intro: "A considered nasal plan for patients who already have access to excellent local care and want a different East-Asian aesthetic conversation.",
    points: [
      "Bring prior consult notes if you have them. We work from context.",
      "The first meeting can be remote. Travel is a later decision.",
      "Ask about structure, breathing and long-term balance — not a trend line.",
    ],
    procedureSlug: "rhinoplasty",
    marketId: "singapore",
    sourceChannel: "singapore",
  },
  {
    slug: "from-indonesia",
    title: "Shanghai from Indonesia",
    eyebrow: "CGK · ~6 hours",
    italic: "A pathway, not a package.",
    intro: "Indonesian families already leave home for care — more than 970,000 went to Malaysia for healthcare in 2025. Korea inbound from Indonesia more than doubled. Shanghai needs a calmer, step-by-step door.",
    points: [
      "WhatsApp coordination in English or Bahasa, with family on the thread if you want.",
      "Seven documented steps from inquiry to follow-up.",
      "No invented before-and-after. Consent first.",
      "In-person confirmation in Shanghai happens only after remote review.",
    ],
    marketId: "indonesia",
    sourceChannel: "indonesia",
  },
  {
    slug: "rhinoplasty-indonesia",
    title: "Rhinoplasty from Indonesia",
    eyebrow: "For patients travelling from Indonesia",
    italic: "Questions before tickets.",
    intro: "Nose surgery is a planning problem first. Use a remote consult to organise history, photos and expectations before any CGK–PVG booking.",
    points: [
      "Tell us what you want to keep, not only what you want to change.",
      "Revision after overseas surgery is a different conversation — start there if that is your case.",
      "A coordinator maps visa, stay length and recovery before you fly.",
    ],
    procedureSlug: "rhinoplasty",
    marketId: "indonesia",
    sourceChannel: "indonesia",
  },
  {
    slug: "from-vietnam",
    title: "Shanghai from Vietnam",
    eyebrow: "SGN / HAN · ~4 hours",
    italic: "A quieter next city.",
    intro: "Vietnam already sends tens of thousands of patients to Korea each year. Shanghai is closer than most people think — and less explained.",
    points: [
      "Educational pages first. Consultation second.",
      "Natural refinement rather than a copied Seoul template.",
      "Short-haul flight if an in-person review is later appropriate.",
    ],
    marketId: "vietnam",
    sourceChannel: "vietnam",
  },
  {
    slug: "revision-rhinoplasty",
    title: "Revision Rhinoplasty in Shanghai",
    eyebrow: "For patients considering revision surgery",
    italic: "Context before courage.",
    intro: "Begin with your previous procedure, current concerns and the information a surgeon would need before discussing revision options.",
    points: [
      "Bring operative notes and a timeline if you have them.",
      "Healing, scar tissue and structure change what is possible.",
      "Remote review cannot promise a revision is appropriate.",
    ],
    procedureSlug: "revision-rhinoplasty",
    sourceChannel: "revision",
  },
  {
    slug: "why-shanghai",
    title: "Why Consider Shanghai?",
    eyebrow: "For international patients",
    italic: "with context.",
    intro: "Understand the city, the clinical pathway and the practical support available before you decide whether Shanghai belongs on your shortlist.",
    points: [
      "Compare Shanghai with Seoul and Bangkok using 2025 destination data.",
      "Inbound China aesthetics is early. That is a reason to be careful, not loud.",
      "The first step is a conversation from home.",
    ],
    sourceChannel: "city",
  },
  {
    slug: "surgeon-verification",
    title: "How We Present Surgeon Information",
    eyebrow: "Evidence before preference",
    italic: "labelled, not implied.",
    intro: "See how profile claims are labelled, sourced and separated from information that is still awaiting independent verification.",
    points: [
      "Pending credentials stay pending.",
      "No invented volume, titles or before-and-after.",
      "Ask for sources during consultation.",
    ],
    sourceChannel: "verification",
  },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
