/**
 * Public market context for the Why Flora page.
 * All figures are third-party public sources, not Flora patient numbers.
 * They describe the Shanghai medical landscape, not a comparison of
 * destinations, and not Flora's volume.
 */
export type MarketFact = {
  id: string;
  label: string;
  value: string;
  detail: string;
  source: string;
  year: string;
};

export const marketPositioning = {
  eyebrow: "What the public figures actually say",
  title: "Shanghai is a hospital city. It is not yet the default for medical aesthetics.",
  lead: "Flora is a Shanghai medical aesthetics hospital. The public figures below describe the city and the country where we operate — not a comparison of destinations and not Flora volume.",
  note: "None of these figures are Flora patient counts, surgery volumes, or a promise of savings. Aesthetic travel into China is still early.",
};

export const marketFacts: MarketFact[] = [
  {
    id: "shanghai-foreign",
    label: "Shanghai public hospitals",
    value: "73,200 foreign-passport visits",
    detail: "2025 city public hospitals served 73,200 visits by foreign-passport holders, up from 67,600 in 2024. This is every specialty, not aesthetics, and not a Flora number.",
    source: "Shanghai Health Commission, reported by Jiefang Daily / shanghai.gov.cn, 27 Feb 2026",
    year: "2025",
  },
  {
    id: "international-pilots",
    label: "International medical tourism",
    value: "22 public pilot institutions",
    detail: "By March 2026, 22 Shanghai public medical institutions had been approved as international medical-tourism pilot units.",
    source: "Shanghai Municipal Health Commission / Shanghai International Services, 5 Mar 2026",
    year: "2026",
  },
  {
    id: "visa-transit",
    label: "Travel planning",
    value: "Up to 240 hours",
    detail: "Eligible nationals of 57 countries may use China's 240-hour visa-free transit policy when travelling onward to a third country or region. Eligibility depends on passport, itinerary and current immigration rules.",
    source: "National Immigration Administration / Shanghai International Services, updated 20 Aug 2026",
    year: "2026",
  },
  {
    id: "international-standard",
    label: "International patient services",
    value: "City-level service standard",
    detail: "Shanghai policy calls for multilingual services, foreign-language medical documents, international-patient clinical coordination and multiple payment channels, including bank cards and insurance direct settlement where available.",
    source: "Shanghai Municipal Government, International Medical Innovation Implementation Opinions, 8 Jan 2025",
    year: "2025",
  },
];

export const comparisonNotes = [
  {
    place: "South Korea",
    role: "Strongest cross-border brand",
    fit: "Use as the benchmark when volume, aftercare tourism and name recognition matter most.",
  },
  {
    place: "Thailand",
    role: "Most packaged medical-travel hub",
    fit: "Use as the benchmark when English private hospitals and a fixed travel package are the priority.",
  },
  {
    place: "Shanghai",
    role: "Hospital city, early inbound aesthetics",
    fit: "Flora is a Shanghai hospital. Choose us when you want a planning-led review, hospital-grade infrastructure, and a natural-refinement brief. Check the current visa rule for your passport before you book flights.",
  },
];

export const priorityCorridors = [
  {
    region: "Malaysia & Singapore",
    why: "Short flight. Start with an English review of nasal shape before any date in Shanghai.",
    href: "/lp/rhinoplasty-malaysia",
  },
  {
    region: "Indonesia",
    why: "Remote review first. A flight is a later decision, not the first step.",
    href: "/lp/rhinoplasty-indonesia",
  },
  {
    region: "Revision cases",
    why: "Previous records come before any promise. A past result may not be reversible.",
    href: "/lp/revision-rhinoplasty",
  },
];
