import { Video } from "lucide-react";
import { Link } from "wouter";
import { marketFacts } from "@/data/marketContext";
import { CorridorBand } from "@/components/CorridorBand";

const homeFacts = ["shanghai-foreign", "travel-for-care", "inbound-aesthetics"];

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
            <p>From Malaysia, Singapore or Indonesia, the first step is a remote review. It is not a diagnosis and it does not require a flight.</p>
          </div>
          <Link href="/consultation" className="qm-button qm-button-dark">
            Start Preliminary Inquiry
          </Link>
        </div>
      </section>
      <CorridorBand />
      <section className="paper-grid fact-strip" aria-label="Public figures, not Flora volume">
        {marketFacts.filter((fact) => homeFacts.includes(fact.id)).map((fact) => (
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
