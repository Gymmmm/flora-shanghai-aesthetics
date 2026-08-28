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
  { id: "sample-dr-zhang-yalun", slug: "dr-zhang-yalun", name: "Dr. Zhang Yalun", chineseName: "张亚伦（待核验）", photo: "/images/doctors/doctor_zhang_yalun__source__clinical-review.jpg", specialties: ["Facial aesthetics — placeholder profile"], primaryProcedures: ["Rhinoplasty", "Revision rhinoplasty"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for a planning-led conversation about proportion, structure, and individual goals.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Zhang Yalun | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Zhang Yalun. Confirm credentials and institution before publication." } },
  { id: "sample-dr-si-yang", slug: "dr-si-yang", name: "Dr. Si Yang", chineseName: "司阳（待核验）", photo: "/images/doctors/doctor_si_yang__source__clinical-review.jpg", specialties: ["Facial planning — placeholder profile"], primaryProcedures: ["Eyelid surgery", "Facial rejuvenation"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for an evidence-first discussion of anatomy, expression, and realistic boundaries.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Si Yang | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Si Yang. Confirm credentials and institution before publication." } },
  { id: "sample-dr-wu-baoen", slug: "dr-wu-baoen", name: "Dr. Wu Baoen", chineseName: "吴宝恩（待核验）", photo: "/images/doctors/doctor_wu_baoci__source__clinical-review.jpg", specialties: ["Body aesthetics — placeholder profile"], primaryProcedures: ["Body contouring", "Breast surgery"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for a careful conversation about proportion, medical context, and recovery planning.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Wu Baoen | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Wu Baoen. Confirm credentials and institution before publication." } },
  { id: "sample-dr-dong-lei", slug: "dr-dong-lei", name: "Dr. Dong Lei", chineseName: "董磊（待核验）", photo: "/images/doctors/doctor_dong_lei__source__clinical-review.jpg", specialties: ["Facial aesthetics — placeholder profile"], primaryProcedures: ["Rhinoplasty", "Facial contouring"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for a planning-led conversation about facial structure and aesthetic goals.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Dong Lei | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Dong Lei. Confirm credentials and institution before publication." } },
  { id: "sample-dr-zhang-shuming", slug: "dr-zhang-shuming", name: "Dr. Zhang Shuming", chineseName: "张书铭（待核验）", photo: "/images/doctors/doctor_zhang_shuming__source__clinical-review.jpg", specialties: ["Aesthetic surgery — placeholder profile"], primaryProcedures: ["Eyelid surgery", "Facial rejuvenation"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for a careful discussion of aesthetic refinement and natural results.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Zhang Shuming | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Zhang Shuming. Confirm credentials and institution before publication." } },
  { id: "sample-dr-zhao-weihui", slug: "dr-zhao-weihui", name: "Dr. Zhao Weihui", chineseName: "赵伟辉（待核验）", photo: "/images/doctors/doctor_zhao_weihui__source__clinical-review.jpg", specialties: ["Reconstructive and aesthetic surgery — placeholder profile"], primaryProcedures: ["Breast surgery", "Body contouring"], experienceYears: null, currentInstitution: "Institution to be confirmed", philosophy: "A placeholder profile for evidence-based discussion of surgical planning and realistic outcomes.", languages: ["Language profile to be confirmed"], credentials: [], publications: [], memberships: [], patents: [], education: [], academicAffiliations: [], verificationStatus: "pending_verification", verificationSources: [], caseIds: [], seo: { title: "Dr. Zhao Weihui | Flora Shanghai Aesthetics", description: "A verification-ready placeholder profile for Dr. Zhao Weihui. Confirm credentials and institution before publication." } },
];

// Public surfaces only expose doctors whose verification package has been completed.
// Pending and hospital-reported profiles remain available internally for review.
export const publishableDoctors = doctors.filter((doctor) => doctor.verificationStatus === "verified");
export const doctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug && doctor.verificationStatus === "verified");
