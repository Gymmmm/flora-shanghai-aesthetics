import { useEffect, useState } from "react";
import { Layers3, Play, X } from "lucide-react";

const videoParts = [
  "/showcase-media/zhang-video-micro-01.txt",
  "/showcase-media/zhang-video-micro-02.txt",
  "/showcase-media/zhang-video-micro-03.txt",
  "/showcase-media/zhang-video-micro-04.txt",
  "/showcase-media/zhang-video-micro-05.txt",
];

const caseParts = [
  "/showcase-media/case-recovery-01.txt",
  "/showcase-media/case-recovery-02.txt",
  "/showcase-media/case-recovery-03.txt",
  "/showcase-media/case-recovery-04.txt",
  "/showcase-media/case-recovery-05.txt",
  "/showcase-media/case-recovery-06.txt",
];

async function loadEmbeddedAsset(parts: string[], mime: string) {
  const payload = await Promise.all(parts.map(async (part) => {
    const response = await fetch(part);
    if (!response.ok) throw new Error(`Unable to load showcase asset: ${part}`);
    return response.text();
  }));
  return `data:${mime};base64,${payload.join("")}`;
}

export function TemplateShowcaseChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [doctorVideo, setDoctorVideo] = useState("");
  const [recoveryCase, setRecoveryCase] = useState("");

  useEffect(() => {
    if (!mediaOpen || doctorVideo || recoveryCase) return;
    let active = true;

    Promise.all([
      loadEmbeddedAsset(videoParts, "video/mp4"),
      loadEmbeddedAsset(caseParts, "image/jpeg"),
    ]).then(([video, image]) => {
      if (!active) return;
      setDoctorVideo(video);
      setRecoveryCase(image);
    }).catch((error) => {
      console.error("[Showcase media]", error);
    });

    return () => {
      active = false;
    };
  }, [mediaOpen, doctorVideo, recoveryCase]);

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
              <div><b>02</b><span>6 source doctor profiles</span></div>
              <div><b>03</b><span>Patient journey & inquiry flow</span></div>
              <div><b>04</b><span>Source-backed pricing architecture</span></div>
              <div><b>05</b><span>Watermarked case & video media</span></div>
              <div><b>06</b><span>Ready to rebrand</span></div>
            </div>
            <button className="template-source-button" type="button" onClick={() => setMediaOpen(true)}>
              <Play size={14} /> View source media showcase
            </button>
            <small>Showcase content only. Replace or verify clinicians, credentials, patient consent, prices and contact details before production use.</small>
          </div>
        )}
      </aside>

      {mediaOpen && (
        <div className="showcase-media-modal" role="dialog" aria-modal="true" aria-label="Flora source media showcase">
          <button className="showcase-media-close" type="button" onClick={() => setMediaOpen(false)} aria-label="Close media showcase">
            <X size={18} />
          </button>
          <div className="showcase-media-shell">
            <header>
              <span>FLORA / SOURCE MATERIAL DECK</span>
              <h2>Real materials,<br /><i>presentation-ready.</i></h2>
              <p>Optimized copies only. Patient imagery is presented as a recovery-timeline example, not as a guaranteed result. All displayed media carries Flora showcase watermarking.</p>
            </header>

            <div className="showcase-media-grid">
              <article className="showcase-media-card">
                <div className="showcase-video media-watermarked">
                  {doctorVideo ? (
                    <video src={doctorVideo} controls playsInline muted loop preload="metadata" aria-label="Dr. Zhang Yalun source video preview" />
                  ) : (
                    <div className="showcase-media-loading">Loading watermarked video…</div>
                  )}
                </div>
                <span>DOCTOR VIDEO / SOURCE PREVIEW</span>
                <h3>Dr. Zhang Yalun</h3>
                <p>Six-second lightweight preview derived from the supplied doctor video. Burned-in watermark plus display-layer watermark.</p>
              </article>

              <article className="showcase-media-card">
                <div className="case-pair media-watermarked">
                  {recoveryCase ? (
                    <img src={recoveryCase} alt="Supplied recovery timeline showing procedure day, postoperative day one and postoperative day two" />
                  ) : (
                    <div className="showcase-media-loading">Loading watermarked case…</div>
                  )}
                </div>
                <span>CASE / RECOVERY TIMELINE</span>
                <h3>Day 0 → Day 1 → Day 2</h3>
                <p>Source-provided postoperative timeline. Used to demonstrate case-story structure only; treatment, diagnosis, patient identity and outcome claims are intentionally not inferred.</p>
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
