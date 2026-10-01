import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const corridors = [
  {
    href: "/lp/rhinoplasty-malaysia",
    label: "Malaysia & Singapore",
    detail: "Bridge and tip, still your face. Remote review from KL or Singapore.",
  },
  {
    href: "/lp/eyelid-sea",
    label: "Southeast Asia eyelids",
    detail: "Crease and expression. Not a high Western fold, not a template double eyelid.",
  },
  {
    href: "/lp/rhinoplasty-indonesia",
    label: "Indonesia",
    detail: "English review first. A ticket to Shanghai is a later decision.",
  },
  {
    href: "/lp/revision-rhinoplasty",
    label: "Revision",
    detail: "Old records first. No promise a previous result can be undone.",
  },
];

export function CorridorBand() {
  return (
    <section className="paper-grid corridor-scroll" aria-label="Patient corridors">
      {corridors.map((item) => (
        <div key={item.href}>
          <span>Pathway</span>
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
