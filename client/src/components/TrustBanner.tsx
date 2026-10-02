export function TrustBanner() {
  const certifications = [
    { id: "source", label: "Profile source labels", icon: "✓" },
    { id: "status", label: "Visible verification status", icon: "◉" },
    { id: "evidence", label: "Evidence before claim", icon: "✦" },
    { id: "pathway", label: "Structured international pathway", icon: "⊕" },
  ];

  return (
    <section className="trust-banner">
      <div className="trust-content">
        <span className="trust-label">Verification Framework</span>
        <div className="trust-badges">
          {certifications.map((cert) => (
            <div key={cert.id} className="trust-badge">
              <span className="trust-icon">{cert.icon}</span>
              <span className="trust-text">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
