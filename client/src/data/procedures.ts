export type PricingMode = "hidden" | "starting_from" | "range" | "consultation_only";

export type Procedure = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  whoMayConsider: string[];
  consultationEvaluates: string[];
  planning: string[];
  recovery: string[];
  risks: string[];
  relatedDoctorIds: string[];
  relatedCaseIds: string[];
  pricing: { mode: PricingMode; currency: "USD"; amount: number | null; range: [number, number] | null; includes: string[]; excludes: string[]; variables: string[]; disclaimer: string };
  seo: { title: string; description: string };
  image: string;
};

const basePricing = { mode: "consultation_only" as const, currency: "USD" as const, amount: null, range: null, includes: [], excludes: [], variables: ["Clinical assessment", "Anaesthesia", "Hospital and tests", "Medication", "Translation and travel support"], disclaimer: "Pricing is not published until a clinician reviews the individual context and the operating plan." };

const makeProcedure = (slug: string, name: string, category: string, shortDescription: string, image: string, focus: string): Procedure => ({
  slug, name, category, shortDescription,
  overview: `${name} is presented here as an educational starting point. The appropriate approach depends on anatomy, health, expectations, and a clinical assessment in the right context.`,
  whoMayConsider: ["People seeking an informed conversation about this concern", "Patients able to share relevant medical history and expectations", "People who understand that suitability cannot be confirmed online"],
  consultationEvaluates: ["Goals, anatomy, medical history, and previous procedures", "The difference between desired change and safe, realistic boundaries", "Questions that require examination, imaging, or an in-person review"],
  planning: [focus, "Written questions and expectations before any decision", "A documented plan confirmed by a licensed doctor"],
  recovery: ["Recovery varies by procedure and individual", "Ask about swelling, activity limits, medication, and follow-up", "Remote review does not replace appropriate clinical follow-up"],
  risks: ["Every procedure has risks and limitations", "Ask a licensed clinician to explain risks for your circumstances", "This page is not a diagnosis or treatment recommendation"],
  relatedDoctorIds: ["sample-dr-zhang-yalun", "sample-dr-si-yang", "sample-dr-wu-baoen"], relatedCaseIds: [], pricing: basePricing,
  seo: { title: `${name} in Shanghai | Flora Shanghai Aesthetics`, description: `${name} information for international patients considering plastic surgery in Shanghai. Educational content only; clinical suitability requires review.` }, image,
});

export const procedures: Procedure[] = [
  makeProcedure("rhinoplasty", "Rhinoplasty", "Nose", "A planning-led conversation about nasal shape, structure and proportion — designed to refine, not redefine.", "/images/procedures/rhinoplasty.jpg", "Nasal shape, structure, breathing questions, and proportion"),
  makeProcedure("revision-rhinoplasty", "Revision Rhinoplasty", "Nose", "A careful review of previous surgery, current concerns and realistic options, focused on balance over time.", "/images/procedures/rhinoplasty.jpg", "Previous operative history, healing, structure, and expectations"),
  makeProcedure("eyelid-surgery", "Eyelid Surgery", "Eyes", "Eyelid design discussed around expression, crease and individual anatomy — not a single standard of beauty.", "/images/procedures/eyelid-surgery.jpg", "Expression, eyelid anatomy, asymmetry, and functional questions"),
  makeProcedure("revision-eyelid-surgery", "Revision Eyelid Surgery", "Eyes", "A context-first review for people considering further eyelid surgery after a previous result.", "/images/procedures/eyelid-surgery.jpg", "Previous surgery, scar tissue, asymmetry, and healing context"),
  makeProcedure("facelift", "Facelift", "Face", "An educational overview of facial ageing, lift concepts and recovery questions before any recommendation.", "/images/procedures/facelift.jpg", "Facial ageing, skin quality, tissue position, and medical history"),
  makeProcedure("facial-rejuvenation", "Facial Rejuvenation", "Face", "Surgical and non-surgical options for a refreshed expression, discussed with context first.", "/images/procedures/facial-rejuvenation.jpg", "The difference between surgical and non-surgical options"),
  makeProcedure("liposuction", "Liposuction", "Body", "A proportion-focused discussion of contouring, health context and individual boundaries.", "/images/procedures/body-contouring.jpg", "Body composition, areas of concern, health, and recovery"),
  makeProcedure("body-contouring", "Body Contouring", "Body", "Planning considerations after change in weight or shape — including skin quality and combined procedures.", "/images/procedures/body-contouring.jpg", "Proportion, skin quality, healing, and combined procedures"),
  makeProcedure("fat-grafting", "Fat Grafting", "Body", "An overview of fat transfer questions, retention uncertainty and safety variables.", "/images/procedures/fat-grafting.jpg", "Donor areas, recipient goals, retention uncertainty, and safety"),
  makeProcedure("breast-surgery", "Breast Surgery", "Body", "A private conversation about proportion, implant or tissue options and informed consent.", "/images/procedures/breast-surgery.jpg", "Goals, anatomy, health history, implant or tissue options, and recovery"),
];

export const procedureBySlug = (slug: string) => procedures.find((procedure) => procedure.slug === slug);
