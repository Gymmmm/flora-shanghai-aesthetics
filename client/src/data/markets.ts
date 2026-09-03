/**
 * Industry context for international patient pages.
 * These figures describe destination markets — not Flora patient volume.
 * Flora does not publish unverified clinic inbound counts.
 */

export type MarketSource = { label: string; note: string };

export const marketSources: MarketSource[] = [
  {
    label: "Korea MOHW / KHIDI, Apr 2026",
    note: "2025 foreign-patient census: 2,011,822 patients; dermatology 62.9%; plastic surgery 11.2%.",
  },
  {
    label: "CNA, Jul 2026",
    note: "Shanghai clinics reported ~10–20% growth in overseas aesthetics clients over two years; Korea still leads the cross-border brand; China inbound aesthetics remains early and small.",
  },
  {
    label: "Phillip Capital / Malaysia healthcare notes, 2026",
    note: "Malaysia medical-tourism revenue ~RM3.4bn in 2025; Indonesian patients ~70% of arrivals; >970k Indonesians travelled to Malaysia for care in 2025.",
  },
];

export const koreaInbound2025 = {
  year: 2025,
  totalPatients: 2_011_822,
  yoy: "+71.9%",
  dermatologyShare: "62.9%",
  plasticSurgeryShare: "11.2%",
  beautyCombinedShare: "~74%",
  seoulShare: "87.2%",
  sourceCountries: [
    { name: "China", patients: 618_973, share: "30.8%", yoy: "+137.5%" },
    { name: "Japan", patients: 600_009, share: "29.8%", yoy: "+38.1%" },
    { name: "Taiwan", patients: 185_715, share: "9.2%", yoy: "+122.5%" },
    { name: "United States", patients: 173_363, share: "8.6%", yoy: "+69.9%" },
    { name: "Thailand", patients: 58_124, share: "2.9%", yoy: "+52.3%" },
    { name: "Singapore", patients: 43_222, share: "2.1%", yoy: "+62.1%" },
    { name: "Vietnam", patients: 23_133, share: "1.1%", yoy: null },
    { name: "Indonesia", patients: 21_257, share: "1.1%", yoy: "+104.6%" },
    { name: "Malaysia", patients: 12_000, share: "0.6%", yoy: "+106.8%" },
  ],
};

export const shanghaiPosition = {
  headline: "Shanghai is early in inbound aesthetics — not late in clinical skill.",
  body: "Korea owns the cross-border beauty brand. Thailand owns packaged volume. Shanghai’s opening is different: a dense clinical city, an East-Asian ‘born-with-it’ aesthetic language, and a short-haul flight from Southeast Asia. The honest reading of 2025–26 data is that inbound China aesthetics is still niche — which is why the first conversation must be careful, not loud.",
  clinicSignal: "Shanghai clinics interviewed in 2026 described overseas aesthetics clients — mainly Korea, Japan and Southeast Asia — rising about 10–20% over two years. Chinese patients still form the large majority.",
  industryScale: "China’s medical-aesthetics industry was valued at RMB 311.5 billion in 2023 and is widely projected toward RMB 1.3 trillion by 2030. That scale is domestic first. Inbound remains a pilot, not a finished category.",
};

export type DestinationRow = {
  destination: string;
  role: string;
  strength: string;
  friction: string;
  floraAngle: string;
};

export const destinationCompare: DestinationRow[] = [
  {
    destination: "Seoul",
    role: "Global aesthetics brand",
    strength: "2.01 million foreign patients in 2025; dermatology and K-beauty demand dominate.",
    friction: "A visible look, crowded Gangnam pathway, and a market already priced as a destination brand.",
    floraAngle: "Shanghai is not trying to be Seoul. Patients who want a quieter, less templated change often need another city.",
  },
  {
    destination: "Bangkok",
    role: "Volume + package hub",
    strength: "Mature medical-tourism infrastructure, English-facing hospitals, cost competition.",
    friction: "Package tourism can flatten aesthetic judgement. Some patients later seek revision or a more natural line.",
    floraAngle: "Use Bangkok as a cost benchmark, not as the only definition of Asian beauty.",
  },
  {
    destination: "Kuala Lumpur / Penang",
    role: "Regional care corridor",
    strength: "Indonesia already sends the majority of Malaysia’s medical tourists; short flights, familiar hospitals.",
    friction: "Strong for complex care and check-ups; less of a refined facial-aesthetics identity than Seoul or Shanghai.",
    floraAngle: "Malaysia is often the first foreign hospital a family trusts. Shanghai is the second question — for face work.",
  },
  {
    destination: "Shanghai",
    role: "Early inbound city",
    strength: "Clinical density, East-Asian proportion language, international-city logistics, short-haul from SEA.",
    friction: "Weaker global beauty brand than Korea; inbound aesthetics still early; language and visa planning required.",
    floraAngle: "Start remote. Decide later. Flora’s job is a verification-honest surgeon conversation, not a tour package.",
  },
];

export type PriorityMarket = {
  id: string;
  name: string;
  priority: 1 | 2 | 3;
  flight: string;
  languages: string[];
  outboundSignal: string;
  patientMindset: string;
  floraOffer: string;
  landingSlug: string;
  procedureSlugs: string[];
};

export const priorityMarkets: PriorityMarket[] = [
  {
    id: "malaysia",
    name: "Malaysia",
    priority: 1,
    flight: "~5 hours KUL–PVG",
    languages: ["English", "Bahasa Malaysia", "Mandarin"],
    outboundSignal: "Malaysians going to Korea for aesthetics more than doubled in 2025 (about 12,000). The country already understands cross-border care.",
    patientMindset: "English-first inquiry, family second opinion, preference for natural results over a visible ‘done’ look.",
    floraOffer: "WhatsApp in English, virtual consult before any flight, rhinoplasty and eyelid planning without a Gangnam template.",
    landingSlug: "from-malaysia",
    procedureSlugs: ["rhinoplasty", "eyelid-surgery", "revision-rhinoplasty"],
  },
  {
    id: "singapore",
    name: "Singapore",
    priority: 1,
    flight: "~5 hours SIN–PVG",
    languages: ["English", "Mandarin"],
    outboundSignal: "43,222 Singaporeans treated in Korea in 2025 (+62%). Plastic-surgery visits from Singapore rose about 280% year on year.",
    patientMindset: "High clinical standard at home. They travel for a specific aesthetic language or a named surgeon — not because care is missing.",
    floraOffer: "A considered alternative to Seoul: proportion-led facial work, revision conversations, and a city they can read.",
    landingSlug: "from-singapore",
    procedureSlugs: ["rhinoplasty", "eyelid-surgery", "revision-rhinoplasty", "facelift"],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    priority: 1,
    flight: "~6 hours CGK–PVG",
    languages: ["English", "Bahasa Indonesia", "Mandarin"],
    outboundSignal: ">970k Indonesians travelled to Malaysia for healthcare in 2025. Korea inbound from Indonesia more than doubled to 21,257.",
    patientMindset: "Used to leaving home for care. Trust is built through a coordinator, clear steps, and family involvement — not a slogan.",
    floraOffer: "A documented pathway: inquiry, surgeon match, virtual consult, travel plan, in-person confirmation.",
    landingSlug: "from-indonesia",
    procedureSlugs: ["rhinoplasty", "eyelid-surgery", "breast-surgery", "body-contouring"],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    priority: 2,
    flight: "~3.5–4.5 hours SGN/HAN–PVG",
    languages: ["English", "Vietnamese"],
    outboundSignal: "23,133 Vietnamese patients treated in Korea in 2025. K-beauty influence is strong; Shanghai is still under-explained.",
    patientMindset: "Trend-aware younger patients plus family-funded face work. Need a calmer story than Seoul advertising.",
    floraOffer: "Educational pages first. Consultation second. No invented before/after.",
    landingSlug: "from-vietnam",
    procedureSlugs: ["rhinoplasty", "eyelid-surgery", "facial-rejuvenation"],
  },
];

export const marketById = (id: string) => priorityMarkets.find((market) => market.id === id);
