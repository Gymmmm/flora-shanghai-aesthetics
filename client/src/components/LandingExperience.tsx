import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { contact } from "@/data/site";
import { landingBySlug } from "@/data/landings";
import { procedureBySlug } from "@/data/procedures";
import { publishableDoctors } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { track } from "@/lib/analytics";
import { MarketContext } from "@/components/MarketContext";

function waLink(prompt: string) {
  const digits = (contact.whatsapp || "").replace(/\D/g, "");
  if (!digits) return "/consultation";
  return `https://wa.me/${digits}?text=${encodeURIComponent(prompt)}`;
}

export function LandingExperience({ slug }: { slug: string }) {
  const page = landingBySlug(slug);
  if (!page) {
    return (
      <section className="simple-copy">
        <p>This campaign landing page has not been configured.</p>
      </section>
    );
  }

  const procedure = page.procedureSlug ? procedureBySlug(page.procedureSlug) : undefined;
  const doctors = publishableDoctors.slice(0, 3);
  const href = waLink(page.whatsappPrompt);

  return (
    <>
      <section className="interior-hero">
        <div className="container-narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>
            {page.title}
            <br />
            <i>with context.</i>
          </h1>
          <p className="interior-intro">{page.intro}</p>
          <p>{page.promise}</p>
          <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
            <a
              className="qm-button qm-button-dark"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => track("click_whatsapp", { landing: page.slug })}
            >
              WhatsApp this pathway <ArrowUpRight size={15} />
            </a>
            <Link href="/consultation" className="qm-button" onClick={() => track("start_consultation", { landing: page.slug })}>
              Write a private inquiry <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-grid">
        <div>
          <span>01</span>
          <h3>How this compares</h3>
          <p>{page.comparedWith}</p>
        </div>
        <div>
          <span>02</span>
          <h3>What to bring</h3>
          <p>{page.bring.join(" · ")}</p>
        </div>
        <div>
          <span>03</span>
          <h3>What this page will not do</h3>
          <p>{page.notThis.join(" · ")}</p>
        </div>
      </section>

      <section className="article-text" style={{ padding: "3rem 6vw" }}>
        <p className="eyebrow">Pathway</p>
        <h2>Three steps, then a decision.</h2>
        <ul className="journey-services">
          {page.steps.map((step) => (
            <li key={step}>
              <Check size={14} /> {step}
            </li>
          ))}
        </ul>
      </section>

      {procedure ? (
        <section className="article-text" style={{ padding: "0 6vw 3rem" }}>
          <p className="eyebrow">{procedure.category}</p>
          <h2>{procedure.name}</h2>
          <p>{procedure.shortDescription}</p>
          <Link href={`/procedures/${procedure.slug}`} className="text-link">
            Read the procedure guide <ArrowUpRight size={14} />
          </Link>
        </section>
      ) : null}

      <section className="listing-section">
        <div className="listing-note">
          Surgeons for this conversation <span>Verification status stays visible</span>
        </div>
        <div className="doctor-grid doctor-grid-home">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {page.sourceChannel === "city" || page.slug === "why-shanghai" ? <MarketContext /> : null}

      <section className="cta-strip">
        <p className="eyebrow">Source channel: {page.sourceChannel}</p>
        <h2>
          Start from home.
          <br />
          <i>Travel later.</i>
        </h2>
        <a
          className="qm-button"
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          Continue on WhatsApp <ArrowUpRight size={15} />
        </a>
      </section>
    </>
  );
}
