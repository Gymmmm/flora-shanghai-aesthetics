import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { track } from "../lib/analytics";
import type { Doctor } from "../data/doctors";

function Seal({ children = "PENDING / VERIFY", status }: { children?: React.ReactNode; status?: string }) {
  const icon = status === "verified" ? "✓" : status === "pending_verification" ? "⏱" : status === "hospital_reported" ? "◐" : "✳";
  const color = status === "verified" ? "seal-verified" : status === "pending_verification" ? "seal-pending" : "";
  return <span className={`evidence-seal ${color}`}><b>{icon}</b>{children}</span>;
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link href={`/surgeons/${doctor.slug}`} className="doctor-card doctor-card-intl" onClick={() => track("view_doctor", { doctor: doctor.slug })}>
      <div className="doctor-portrait-wrap">
        <img src={doctor.photo} alt={`${doctor.name} — Shanghai medical aesthetics portrait`} className="doctor-portrait" />
        <span className="doctor-location-chip">Shanghai · Medical Aesthetics</span>
      </div>
      <div className="doctor-meta">
        <Seal status={doctor.verificationStatus}>{doctor.verificationStatus.replaceAll("_", " ").toUpperCase()}</Seal>
        <h3>{doctor.name}</h3>
        <p className="doctor-specialty-line">{doctor.specialties[0]}</p>
        <small>
          {doctor.verificationStatus === "verified"
            ? "Verified profile"
            : doctor.verificationStatus === "hospital_reported"
              ? "Hospital-reported · under independent verification"
              : "Pending verification"}
        </small>
        <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
