import { Video } from "lucide-react";
import { Link } from "wouter";

export function VirtualConsultBanner() {
  return (
    <section className="virtual-consult-banner">
      <div className="virtual-consult-content">
        <div className="virtual-consult-icon">
          <Video size={32} />
        </div>
        <div className="virtual-consult-copy">
          <span className="virtual-badge">FREE</span>
          <h2>Start with a <i>Virtual Consultation</i></h2>
          <p>Connect with a board-certified surgeon via video. No commitment, no travel required. Get a preliminary assessment and transparent pricing from the comfort of your home.</p>
        </div>
        <Link href="/consultation" className="qm-button qm-button-dark">
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
}
