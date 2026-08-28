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
            Share your goals, travel context, and questions from home. The international patient team can review what you provide, explain what can be verified, and help clarify the appropriate next step. A preliminary review is not a diagnosis or treatment recommendation.
          </p>
          <div className="virtual-consult-steps" aria-label="Private inquiry steps">
            <div><b>01</b><span>Your questions</span></div>
            <div><b>02</b><span>Your context</span></div>
            <div><b>03</b><span>Your next step</span></div>
          </div>
        </div>
        <Link
          href="/consultation"
          className="qm-button qm-button-dark"
          onClick={() => track("start_consultation", { source: "home_virtual_consultation" })}
        >
          Start a Private Inquiry <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
