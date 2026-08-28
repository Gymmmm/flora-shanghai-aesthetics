import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const pricingChecklist = [
  ["Procedure fee", "Technique and clinician scope"],
  ["Facility & anesthesia", "What is included must be written clearly"],
  ["Tests & medication", "Pre-op and post-op items can change the total"],
  ["Follow-up", "Confirm in-person and remote review arrangements"],
];

export function PricingGuide() {
  return (
    <section className="pricing-section pricing-source-showcase">
      <div className="pricing-header">
        <p className="eyebrow">Source-backed pricing</p>
        <h2>Show the price.<br /><i>Show the context.</i></h2>
        <p>
          The showcase is prepared to display Flora's supplied surgery price sheet. We do not publish generic market estimates as if they were clinic prices. Source prices should be mapped item-by-item and paired with the inclusions, exclusions, and clinical-review boundary.
        </p>
      </div>

      <div className="pricing-source-card media-watermarked">
        <div className="pricing-source-status">
          <span>FLORA / SOURCE PRICE SHEET</span>
          <strong>Reference pricing architecture</strong>
          <p>Exact source rows are being mapped from the supplied material before numerical publication.</p>
        </div>
        <div className="pricing-source-list">
          {pricingChecklist.map(([title, note], index) => (
            <div key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span><strong>{title}</strong><small>{note}</small></span>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-footer">
        <p><strong>Showcase boundary:</strong> a displayed figure is a source reference, not a guaranteed quote. Final treatment and pricing require individual clinical assessment and a written quotation.</p>
        <Link href="/consultation" className="qm-button">Request a Written Quote <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
