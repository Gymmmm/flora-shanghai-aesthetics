/**
 * Site identity (locked).
 *
 * Flora is the brand site of a Shanghai medical aesthetics hospital
 * for international patients. The hospital IS the institution — there is
 * no separate "access layer", "coordination platform", "third-party
 * platform", "intermediary", "broker", or "receiving hospital".
 *
 * Doctors, verification status, intake, pathway, and follow-up are
 * presented as the hospital's own information for overseas patients.
 *
 * Anything not independently confirmed is labelled
 * "Pending verification" / "Hospital-provided" / "Public source"
 * — credentials are never invented.
 */

export const navItems = [
  ["Why Flora", "/why-shanghai"],
  ["Doctors", "/surgeons"],
  ["Procedures", "/procedures"],
  ["Verification", "/surgeon-verification"],
  ["Patient Pathway", "/patient-journey"],
  ["International Intake", "/consultation"],
] as const;

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
  /** Hospital of record. Public, traceable identity. */
  hospital: "Flora Shanghai Aesthetics Hospital",
  positioning: "A Shanghai medical aesthetics hospital for international patients",
  tagline: "A Shanghai medical aesthetics hospital for international patients",
  audienceLine:
    "Flora is a Shanghai medical aesthetics hospital. This site is the hospital's brand site for international patients who want to understand our doctors, procedures, and patient pathway before they travel.",
  consultationLine:
    "Begin the international patient intake from home. The hospital team reviews your context, prepares a preliminary remote consultation, and — only if it is appropriate — invites you to the hospital in Shanghai.",
  medicalBoundary:
    "Remote review is preliminary. It does not replace an in-person medical assessment at the hospital. Any diagnosis, treatment plan, or informed consent is confirmed only by the licensed clinical team at Flora in the appropriate clinical setting.",
  photoNotice:
    "Photos are requested by the hospital team only after the appropriate next step is confirmed. They are not a diagnosis and do not guarantee treatment suitability or outcome.",
};

/** Verification items displayed on /surgeon-verification, in product order. */
export const verificationItems = [
  "Doctor identity",
  "Current institution",
  "Procedure / focus",
  "Evidence source",
  "Verification status",
  "Last checked / source context",
];

export const attributionKeys = ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "landing_page", "referrer", "created_at"] as const;

export const analyticsEvents = ["view_doctor", "view_procedure", "view_case", "click_whatsapp", "start_consultation", "submit_consultation", "upload_photo", "view_verification", "view_patient_journey"] as const;

export const crmPipelineStatuses = ["NEW", "QUALIFIED", "PHOTOS_RECEIVED", "DOCTOR_REVIEW", "CONSULTATION", "QUOTED", "FOLLOW_UP", "DEPOSIT", "TRAVEL_CONFIRMED", "ARRIVED_SHANGHAI", "PROCEDURE_COMPLETED", "RECOVERY", "RETURNED_HOME", "LONG_TERM_FOLLOW_UP", "LOST"] as const;

export type LandingPage = { slug: string; title: string; eyebrow: string; intro: string; procedureSlug?: string; sourceChannel: string };
export const landingPages: LandingPage[] = [
  { slug: "rhinoplasty-malaysia", title: "Rhinoplasty in Shanghai", eyebrow: "Malaysia / international patient pathway", intro: "A focused entry point for patients from Malaysia researching rhinoplasty at Flora Shanghai Aesthetics Hospital.", procedureSlug: "rhinoplasty", sourceChannel: "malaysia" },
  { slug: "revision-rhinoplasty", title: "Revision Rhinoplasty", eyebrow: "A context-first pathway", intro: "Begin with previous surgery, current concerns, and the questions the hospital's clinical team needs to review.", procedureSlug: "revision-rhinoplasty", sourceChannel: "revision" },
  { slug: "why-shanghai", title: "Why Flora Shanghai", eyebrow: "A broader point of view", intro: "Understand the hospital, the care pathway, and the information needed before a decision.", sourceChannel: "city" },
  { slug: "surgeon-verification", title: "Doctor Verification", eyebrow: "Evidence before preference", intro: "See how factual profile information is sourced, dated, and contextualised by the hospital.", sourceChannel: "verification" },
];

export const footerLinks = [["Privacy Policy", "/privacy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Terms of Use", "/terms"], ["Patient Media Consent", "/patient-media-consent"], ["Data Processing Notice", "/data-processing-notice"]] as const;
