export function TrustBanner() {
  const certifications = [
    { id: "jci", label: "JCI Accredited", icon: "✓" },
    { id: "shanghai-health", label: "Shanghai Health Commission", icon: "◉" },
    { id: "plastic-surgery", label: "Chinese Society of Plastic Surgery", icon: "✦" },
    { id: "international", label: "International Patient Services", icon: "⊕" },
  ];

  return (
    <section className="trust-banner">
      <div className="trust-content">
        <span className="trust-label">Verified Credentials</span>
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
