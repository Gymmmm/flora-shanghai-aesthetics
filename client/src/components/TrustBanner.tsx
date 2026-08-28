export function TrustBanner() {
  const trustPrinciples = [
    { id: "verify", label: "Source-backed profiles", icon: "✓" },
    { id: "context", label: "Clear clinical boundaries", icon: "◉" },
    { id: "journey", label: "International patient pathway", icon: "✦" },
    { id: "privacy", label: "Privacy-first consultation", icon: "⊕" },
  ];

  return (
    <section className="trust-banner" aria-label="Flora trust principles">
      <div className="trust-content">
        <span className="trust-label">HOW FLORA BUILDS TRUST</span>
        <div className="trust-badges">
          {trustPrinciples.map((item) => (
            <div key={item.id} className="trust-badge">
              <span className="trust-icon">{item.icon}</span>
              <span className="trust-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
