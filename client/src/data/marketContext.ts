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
  eyebrow: "What the public figures actually say",
  title: "Shanghai is being compared. It is not yet the default.",
  lead: "Flora arranges a Shanghai hospital pathway for patients travelling in. The public figures below describe the city and the country, not a comparison of destinations and not Flora volume.",
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
    id: "travel-for-care",
    label: "Travelled to China for care",
    value: "413,000 of 1.28 million",
    detail: "Leading hospitals reported 1.28 million international-patient visits in 2025, up 73.6% versus three years earlier. About 413,000 were people who travelled for care. The rest include residents.",
    source: "Figure cited by Jiahui Health at the WTO Public Forum 2026; reported by SCMP, 7 Feb 2026",
    year: "2025",
  },
  {
    id: "inbound-aesthetics",
    label: "Inbound aesthetics",
    value: "Early, still small",
    detail: "Shanghai clinics told CNA overseas clients rose about 10–20% over two years, mainly from Japan, Korea and Southeast Asia. Chinese patients remain the large majority. Korea still leads cross-border aesthetics.",
    source: "CNA reporting, Shanghai, 24 Jul 2026",
    year: "2026",
  },
  {
    id: "china-aesthetics-scale",
    label: "Domestic aesthetics market",
    value: "RMB 311.5 billion",
    detail: "China's medical-aesthetics market was RMB 311.5 billion in 2023, with a forecast near RMB 1.3 trillion by 2030. That scale is domestic demand, not inbound tourism.",
    source: "KPMG China industry briefing, Nov 2025, citing market research",
    year: "2023–2030",
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
    fit: "Use when you want a planning-led review, hospital-grade infrastructure, and a natural-refinement brief. Check the current visa rule for your passport before you book flights.",
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
