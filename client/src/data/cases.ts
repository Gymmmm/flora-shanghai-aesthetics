import type { VerificationStatus } from "./doctors";

export type CaseTimeline = { label: "Day 0" | "Day 1" | "Day 2" | "Day 7" | "Day 30" | "Month 3"; detail: string };
export type PatientCase = {
  id: string;
  slug: string;
  title: string;
  patientCountry: string;
  ageRange: string;
  doctorId: string;
  procedureIds: string[];
  mainConcern: string;
  consultation: string;
  treatmentPlan: string;
  beforeImages: string[];
  afterImages: string[];
  recoveryTimeline: CaseTimeline[];
  patientQuote: string;
  consentStatus: "approved" | "pending" | "withdrawn";
  consentDate: string;
  allowedChannels: Array<"website" | "instagram" | "tiktok" | "facebook" | "reddit" | "paid_ads">;
  expiryDate: string;
  mediaUsageScope: string;
  verificationStatus: VerificationStatus;
  seo: { title: string; description: string };
};

export const cases: PatientCase[] = [{
  id: "case-01", slug: "sample-rhinoplasty-journey", title: "Sample case — consent required", patientCountry: "Country to be confirmed", ageRange: "Age range to be confirmed", doctorId: "sample-dr-zhang-yalun", procedureIds: ["rhinoplasty"], mainConcern: "Patient concern to be supplied from approved case notes.", consultation: "Consultation summary to be supplied after clinical and consent review.", treatmentPlan: "Treatment plan to be supplied by the licensed clinician.", beforeImages: [], afterImages: [], recoveryTimeline: [], patientQuote: "", consentStatus: "pending", consentDate: "", allowedChannels: [], expiryDate: "", mediaUsageScope: "No public media usage until written consent is approved.", verificationStatus: "pending_verification", seo: { title: "Case study placeholder | Flora Shanghai Aesthetics", description: "A consent-gated case study placeholder. No patient media or outcome is published." },
}];

export const isCasePublishable = (patientCase: PatientCase) => patientCase.consentStatus === "approved" && patientCase.verificationStatus === "verified" && patientCase.allowedChannels.includes("website");
export const publishableCases = cases.filter(isCasePublishable);
export const caseBySlug = (slug: string) => cases.find((patientCase) => patientCase.slug === slug);
