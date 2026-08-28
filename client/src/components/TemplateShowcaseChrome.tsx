import { useState } from "react";
import { Layers3, X } from "lucide-react";

export function TemplateShowcaseChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children}
      <aside className={`template-showcase ${open ? "is-open" : ""}`} aria-label="Template showcase controls">
        <button
          className="template-showcase-trigger"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? <X size={14} /> : <Layers3 size={14} />}
          <span>{open ? "Close" : "Showcase Template"}</span>
        </button>

        {open && (
          <div className="template-showcase-panel">
            <span className="template-showcase-kicker">FLORA / TEMPLATE 01</span>
            <h2>International Aesthetics Website Template</h2>
            <p>
              A presentation-ready editorial website system for aesthetic clinics, medical tourism teams, and international patient services.
            </p>
            <div className="template-showcase-grid">
              <div><b>01</b><span>Editorial brand system</span></div>
              <div><b>02</b><span>Doctor & procedure pages</span></div>
              <div><b>03</b><span>Patient journey & inquiry flow</span></div>
              <div><b>04</b><span>Verification-first content model</span></div>
              <div><b>05</b><span>Mobile conversion experience</span></div>
              <div><b>06</b><span>Ready to rebrand</span></div>
            </div>
            <small>Showcase content only. Replace brand, clinicians, credentials, patient media and contact details before production use.</small>
          </div>
        )}
      </aside>
    </>
  );
}
