import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const corridors = [
  {
    href: "/lp/rhinoplasty-malaysia",
    label: "Malaysia & Singapore",
    detail: "Rhinoplasty — start remotely from KL or Singapore.",
  },
  {
    href: "/lp/eyelid-sea",
    label: "Southeast Asia eyelids",
    detail: "Crease and expression first, not a template fold.",
  },
  {
    href: "/lp/rhinoplasty-indonesia",
    label: "Indonesia",
    detail: "English-language review before any flight to Shanghai.",
  },
  {
    href: "/lp/revision-rhinoplasty",
    label: "Revision",
    detail: "Records first. No promise that a previous result can be undone.",
  },
];

export function CorridorBand() {
  return (
    <section className="paper-grid">
      {corridors.map((item) => (
        <div key={item.href}>
          <span>Corridor</span>
          <h3>{item.label}</h3>
          <p>{item.detail}</p>
          <Link href={item.href} className="text-link">
            Open this pathway <ArrowUpRight size={14} />
          </Link>
        </div>
      ))}
    </section>
  );
}
