import { Video } from "lucide-react";
import { Link } from "wouter";
import { marketFacts } from "@/data/marketContext";
import { CorridorBand } from "@/components/CorridorBand";

export function VirtualConsultBanner() {
  return (
    <>
      <section className="virtual-consult-banner">
        <div className="virtual-consult-content">
          <div className="virtual-consult-icon">
            <Video size={32} />
          </div>
          <div className="virtual-consult-copy">
            <span className="virtual-badge">PRELIMINARY</span>
            <h2>Start with a <i>Virtual Consultation</i></h2>
            <p>Connect from Malaysia, Singapore, Indonesia or further. No travel required for the first conversation. A remote review is not a diagnosis — it organises the questions a surgeon would need next.</p>
          </div>
          <Link href="/consultation" className="qm-button qm-button-dark">
            Start Preliminary Inquiry
          </Link>
        </div>
      </section>
      <CorridorBand />
      <section className="paper-grid">
        {marketFacts.slice(0, 3).map((fact) => (
          <div key={fact.id}>
            <span>{fact.year}</span>
            <h3>{fact.label}</h3>
            <p>
              <strong>{fact.value}</strong>
              <br />
              {fact.detail}
            </p>
            <small>{fact.source}</small>
          </div>
        ))}
      </section>
    </>
  );
}
