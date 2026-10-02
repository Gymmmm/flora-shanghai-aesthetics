export type JourneyStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  services: string[];
  responsibleParty: string;
  patientProvides: string[];
  clinicProvides: string[];
  medicalBoundary: string;
  estimatedTiming: string;
};

const journeyDetails: Record<string, { services: string[]; timing: string; boundary: string }> = {
  inquiry: {
    services: ["Structured international patient intake", "Country, language, treatment interest and timing capture", "Preliminary coordination review"],
    timing: "Initial response target: 24–48 hours",
    boundary: "This intake is not medical advice, diagnosis, treatment recommendation or confirmation of hospital acceptance.",
  },
  "remote-review": {
    services: ["Review of submitted concerns and relevant history", "Identification of missing information", "Preparation of questions for an appropriate medical team"],
    timing: "Timing depends on information completeness and clinician availability",
    boundary: "Remote review is preliminary. Suitability and final planning may require in-person assessment, examination or testing.",
  },
  verification: {
    services: ["Doctor identity and profile status", "Institution context", "Procedure information source and verification status"],
    timing: "Before a patient is asked to rely on the information",
    boundary: "Pending or hospital-reported information is labelled and must not be presented as independently verified.",
  },
  routing: {
    services: ["Hospital or clinician handoff when the route is sufficiently clear", "Patient context packaged for review", "Next-step questions documented"],
    timing: "After preliminary review and verification checks",
    boundary: "Routing does not guarantee acceptance, availability, treatment suitability or outcome.",
  },
  readiness: {
    services: ["Cost variables and quote questions", "Travel timing and stay requirements", "Payment, insurance and language-support questions to clarify with the receiving provider"],
    timing: "Before travel is committed",
    boundary: "Flora does not present unconfirmed travel, insurance, payment or hospital services as guaranteed benefits.",
  },
  "in-person": {
    services: ["In-person clinical assessment by the receiving licensed medical team", "Medical tests or clearance when clinically required", "Final informed-consent and treatment-plan discussion"],
    timing: "According to the receiving hospital or clinician",
    boundary: "Final diagnosis, treatment recommendation and informed consent belong to the licensed medical team responsible for care.",
  },
  followup: {
    services: ["Recovery question tracking", "Follow-up requirements documented by the treating team", "Remote coordination where the receiving provider supports it"],
    timing: "Based on the treating team's clinical plan",
    boundary: "Follow-up timing, emergency care and medical-record access depend on the treating provider and cannot be promised universally by Flora.",
  },
};

export const journey: JourneyStep[] = [
  ["inquiry", "International Intake"],
  ["remote-review", "Remote Review"],
  ["verification", "Verification"],
  ["routing", "Hospital Routing"],
  ["readiness", "Cost & Travel Readiness"],
  ["in-person", "In-person Assessment"],
  ["followup", "Recovery & Follow-up"],
].map(([id, title], index) => ({
  id,
  step: index + 1,
  title,
  description: "A documented step in the international patient pathway, with a clear owner, evidence boundary and next action.",
  services: journeyDetails[id].services,
  responsibleParty: index < 4 ? "Patient and international care coordination" : "Patient, coordination team and receiving licensed medical team",
  patientProvides: ["Relevant history, goals, questions, timing and travel constraints"],
  clinicProvides: ["The information and clinical decisions that only the responsible licensed provider can confirm"],
  medicalBoundary: journeyDetails[id].boundary,
  estimatedTiming: journeyDetails[id].timing,
}));