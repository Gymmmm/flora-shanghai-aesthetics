export function TrustBanner() {
  const trustPrinciples = [
    { id: "verify", label: "Source-backed profiles", detail: "Published information is separated from items still awaiting verification.", icon: "✓" },
    { id: "context", label: "Clear clinical boundaries", detail: "Website information does not replace an individual medical assessment.", icon: "◉" },
    { id: "privacy", label: "Privacy-first inquiry", detail: "Share only the information needed to clarify an appropriate next step.", icon: "⊕" },
  ];

  return (
    <section className="trust-banner" aria-label="Flora trust principles">
      <div className="trust-content">
        <div className="trust-heading">
          <span className="trust-label">HOW FLORA BUILDS TRUST</span>
          <p>Verification, context, and privacy before any decision.</p>
        </div>
        <div className="trust-badges">
          {trustPrinciples.map((item) => (
            <div key={item.id} className="trust-badge">
              <span className="trust-icon" aria-hidden="true">{item.icon}</span>
              <span className="trust-copy">
                <strong className="trust-text">{item.label}</strong>
                <small>{item.detail}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
