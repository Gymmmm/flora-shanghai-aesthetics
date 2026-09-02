import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { contact } from "../data/site";
import { doctorHighlightBullets, type Doctor } from "../data/doctors";
import { faq } from "../data/faq";
import { track } from "../lib/analytics";

const zhangAiIntroVideo = "/videos/zhang-yalun-ai-intro.mp4";

function Seal({ children = "PENDING / VERIFY", status }: { children?: React.ReactNode; status?: string }) {
  const icon = status === "verified" ? "✓" : status === "pending_verification" ? "⏱" : status === "hospital_reported" ? "◐" : "✳";
  const color = status === "verified" ? "seal-verified" : status === "pending_verification" ? "seal-pending" : "";
  return <span className={`evidence-seal ${color}`}><b>{icon}</b>{children}</span>;
}

function ButtonLink({ href, children, dark = false, onClick }: { href: string; children: React.ReactNode; dark?: boolean; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={`qm-button ${dark ? "qm-button-dark" : ""}`}>
      {children}
      <ArrowUpRight size={15} />
    </Link>
  );
}

export function DoctorProfile({ doctor }: { doctor: Doctor }) {
  const bullets = doctorHighlightBullets(doctor);
  const whatsapp = contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : "";
  const showZhangVideo = doctor.slug === "dr-zhang-yalun";
  const specialtyTitle = doctor.specialties[0] || "Aesthetic Surgery";

  return (
    <>
      <section className="intl-doctor-hero">
        <div className="intl-doctor-portrait">
          <img src={doctor.photo} alt={`${doctor.name} portrait`} />
          <span className="intl-doctor-chip">Shanghai · Medical Aesthetics</span>
        </div>
        <div className="intl-doctor-copy">
          <p className="eyebrow">Shanghai Medical Aesthetics · Plastic Surgery for International Patients</p>
          <Seal status={doctor.verificationStatus}>{doctor.verificationStatus.replaceAll("_", " ").toUpperCase()}</Seal>
          <h1>{doctor.name}</h1>
          {doctor.chineseName ? <p className="intl-doctor-cn">{doctor.chineseName}</p> : null}
          <h2>{specialtyTitle}</h2>
          <ul className="intl-doctor-bullets">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="intl-doctor-lead">{doctor.philosophy}</p>
          <div className="intl-doctor-actions">
            <ButtonLink href="/consultation" dark onClick={() => track("start_consultation")}>
              Start consultation
            </ButtonLink>
            {whatsapp ? (
              <a
                className="qm-button"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_whatsapp")}
              >
                WhatsApp <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {showZhangVideo ? (
        <section className="intl-doctor-video" aria-label="Dr. Zhang Yalun presentation preview">
          <div className="intl-doctor-video-copy">
            <p className="eyebrow">Presentation preview (AI-assisted)</p>
            <h2>A short look at the<br /><i>clinical point of view.</i></h2>
            <p>Muted autoplay loop for international patients researching facial aesthetic surgery in Shanghai. Verification of profile credentials is still pending — this preview is presentation material only.</p>
          </div>
          <div className="intl-doctor-video-media">
            <video className="intl-doctor-video-el" autoPlay muted loop playsInline controls poster="/videos/zhang-yalun-ai-intro-poster.jpg">
              <source src={zhangAiIntroVideo} type="video/mp4" />
            </video>
            <p className="intl-doctor-video-caption">Presentation preview (AI-assisted) · verification pending</p>
          </div>
        </section>
      ) : null}

      <section className="intl-doctor-procedures">
        <div>
          <p className="eyebrow">Primary procedures</p>
          <h2>Conversation starting points</h2>
        </div>
        <div className="tag-row">
          {doctor.primaryProcedures.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      <section className="intl-doctor-verify">
        <div className="credential-box">
          <span>Verification status</span>
          <strong>{doctor.verificationStatus.replaceAll("_", " ")}</strong>
          <p>We keep pending and hospital-reported profiles honest. Independent credential documentation is added as it is confirmed — never invented.</p>
          <Link href="/surgeon-verification">
            See verification framework <ArrowUpRight size={15} />
          </Link>
        </div>
        {(doctor.education.length > 0 || doctor.academicAffiliations.length > 0 || doctor.credentials.length > 0) && (
          <div className="academic-credentials">
            <h3>Documented background</h3>
            {doctor.credentials.length > 0 && (
              <div className="credential-section">
                <span className="credential-label">Reported roles</span>
                <ul>
                  {doctor.credentials.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {doctor.education.length > 0 && (
              <div className="credential-section">
                <span className="credential-label">Education</span>
                <ul>
                  {doctor.education.map((edu, i) => (
                    <li key={i}>
                      <strong>{edu.degree}</strong> - {edu.institution}
                      {edu.year && ` (${edu.year})`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {doctor.academicAffiliations.length > 0 && (
              <div className="credential-section">
                <span className="credential-label">Professional memberships</span>
                <ul>
                  {doctor.academicAffiliations.map((aff) => (
                    <li key={aff}>{aff}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </section>

      {doctor.sourcePoster ? (
        <section className="intl-doctor-source">
          <details>
            <summary>
              Source materials (Chinese) <ChevronDown size={16} />
            </summary>
            <p>Hospital clinical-review poster retained for transparency. It is not the primary biography surface for international patients.</p>
            <img src={doctor.sourcePoster} alt={`${doctor.name} clinical-review source poster`} loading="lazy" />
          </details>
        </section>
      ) : null}

      <section className="detail-lower intl-doctor-faq">
        <h2>FAQ</h2>
        {faq.slice(0, 2).map((item) => (
          <details key={item.question}>
            <summary>
              {item.question} <ChevronDown size={16} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <section className="doctor-final-cta">
        <p className="eyebrow light">{doctor.name} · Shanghai</p>
        <h2>Considering a consultation?</h2>
        <p>Send your questions first. No procedure recommendation is made from a profile page alone.</p>
        <ButtonLink href="/consultation" dark onClick={() => track("start_consultation")}>
          Start consultation
        </ButtonLink>
      </section>
    </>
  );
}
