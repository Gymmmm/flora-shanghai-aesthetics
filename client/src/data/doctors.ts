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

const placeholderPhoto = "/images/doctors/doctor-placeholder.svg";

export const doctors: Doctor[] = [
  {
    id: "sample-dr-zhang-yalun",
    slug: "dr-zhang-yalun",
    name: "Dr. Zhang Yalun",
    chineseName: "张亚伦（待核验）",
    photo: "/images/doctors/doctor_zhang_yalun__source__clinical-review.jpg",
    specialties: ["Facial aesthetics — placeholder profile"],
    primaryProcedures: ["Rhinoplasty", "Revision rhinoplasty"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A placeholder profile for a planning-led conversation about proportion, structure, and individual goals.",
    languages: ["Language profile to be confirmed"],
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
      title: "Dr. Zhang Yalun | Flora Shanghai Aesthetics",
      description: "A verification-ready placeholder profile for Dr. Zhang Yalun. Confirm credentials and institution before publication.",
    },
  },
  {
    id: "sample-dr-si-yang",
    slug: "dr-si-yang",
    name: "Dr. Si Yang",
    chineseName: "司杨",
    photo: "/images/doctors/doctor_si_yang__source__clinical-review.jpg",
    specialties: ["Eye & Facial Aesthetic Surgery"],
    primaryProcedures: [
      "Upper eyelid surgery",
      "Revision eyelid surgery",
      "Facial contouring",
      "Facial lifting & rejuvenation",
    ],
    experienceYears: null,
    currentInstitution: "Flora Medical Aesthetics, Shanghai",
    philosophy: "Dr. Si Yang focuses on individualized eye and facial aesthetic planning, with particular attention to facial proportion, expression, structural balance, and natural-looking refinement. Each treatment plan begins with an in-person or remote consultation and is tailored to the patient's anatomy and goals.",
    languages: ["Chinese", "International patient support available through Flora"],
    credentials: ["Chief Plastic Surgeon — Flora Medical Aesthetics (hospital-reported)"],
    publications: [],
    memberships: [],
    patents: [],
    education: [],
    academicAffiliations: [],
    verificationStatus: "hospital_reported",
    verificationSources: [
      {
        sourceName: "Flora Medical Aesthetics physician profile poster",
        sourceUrl: "",
        verificationDate: "2026-08-29",
        note: "Name, institution role and listed treatment focus are based on hospital-supplied promotional material and remain subject to independent credential verification.",
      },
    ],
    caseIds: [],
    seo: {
      title: "Dr. Si Yang | Eye & Facial Aesthetic Surgeon in Shanghai | Flora",
      description: "Meet Dr. Si Yang at Flora Medical Aesthetics in Shanghai. Explore her focus in eyelid surgery, revision eyelid surgery, facial contouring and facial rejuvenation, with consultation support for international patients.",
    },
  },
  {
    id: "sample-dr-wu-baoen",
    slug: "dr-wu-baoen",
    name: "Dr. Wu Baoen",
    chineseName: "吴宝恩（待核验）",
    photo: "/images/doctors/doctor_wu_baoci__source__clinical-review.jpg",
    specialties: ["Body aesthetics — placeholder profile"],
    primaryProcedures: ["Body contouring", "Breast surgery"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A placeholder profile for a careful conversation about proportion, medical context, and recovery planning.",
    languages: ["Language profile to be confirmed"],
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
      title: "Dr. Wu Baoen | Flora Shanghai Aesthetics",
      description: "A verification-ready placeholder profile for Dr. Wu Baoen. Confirm credentials and institution before publication.",
    },
  },
  {
    id: "sample-dr-dong-lei",
    slug: "dr-dong-lei",
    name: "Dr. Dong Lei",
    chineseName: "董磊（待核验）",
    photo: "/images/doctors/doctor_dong_lei__source__clinical-review.jpg",
    specialties: ["Facial aesthetics — placeholder profile"],
    primaryProcedures: ["Rhinoplasty", "Facial contouring"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A placeholder profile for a planning-led conversation about facial structure and aesthetic goals.",
    languages: ["Language profile to be confirmed"],
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
      title: "Dr. Dong Lei | Flora Shanghai Aesthetics",
      description: "A verification-ready placeholder profile for Dr. Dong Lei. Confirm credentials and institution before publication.",
    },
  },
  {
    id: "sample-dr-zhang-shuming",
    slug: "dr-zhang-shuming",
    name: "Dr. Zhang Shuming",
    chineseName: "张书铭（待核验）",
    photo: "/images/doctors/doctor_zhang_shuming__source__clinical-review.jpg",
    specialties: ["Aesthetic surgery — placeholder profile"],
    primaryProcedures: ["Eyelid surgery", "Facial rejuvenation"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A placeholder profile for a careful discussion of aesthetic refinement and natural results.",
    languages: ["Language profile to be confirmed"],
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
      title: "Dr. Zhang Shuming | Flora Shanghai Aesthetics",
      description: "A verification-ready placeholder profile for Dr. Zhang Shuming. Confirm credentials and institution before publication.",
    },
  },
  {
    id: "sample-dr-zhao-weihui",
    slug: "dr-zhao-weihui",
    name: "Dr. Zhao Weihui",
    chineseName: "赵伟辉（待核验）",
    photo: "/images/doctors/doctor_zhao_weihui__source__clinical-review.jpg",
    specialties: ["Reconstructive and aesthetic surgery — placeholder profile"],
    primaryProcedures: ["Breast surgery", "Body contouring"],
    experienceYears: null,
    currentInstitution: "Institution to be confirmed",
    philosophy: "A placeholder profile for evidence-based discussion of surgical planning and realistic outcomes.",
    languages: ["Language profile to be confirmed"],
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
      title: "Dr. Zhao Weihui | Flora Shanghai Aesthetics",
      description: "A verification-ready placeholder profile for Dr. Zhao Weihui. Confirm credentials and institution before publication.",
    },
  },
];

export const publishableDoctors = doctors.filter((doctor) => doctor.verificationStatus !== "do_not_publish");
export const doctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug);
