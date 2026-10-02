import { landingPages, type LandingPage } from "./site";

export type LandingDetail = LandingPage & {
  promise: string;
  comparedWith: string;
  steps: string[];
  bring: string[];
  notThis: string[];
  whatsappPrompt: string;
};

/**
 * Channel landing-page content.
 * All copy positions Flora as the hospital of record — not a platform,
 * intermediary, or "access layer".
 */
const details: Record<string, Omit<LandingDetail, keyof LandingPage>> = {
  "rhinoplasty-malaysia": {
    promise: "A remote, English-language review of nasal proportion at Flora Shanghai Aesthetics Hospital — before any flight from KL or Singapore.",
    comparedWith: "Korea is often the first search. Shanghai is the second look: refine the bridge and tip without asking the face to become someone else.",
    steps: [
      "Send your questions and travel window on WhatsApp or the form",
      "The hospital's coordinator organises photos, history and surgeon review",
      "You receive a preliminary discussion — not a diagnosis — then decide whether a hospital visit is worth the trip",
    ],
    bring: ["Front and profile photos in even light", "Any previous nasal surgery or filler history", "Breathing concerns, if any", "A realistic date range, not a fixed surgery day"],
    notThis: ["No published price that pretends every nose costs the same", "No promise that a Korean template will be copied", "No booking until an in-person assessment at the hospital can confirm the plan"],
    whatsappPrompt: "Hello Flora, I am writing from Malaysia/Singapore about rhinoplasty at Flora Shanghai Aesthetics Hospital. I would like a remote review before travelling.",
  },
  "rhinoplasty-indonesia": {
    promise: "An English-language remote review from Indonesia — before any ticket to Shanghai is bought.",
    comparedWith: "Korea and Thailand are familiar names. Shanghai is useful when the brief is proportion and a result that still reads as you, not a package face.",
    steps: [
      "Write from Jakarta, Surabaya, Bali or elsewhere in English",
      "Share photos and any previous nasal work",
      "Decide later whether an in-person assessment at Flora Shanghai is appropriate",
    ],
    bring: ["Front and profile photos", "Filler or implant history if any", "Breathing notes", "A flexible two-week window, not a surgery date"],
    notThis: ["No guaranteed visa outcome", "No same-week surgery sold from this page", "No copied Korean template"],
    whatsappPrompt: "Hello Flora, I am writing from Indonesia about rhinoplasty at Flora Shanghai Aesthetics Hospital. I would like a remote review before travelling.",
  },
  "eyelid-sea": {
    promise: "Eyelid planning that starts with expression and crease anatomy — not one standard double eyelid.",
    comparedWith: "Patients across ASEAN often compare Korea first. Shanghai is useful when you want the crease to still look like your face in daylight, not only in clinic lighting.",
    steps: [
      "Describe what bothers you: fold, asymmetry, heaviness, or a previous result",
      "Share photos for a preliminary hospital review",
      "A surgeon discussion can follow if the case is appropriate for travel",
    ],
    bring: ["Open-eye and closed-eye photos", "Notes on previous eyelid surgery or thread/filler work", "Whether the goal is crease, puffiness, or revision", "How many days you can stay in Shanghai"],
    notThis: ["No single standard Asian crease sold as universal", "No before/after borrowed from another patient", "No same-week surgery promise from a webpage"],
    whatsappPrompt: "Hello Flora, I am enquiring from Southeast Asia about eyelid surgery at Flora Shanghai Aesthetics Hospital. I want a natural crease discussion before I travel.",
  },
  "revision-rhinoplasty": {
    promise: "A records-first conversation about what can and cannot be changed after previous nasal surgery.",
    comparedWith: "Revision is not a second holiday package. It is slower than a primary case and depends on scar tissue, structure and honest limits.",
    steps: [
      "Collect operative notes, implant details and current photos if you have them",
      "Write the two or three things that still bother you",
      "A preliminary review decides whether an in-person hospital assessment is even appropriate",
    ],
    bring: ["Date and place of the previous operation", "What was done, if known", "Current breathing or appearance concerns", "Previous photos if they exist"],
    notThis: ["No guarantee that a previous result can be fully reversed", "No quote before the anatomy is examined", "No pressure to fly this month"],
    whatsappPrompt: "Hello Flora, I am considering revision rhinoplasty at Flora Shanghai Aesthetics Hospital. I can share previous surgery details for a preliminary review.",
  },
  "why-shanghai": {
    promise: "Enough public context to decide whether Flora Shanghai Aesthetics Hospital belongs on the same shortlist as Korea or Thailand.",
    comparedWith: "Korea leads elective-aesthetics branding. Thailand leads packaged medical tourism. Flora is a Shanghai hospital with a natural-refinement brief.",
    steps: [
      "Read the sourced industry snapshot on this site",
      "Open the corridor that matches your country or procedure",
      "Start remotely. Travel is a later decision.",
    ],
    bring: ["The city you are flying from", "The procedure you are actually considering", "Whether this is primary or revision"],
    notThis: ["This page is not a government ranking", "Flora numbers are not mixed into national statistics", "No outcome is implied by market size"],
    whatsappPrompt: "Hello Flora, I am comparing Shanghai hospitals for medical aesthetics. I would like to start with a remote inquiry.",
  },
  "surgeon-verification": {
    promise: "See how a profile claim is labelled at Flora before you treat it as a fact.",
    comparedWith: "Many destination sites publish titles and case counts with no source. Flora separates hospital-provided, pending, and verified.",
    steps: [
      "Open a doctor profile",
      "Read the verification seal",
      "Ask the hospital for the source if a claim matters to your decision",
    ],
    bring: ["The doctor you are researching", "The specific claim you want checked"],
    notThis: ["Pending is not verified", "Hospital-provided is not independently audited", "A handsome photograph is not a credential"],
    whatsappPrompt: "Hello Flora, I would like to understand how a doctor profile on your site is verified.",
  },
};

export const landingDetails: LandingDetail[] = landingPages.map((page) => ({
  ...page,
  ...(details[page.slug] ?? {
    promise: page.intro,
    comparedWith: "Start with context, then decide whether a conversation is useful.",
    steps: ["Read the page", "Send an inquiry", "Decide later about travel"],
    bring: ["Your questions"],
    notThis: ["This is not medical advice"],
    whatsappPrompt: "Hello Flora, I would like a remote international-patient inquiry.",
  }),
}));

export const landingBySlug = (slug: string) => landingDetails.find((page) => page.slug === slug);
