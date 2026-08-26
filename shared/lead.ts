export const leadStatuses = ["NEW", "QUALIFIED", "PHOTOS_RECEIVED", "DOCTOR_REVIEW", "CONSULTATION", "QUOTED", "FOLLOW_UP", "DEPOSIT", "TRAVEL_CONFIRMED", "ARRIVED_SHANGHAI", "PROCEDURE_COMPLETED", "RECOVERY", "RETURNED_HOME", "LONG_TERM_FOLLOW_UP", "LOST"] as const;
export type LeadStatus = (typeof leadStatuses)[number];

export type LeadAttribution = {
  source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  landing_page: string;
  referrer: string;
  created_at: string;
};

export type ConsultationPayload = {
  fullName: string;
  country: string;
  age: number | null;
  email: string;
  whatsapp: string;
  preferredLanguage: string;
  procedureSlug: string;
  mainConcern: string;
  previousProcedures: string;
  preferredAesthetic: string;
  estimatedBudget: string;
  expectedTravelDate: string;
  canTravelToShanghai: boolean;
  consent: true;
  attribution: LeadAttribution;
  honeypot?: string;
  photoNames: string[];
};

export type ConsultationResult = { accepted: boolean; leadId: string; mode: "local" | "database" | "adapter"; message: string };
