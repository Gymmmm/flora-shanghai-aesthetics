export function TrustBanner() {
  const certifications = [
    { id: "jci", label: "JCI accreditation checks", icon: "✓" },
    { id: "shanghai-health", label: "Shanghai Health Commission sourcing", icon: "◉" },
    { id: "plastic-surgery", label: "Plastic surgery credential review", icon: "✦" },
    { id: "international", label: "International patient pathway", icon: "⊕" },
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
