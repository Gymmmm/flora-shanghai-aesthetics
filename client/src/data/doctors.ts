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
  /** Clinical-review JPG — face-cropped via CSS (object-fit/cover + object-position). */
  photo: string;
  /** CSS object-position for face crop (Chinese poster text cropped out). */
  photoObjectPosition?: string;
  /** Optional full clinical-review poster kept for collapsed source transparency only. */
  sourcePoster?: string;
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

/** Short English bullets from existing profile fields — no invented credentials. */
export function doctorHighlightBullets(doctor: Doctor): string[] {
  const bullets: string[] = [];
  if (doctor.specialties[0]) bullets.push(`Specialty focus: ${doctor.specialties[0]}`);
  if (doctor.primaryProcedures.length) {
    bullets.push(`Consultation themes: ${doctor.primaryProcedures.slice(0, 3).join(", ")}`);
  }
  if (doctor.languages.length) bullets.push(doctor.languages.join(" · "));
  if (doctor.currentInstitution && !/under verification/i.test(doctor.currentInstitution)) {
    bullets.push(doctor.currentInstitution);
  } else {
    bullets.push("Shanghai · Medical Aesthetics pathway for international patients");
  }
  if (doctor.verificationStatus !== "verified") {
    bullets.push("Credential details remain under verification");
  }
  return bullets;
}

const placeholderPhoto = "/images/doctors/doctor-placeholder.svg";

export const doctors: Doctor[] = [
  {
    id: "sample-dr-zhang-yalun",
    slug: "dr-zhang-yalun",
    name: "Dr. Zhang Yalun",
    chineseName: "张亚伦",
    photo: "/images/doctors/doctor_zhang_yalun__source__clinical-review.jpg",
    photoObjectPosition: "78% 10%",
    sourcePoster: "/images/doctors/doctor_zhang_yalun__source__clinical-review.jpg",
    specialties: ["Facial Aesthetic Surgery"],
    primaryProcedures: ["Rhinoplasty", "Revision rhinoplasty"],
    experienceYears: null,
    currentInstitution: "Institution details under verification",
    philosophy: "A consultation-led approach focused on facial proportion, structural balance and the patient's own aesthetic goals. Profile details remain under verification before publication as confirmed credentials.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: [],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "pending_verification",
    verificationSources: [],
    caseIds: [],
    seo: {
      title: "Dr. Zhang Yalun | Facial Aesthetic Surgery in Shanghai | Flora",
      description: "Explore Dr. Zhang Yalun's current Flora profile for international patients considering facial aesthetic surgery in Shanghai. Credential details remain under verification.",
    },
  },
  {
    id: "sample-dr-si-yang",
    slug: "dr-si-yang",
    name: "Dr. Si Yang",
    chineseName: "司杨",
    photo: "/images/doctors/doctor_si_yang__source__clinical-review.jpg",
    photoObjectPosition: "80% 11%",
    sourcePoster: "/images/doctors/doctor_si_yang__source__clinical-review.jpg",
    specialties: ["Eye & Facial Aesthetic Surgery"],
    primaryProcedures: [
      "Upper eyelid surgery",
      "Revision eyelid surgery",
      "Facial contouring",
      "Facial lifting & rejuvenation",
    ],
    experienceYears: null,
    currentInstitution: "Flora Medical Aesthetics, Shanghai",
    philosophy: "Dr. Si Yang's hospital-reported profile focuses on individualized eye and facial aesthetic planning, with attention to proportion, expression, structural balance and natural-looking refinement. For international patients, the pathway can begin with a remote consultation before deciding whether an in-person visit to Shanghai is appropriate.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: ["Chief Plastic Surgeon — Flora Medical Aesthetics (hospital-reported)"],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "hospital_reported",
    verificationSources: [
      {
        sourceName: "Flora Medical Aesthetics physician profile material",
        sourceUrl: "",
        verificationDate: "2026-08-29",
        note: "Name, institution role and listed treatment focus are based on hospital-supplied material and remain subject to independent credential verification.",
      },
    ],
    caseIds: [],
    seo: {
      title: "Dr. Si Yang | Eye & Facial Aesthetic Surgeon in Shanghai | Flora",
      description: "Meet Dr. Si Yang at Flora Medical Aesthetics in Shanghai. Explore her hospital-reported focus in eyelid surgery, revision eyelid surgery, facial contouring and facial rejuvenation, with support for international patients.",
    },
  },
  {
    id: "sample-dr-wu-baoen",
    slug: "dr-wu-baoen",
    name: "Dr. Wu Baoen",
    chineseName: "吴宝恩",
    photo: "/images/doctors/doctor_wu_baoci__source__clinical-review.jpg",
    photoObjectPosition: "72% 9%",
    sourcePoster: "/images/doctors/doctor_wu_baoci__source__clinical-review.jpg",
    specialties: ["Body Aesthetic Surgery"],
    primaryProcedures: ["Body contouring", "Breast surgery"],
    experienceYears: null,
    currentInstitution: "Institution details under verification",
    philosophy: "A planning-led profile for patients researching body aesthetic surgery in Shanghai, with attention to proportion, medical context, recovery and realistic expectations. Credential details remain under verification.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: [],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "pending_verification",
    verificationSources: [],
    caseIds: [],
    seo: {
      title: "Dr. Wu Baoen | Body Aesthetic Surgery in Shanghai | Flora",
      description: "Explore Dr. Wu Baoen's current Flora profile for international patients considering body contouring or breast surgery in Shanghai. Credential details remain under verification.",
    },
  },
  {
    id: "sample-dr-dong-lei",
    slug: "dr-dong-lei",
    name: "Dr. Dong Lei",
    chineseName: "董磊",
    photo: "/images/doctors/doctor_dong_lei__source__clinical-review.jpg",
    photoObjectPosition: "74% 10%",
    sourcePoster: "/images/doctors/doctor_dong_lei__source__clinical-review.jpg",
    specialties: ["Facial Aesthetic Surgery"],
    primaryProcedures: ["Rhinoplasty", "Facial contouring"],
    experienceYears: null,
    currentInstitution: "Institution details under verification",
    philosophy: "A consultation-led profile for patients researching facial structure, proportion and aesthetic refinement in Shanghai. Credential and institution details remain under verification.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: [],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "pending_verification",
    verificationSources: [],
    caseIds: [],
    seo: {
      title: "Dr. Dong Lei | Facial Aesthetic Surgery in Shanghai | Flora",
      description: "Explore Dr. Dong Lei's current Flora profile for international patients considering rhinoplasty or facial contouring in Shanghai. Credential details remain under verification.",
    },
  },
  {
    id: "sample-dr-zhang-shuming",
    slug: "dr-zhang-shuming",
    name: "Dr. Zhang Shuming",
    chineseName: "张书铭",
    photo: "/images/doctors/doctor_zhang_shuming__source__clinical-review.jpg",
    photoObjectPosition: "78% 10%",
    sourcePoster: "/images/doctors/doctor_zhang_shuming__source__clinical-review.jpg",
    specialties: ["Aesthetic Surgery"],
    primaryProcedures: ["Eyelid surgery", "Facial rejuvenation"],
    experienceYears: null,
    currentInstitution: "Institution details under verification",
    philosophy: "A consultation-led profile focused on individualized aesthetic refinement, facial balance and realistic planning. Credential and institution details remain under verification.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: [],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "pending_verification",
    verificationSources: [],
    caseIds: [],
    seo: {
      title: "Dr. Zhang Shuming | Aesthetic Surgery in Shanghai | Flora",
      description: "Explore Dr. Zhang Shuming's current Flora profile for international patients considering eyelid surgery or facial rejuvenation in Shanghai. Credential details remain under verification.",
    },
  },
  {
    id: "sample-dr-zhao-weihui",
    slug: "dr-zhao-weihui",
    name: "Dr. Zhao Weihui",
    chineseName: "赵伟辉",
    photo: "/images/doctors/doctor_zhao_weihui__source__clinical-review.jpg",
    photoObjectPosition: "76% 11%",
    sourcePoster: "/images/doctors/doctor_zhao_weihui__source__clinical-review.jpg",
    specialties: ["Reconstructive & Aesthetic Surgery"],
    primaryProcedures: ["Breast surgery", "Body contouring"],
    experienceYears: null,
    currentInstitution: "Institution details under verification",
    philosophy: "A profile for evidence-led discussion of surgical planning, recovery and realistic outcomes for international patients researching care in Shanghai. Credential details remain under verification.",
    languages: ["Chinese", "English-language patient support available through Flora"],
    credentials: [],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "pending_verification",
    verificationSources: [],
    caseIds: [],
    seo: {
      title: "Dr. Zhao Weihui | Reconstructive & Aesthetic Surgery in Shanghai | Flora",
      description: "Explore Dr. Zhao Weihui's current Flora profile for international patients considering breast surgery or body contouring in Shanghai. Credential details remain under verification.",
    },
  },
];

export const publishableDoctors = doctors.filter((doctor) => doctor.verificationStatus !== "do_not_publish");
export const doctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug);
