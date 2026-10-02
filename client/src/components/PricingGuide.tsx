import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

type PricingTier = {
  procedureType: string;
  estimatedRange: string;
  local: string;
  included: string[];
  note: string;
};

const pricingTiers: PricingTier[] = [
  {
    procedureType: "Facial Procedures",
    estimatedRange: "¥15,000 – ¥80,000",
    local: "About SGD 2,700–14,500 · MYR 8,800–47,000",
    included: ["Consultation", "Anesthesia", "Facility fees", "Basic follow-up"],
    note: "Final pricing depends on technique, surgeon experience, and facility choice.",
  },
  {
    procedureType: "Body Contouring",
    estimatedRange: "¥25,000 – ¥120,000",
    local: "About SGD 4,500–21,800 · MYR 14,700–71,000",
    included: ["Pre-operative assessment", "Surgical fees", "Post-op garments", "Initial recovery care"],
    note: "Multi-area procedures may qualify for bundled pricing.",
  },
  {
    procedureType: "Breast Surgery",
    estimatedRange: "¥20,000 – ¥90,000",
    local: "About SGD 3,600–16,300 · MYR 11,800–53,000",
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
        <p>These are city ranges used for planning, not a Flora quote. Korea is often the brand benchmark; Thailand is often the package benchmark. Shanghai pricing still depends on surgeon, technique and facility.</p>
      </div>
      <div className="pricing-grid">
        {pricingTiers.map((tier) => (
          <div key={tier.procedureType} className="pricing-card">
            <h3>{tier.procedureType}</h3>
            <div className="pricing-range">{tier.estimatedRange}</div>
            <p className="pricing-note">{tier.local}. Illustrative only, at about 1 CNY = 0.18 SGD / 0.59 MYR.</p>
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
