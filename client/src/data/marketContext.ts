/** Industry context for international patients. Figures are third-party, not Flora volume claims. */
export type MarketFact = {
  id: string;
  label: string;
  value: string;
  detail: string;
  source: string;
  year: string;
};

export const marketPositioning = {
  eyebrow: "Inbound aesthetics / industry context",
  title: "Why patients compare Shanghai now",
  lead: "Korea remains the strongest elective-aesthetics brand. Thailand remains the most mature full-service hub. Shanghai is being researched as a third option: hospital-grade infrastructure plus a \u201cborn-with-it\u201d refinement philosophy — not a template face.",
  note: "The figures below describe the wider market. They are not Flora patient counts, guaranteed savings, or a clinical recommendation.",
};

export const marketFacts: MarketFact[] = [
  {
    id: "china-aesthetics-scale",
    label: "China aesthetics market",
    value: "RMB 311.5B (2023)",
    detail: "Projected to reach about RMB 1.3 trillion by 2030. Scale is domestic first; inbound care is still early.",
    source: "Market research cited by CNA / KPMG industry briefing",
    year: "2023–2030",
  },
  {
    id: "inbound-china",
    label: "International patients in China",
    value: "1.28 million visits (2025)",
    detail: "Major hospitals reported about 1.28 million international-patient visits in 2025, up 73.6% versus three years earlier. The figure includes residents as well as travellers.",
    source: "Chinese official reporting, summarised by The Straits Times",
    year: "2025",
  },
  {
    id: "shanghai-foreign",
    label: "Shanghai public hospitals",
    value: "73,200 foreign patients (2025)",
    detail: "Shanghai public hospitals reported 73,200 foreign patients in 2025, up 8% year on year — the most mature international-care infrastructure in mainland China.",
    source: "City hospital reporting summarised by ChinaMed Select",
    year: "2025",
  },
  {
    id: "clinic-mix",
    label: "Who is arriving for aesthetics",
    value: "Japan, Korea, Southeast Asia",
    detail: "Shanghai clinics interviewed in 2026 described a 10–20% rise in overseas clients over two years. Mix is still mostly Chinese; new inquiries often come from Singapore, Malaysia and nearby ASEAN markets.",
    source: "CNA field reporting, Shanghai clinics, July 2026",
    year: "2024–2026",
  },
];

export const comparisonNotes = [
  {
    place: "South Korea",
    role: "Strongest cross-border brand for elective aesthetics",
    fit: "Compare when brand recognition and high-volume cosmetic tourism matter most.",
  },
  {
    place: "Thailand",
    role: "Broadest mature medical-tourism hub",
    fit: "Compare when packaged travel, English-speaking private hospitals and price transparency are the priority.",
  },
  {
    place: "Shanghai",
    role: "Hospital-grade city + natural-refinement aesthetic",
    fit: "Compare when you want another Asian perspective, a planning-led pathway, and a city built for international travel — including 144-hour visa-free transit for many passports.",
  },
];

export const priorityCorridors = [
  {
    region: "Malaysia & Singapore",
    why: "Short flight, English-language inquiry, and a preference for natural eyelid and nasal refinement over a \u201cK-pop template\u201d.",
    href: "/lp/rhinoplasty-malaysia",
  },
  {
    region: "Indonesia",
    why: "Growing ASEAN aesthetics demand. Start with a remote review before any travel decision.",
    href: "/consultation",
  },
  {
    region: "Revision cases",
    why: "Patients who already had surgery elsewhere often need context first: previous records, scar tissue, and realistic boundaries.",
    href: "/lp/revision-rhinoplasty",
  },
];
