import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

type PricingTier = {
  procedureType: string;
  estimatedRange: string;
  included: string[];
  note: string;
};

const pricingTiers: PricingTier[] = [
  {
    procedureType: "Facial Procedures",
    estimatedRange: "¥15,000 - ¥80,000",
    included: ["Consultation", "Anesthesia", "Facility fees", "Basic follow-up"],
    note: "Final pricing depends on technique, surgeon experience, and facility choice.",
  },
  {
    procedureType: "Body Contouring",
    estimatedRange: "¥25,000 - ¥120,000",
    included: ["Pre-operative assessment", "Surgical fees", "Post-op garments", "Initial recovery care"],
    note: "Multi-area procedures may qualify for bundled pricing.",
  },
  {
    procedureType: "Breast Surgery",
    estimatedRange: "¥20,000 - ¥90,000",
    included: ["Imaging studies", "Implant costs (if applicable)", "Facility fees", "Follow-up appointments"],
    note: "Implant brand and type significantly affect final cost.",
  },
];

export function PricingGuide() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <p className="eyebrow">Transparent Pricing</p>
        <h2>Understand the<br /><i>investment.</i></h2>
        <p>Pricing varies by procedure complexity, surgeon expertise, and facility choice. These ranges reflect typical costs for international patients in Shanghai.</p>
      </div>
      <div className="pricing-grid">
        {pricingTiers.map((tier) => (
          <div key={tier.procedureType} className="pricing-card">
            <h3>{tier.procedureType}</h3>
            <div className="pricing-range">{tier.estimatedRange}</div>
            <div className="pricing-included">
              <span className="eyebrow">Typically includes</span>
              <ul>
                {tier.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="pricing-note">{tier.note}</p>
          </div>
        ))}
      </div>
      <div className="pricing-footer">
        <p><strong>Important:</strong> These are educational estimates only. Final pricing requires a personalized consultation and written quote from your selected surgeon.</p>
        <Link href="/consultation" className="qm-button">Request Detailed Quote <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
