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

/**
 * Flora's international patient pathway. Every step is delivered by the
 * hospital itself — there is no third-party platform, intermediary,
 * "coordination layer", or "receiving hospital" involved.
 *
 * Final clinical decisions are made by the licensed clinical team of
 * Flora Shanghai Aesthetics Hospital in the appropriate clinical setting.
 */
const journeyDetails: Record<string, { services: string[]; timing: string; boundary: string }> = {
  "intake": {
    services: [
      "Structured international patient intake form",
      "Country, language, and procedure context",
      "Preliminary summary prepared for the hospital's clinical team",
    ],
    timing: "24–48 hours to receive a preliminary hospital response",
    boundary: "The intake is not a diagnosis, recommendation, or promise of acceptance.",
  },
  "remote-review": {
    services: [
      "Preliminary review of stated context by the hospital's clinical team (no photos at this stage)",
      "Questions organised for the appropriate in-hospital pathway",
      "Outline of next steps and what is still needed",
    ],
    timing: "3–5 business days after intake",
    boundary: "Remote review is preliminary and cannot confirm clinical suitability online.",
  },
  "verification": {
    services: [
      "Doctor identity and institution check using publicly available sources",
      "Procedure and focus area confirmation on the hospital's profile",
      "Verification status recorded against each factual claim",
    ],
    timing: "Working alongside the remote review",
    boundary: "Verification is bounded to what can be confirmed by a public, dated source.",
  },
  "hospital-visit": {
    services: [
      "In-hospital consultation with the responsible clinician",
      "Examination, imaging and pre-operative assessment as required",
      "Written treatment plan and informed consent signed in the hospital",
    ],
    timing: "Scheduled once the remote review confirms that travel is appropriate",
    boundary: "Diagnosis and treatment plan are finalised only in person at the hospital.",
  },
  "travel-readiness": {
    services: [
      "Visa invitation letter coordination through the hospital (where applicable)",
      "General Shanghai travel orientation for international patients",
      "Time-zone and language handoff support arranged by the hospital",
    ],
    timing: "2–4 weeks before any planned visit",
    boundary: "Travel readiness support is logistical. Final travel decisions rest with patients.",
  },
  "follow-up": {
    services: [
      "Remote follow-up check-ins organised by the hospital",
      "Recovery questions routed to the treating clinician at Flora",
      "Continuity context for any later care decisions at the hospital",
    ],
    timing: "According to the agreed follow-up schedule",
    boundary: "Remote follow-up is not a substitute for in-person care where it is required.",
  },
};

export const journey: JourneyStep[] = [
  ["intake", "International Patient Intake"],
  ["remote-review", "Remote / Preliminary Review"],
  ["verification", "Doctor & Hospital Verification"],
  ["hospital-visit", "In-Hospital Consultation"],
  ["travel-readiness", "Shanghai Travel Readiness"],
  ["follow-up", "Recovery / Follow-up"],
].map(([id, title], index) => ({
  id, step: index + 1, title,
  description: `Step ${index + 1} of Flora's international patient pathway. Each step can pause for questions, review, and informed consent before the next.`,
  services: journeyDetails[id].services,
  responsibleParty: index < 3 ? "Patient + Flora hospital team" : "Licensed clinician at Flora Shanghai Aesthetics Hospital",
  patientProvides: ["Questions, relevant history, expectations, and travel constraints"],
  clinicProvides: ["Clear next steps, medical boundaries, and the information needed for review"],
  medicalBoundary: journeyDetails[id].boundary,
  estimatedTiming: journeyDetails[id].timing,
}));
