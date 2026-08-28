import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { track } from "@/lib/analytics";

export function VirtualConsultBanner() {
  return (
    <section className="virtual-consult-banner" aria-labelledby="private-inquiry-title">
      <div className="virtual-consult-content">
        <div className="virtual-consult-copy">
          <span className="virtual-badge">A CLEARER FIRST STEP</span>
          <h2 id="private-inquiry-title">Start with a <i>private conversation.</i></h2>
          <p>
            Tell us what you are considering, what matters to you, and whether travel to Shanghai is realistic. The first review is designed to organize the questions, identify what information can be verified, and clarify whether a specialist consultation is an appropriate next step.
          </p>
          <div className="virtual-consult-steps" aria-label="Private inquiry steps">
            <div><b>01</b><span>Your goals</span></div>
            <div><b>02</b><span>Your context</span></div>
            <div><b>03</b><span>Possible next steps</span></div>
          </div>
          <div className="virtual-consult-boundaries" aria-label="Consultation boundaries">
            <span>No diagnosis at inquiry stage</span>
            <span>No obligation to proceed</span>
            <span>Medical decisions require clinician assessment</span>
          </div>
        </div>
        <div className="virtual-consult-action">
          <p>Begin from home. You can stop at any point.</p>
          <Link
            href="/consultation"
            className="qm-button qm-button-dark"
            onClick={() => track("start_consultation", { source: "home_virtual_consultation" })}
          >
            Start a Private Inquiry <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
