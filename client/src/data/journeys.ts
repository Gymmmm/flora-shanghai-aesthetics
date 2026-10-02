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
  "inquiry": {
    services: ["24/7 multi-language support via WhatsApp/Email", "Free preliminary assessment", "Treatment plan overview"],
    timing: "24-48 hours response time",
    boundary: "Remote review is not a final diagnosis. Final treatment planning requires appropriate clinical context."
  },
  "surgeon-matching": {
    services: ["Review of patient photos and concerns", "Surgeon credential verification", "Personalized surgeon recommendations"],
    timing: "3-5 business days",
    boundary: "Remote review is not a final diagnosis. Final treatment planning requires appropriate clinical context."
  },
  "virtual-consultation": {
    services: ["Video consultation with selected surgeon", "Detailed treatment plan discussion", "Preliminary quote with transparent pricing"],
    timing: "30-45 minute consultation",
    boundary: "Remote review is not a final diagnosis. Final treatment planning requires appropriate clinical context."
  },
  "travel-planning": {
    services: ["Visa assistance documentation", "Flight and accommodation recommendations", "Airport VIP pickup coordination", "Shanghai orientation guide"],
    timing: "2-4 weeks before travel",
    boundary: "This step does not replace medical advice or informed consent."
  },
  "arrival-assessment": {
    services: ["Airport pickup with 1-on-1 interpreter", "In-person clinical assessment", "Pre-operative medical clearance", "Final treatment plan confirmation"],
    timing: "1-2 days in Shanghai",
    boundary: "This step does not replace medical advice or informed consent."
  },
  "procedure-recovery": {
    services: ["Surgical procedure with board-certified surgeon", "Post-operative care and monitoring", "Hotel recovery support with daily check-ins", "Pain management and wound care"],
    timing: "7-14 days in Shanghai",
    boundary: "This step does not replace medical advice or informed consent."
  },
  "follow-up": {
    services: ["Remote follow-up consultations via video", "Collaboration with local physician if needed", "Photo progress review at 1, 3, 6, 12 months", "Lifetime access to medical records"],
    timing: "12+ months post-procedure",
    boundary: "This step does not replace medical advice or informed consent."
  }
};

export const journey: JourneyStep[] = [
  ["inquiry", "Initial Inquiry"], ["surgeon-matching", "Surgeon Matching"], ["virtual-consultation", "Virtual Consultation"], ["travel-planning", "Travel Planning"], ["arrival-assessment", "Arrival & Assessment"], ["procedure-recovery", "Procedure & Recovery"], ["follow-up", "Long-term Follow-up"],
].map(([id, title], index) => ({
  id, step: index + 1, title,
  description: `A documented step in the international patient pathway, with comprehensive support services and time to ask questions before moving forward.`,
  services: journeyDetails[id].services,
  responsibleParty: index < 3 ? "Patient and care coordination team" : "Licensed clinician and care coordination team",
  patientProvides: ["Questions, relevant history, expectations, and travel constraints"],
  clinicProvides: ["Clear next steps, boundaries, and the information needed for review"],
  medicalBoundary: journeyDetails[id].boundary,
  estimatedTiming: journeyDetails[id].timing,
}));
