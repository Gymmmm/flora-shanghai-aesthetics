import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { track } from "../lib/analytics";
import type { Doctor } from "../data/doctors";

function Seal({ children = "PENDING / VERIFY", status }: { children?: React.ReactNode; status?: string }) {
  const icon = status === "verified" ? "✓" : status === "pending_verification" ? "⏱" : status === "hospital_reported" ? "◐" : "✳";
  const color = status === "verified" ? "seal-verified" : status === "pending_verification" ? "seal-pending" : "";
  return <span className={`evidence-seal ${color}`}><b>{icon}</b>{children}</span>;
}

function statusLabel(status: Doctor["verificationStatus"]) {
  if (status === "verified") return "VERIFIED";
  if (status === "hospital_reported") return "HOSPITAL REPORTED";
  return "PENDING VERIFICATION";
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const facePos = doctor.photoObjectPosition ?? "72% 10%";
  return (
    <Link href={`/surgeons/${doctor.slug}`} className="doctor-card doctor-card-intl" onClick={() => track("view_doctor", { doctor: doctor.slug })}>
      <div className="doctor-portrait-wrap">
        <img
          src={doctor.photo}
          alt={`${doctor.name} — Shanghai medical aesthetics`}
          className="doctor-portrait"
          style={{ objectPosition: facePos, transformOrigin: facePos }}
        />
        <span className="doctor-location-chip">Shanghai · Medical Aesthetics</span>
      </div>
      <div className="doctor-meta">
        <Seal status={doctor.verificationStatus}>{statusLabel(doctor.verificationStatus)}</Seal>
        <h3>{doctor.name}</h3>
        <p className="doctor-specialty-line">{doctor.specialties[0]}</p>
        <span className="doctor-card-cta">View profile</span>
        <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
