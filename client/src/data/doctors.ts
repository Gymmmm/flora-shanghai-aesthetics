export type VerificationStatus = "verified" | "hospital_reported" | "pending_verification" | "do_not_publish";

export type VerificationSource = {
  sourceName: string;
  sourceUrl: string;
  verificationDate: string;
  note: string;
};

export type Doctor = {
  id: string;
  slug: string;
  name: string;
  chineseName: string;
  photo: string;
  specialties: string[];
  primaryProcedures: string[];
  experienceYears: number | null;
  currentInstitution: string;
  philosophy: string;
  languages: string[];
  credentials: string[];
  publications: string[];
  memberships: string[];
  patents: string[];
  education: { degree: string; institution: string; year?: string }[];
  academicAffiliations: string[];
  publicationCount?: number;
  verificationStatus: VerificationStatus;
  verificationSources: VerificationSource[];
  caseIds: string[];
  seo: { title: string; description: string };
};

// This branch is a peer-facing showcase template. Source-provided clinician cards may be
// displayed here with an explicit PENDING VERIFICATION label. Production publication must
// switch this off and return to verified-only filtering.
export const showcaseMode = true;

export const doctors: Doctor[] = [
  {
    id: "sample-dr-zhang-yalun",
    slug: "dr-zhang-yalun",
    name: "Dr. Zhang Yalun",
    chineseName: "张亚伦",
    photo: "/images/doctors/doctor_zhang_yalun__source__clinical-review.jpg",
    specialties: ["Nose, breast and facial aesthetic planning — source card"],
    primaryProcedures: ["Rhinoplasty & revision", "Breast contouring", "Facial refinement", "Facial rejuvenation"],
    experienceYears: null,
    currentInstitution: "Source card supplied · institution pending independent verification",
    philosophy: "Showcase profile assembled from the supplied Chinese clinician card. Credentials, titles, volume claims and institutional affiliation remain outside the public-fact layer until independently verified.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Zhang Yalun | Flora Showcase", description: "Source-material showcase profile for Dr. Zhang Yalun. Verify credentials, institution and scope before production publication." }
  },
  {
    id: "sample-dr-si-yang",
    slug: "dr-si-yang",
    name: "Dr. Si Yang",
    chineseName: "司杨",
    photo: "/images/doctors/doctor_si_yang__source__clinical-review.jpg",
    specialties: ["Eye-focused aesthetic surgery — source card"],
    primaryProcedures: ["Eyelid surgery", "Revision eyelid surgery", "Eye rejuvenation", "Facial refinement"],
    experienceYears: null,
    currentInstitution: "Source card supplied · institution pending independent verification",
    philosophy: "The supplied source material emphasizes individualized eye and facial refinement. The showcase keeps that focus while withholding unverified credentials and surgical-volume claims.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Si Yang | Flora Showcase", description: "Source-material showcase profile for Dr. Si Yang, focused on eyelid, revision eye and facial refinement topics. Verify factual claims before publication." }
  },
  {
    id: "sample-dr-wu-baoen",
    slug: "dr-wu-baoen",
    name: "Dr. Wu Baoen",
    chineseName: "吴宝恩",
    photo: "/images/doctors/doctor_wu_baoci__source__clinical-review.jpg",
    specialties: ["Body contouring and fat-related aesthetic planning — source card"],
    primaryProcedures: ["Body contouring", "Waist & abdomen contouring", "Fat-related facial rejuvenation"],
    experienceYears: null,
    currentInstitution: "Source card supplied · institution pending independent verification",
    philosophy: "Showcase copy uses only the clearly visible treatment-focus themes from the supplied card. Titles, years of practice, patents and case-volume statements remain pending verification.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Wu Baoen | Flora Showcase", description: "Source-material showcase profile for Dr. Wu Baoen. Professional titles, experience and volume claims require verification before production use." }
  },
  {
    id: "sample-dr-dong-lei",
    slug: "dr-dong-lei",
    name: "Dr. Dong Lei",
    chineseName: "董磊",
    photo: "/images/doctors/doctor_dong_lei__source__clinical-review.jpg",
    specialties: ["Aesthetic surgery — source image available"],
    primaryProcedures: ["Procedure focus to be confirmed from source material"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A source image is available for the showcase, but treatment focus and professional background remain intentionally unfilled until the matching source card is reviewed.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Dong Lei | Flora Showcase", description: "Source-image showcase profile for Dr. Dong Lei. Details remain pending source review and verification." }
  },
  {
    id: "sample-dr-zhang-shuming",
    slug: "dr-zhang-shuming",
    name: "Dr. Zhang Shuming",
    chineseName: "张书明",
    photo: "/images/doctors/doctor_zhang_shuming__source__clinical-review.jpg",
    specialties: ["Breast, lifting and facial contour planning — source card"],
    primaryProcedures: ["Breast contouring", "Soft-tissue lifting", "Facial contour refinement", "Facial rejuvenation"],
    experienceYears: null,
    currentInstitution: "Source card supplied · institution pending independent verification",
    philosophy: "The showcase reflects the source card's visible treatment-focus themes without turning memberships, titles or branded techniques into verified public claims.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Zhang Shuming | Flora Showcase", description: "Source-material showcase profile for Dr. Zhang Shuming. Verify professional background and procedure scope before production publication." }
  },
  {
    id: "sample-dr-zhao-weihui",
    slug: "dr-zhao-weihui",
    name: "Dr. Zhao Weihui",
    chineseName: "赵伟辉",
    photo: "/images/doctors/doctor_zhao_weihui__source__clinical-review.jpg",
    specialties: ["Liposuction and body contour planning — source card"],
    primaryProcedures: ["Liposuction", "Arm contouring", "Leg contouring", "Back & waist contouring"],
    experienceYears: null,
    currentInstitution: "Source card supplied · institution pending independent verification",
    philosophy: "The supplied clinician card is used as a visual and topic source only. Association memberships, branded-device claims and case-volume statements are withheld pending independent verification.",
    languages: ["Language profile to be confirmed"],
    credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [],
    verificationStatus: "pending_verification", verificationSources: [], caseIds: [],
    seo: { title: "Dr. Zhao Weihui | Flora Showcase", description: "Source-material showcase profile for Dr. Zhao Weihui, centered on body contouring topics. Verify credentials and claims before production publication." }
  },
];

export const showcaseDoctors = doctors.filter((doctor) => doctor.verificationStatus !== "do_not_publish");

// Showcase Preview deliberately exposes source-provided profiles with visible verification labels.
// Production should use verified-only filtering.
export const publishableDoctors = showcaseMode
  ? showcaseDoctors
  : doctors.filter((doctor) => doctor.verificationStatus === "verified");

export const doctorBySlug = (slug: string) => {
  const doctor = doctors.find((item) => item.slug === slug && item.verificationStatus !== "do_not_publish");
  if (!doctor) return undefined;
  if (showcaseMode) return doctor;
  return doctor.verificationStatus === "verified" ? doctor : undefined;
};
