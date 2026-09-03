import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import {
  comparisonNotes,
  marketFacts,
  marketPositioning,
  priorityCorridors,
} from "@/data/marketContext";

export function MarketContext() {
  return (
    <>
      <section className="article-text" style={{ padding: "4rem 6vw" }}>
        <p className="eyebrow">{marketPositioning.eyebrow}</p>
        <h2>{marketPositioning.title}</h2>
        <p>{marketPositioning.lead}</p>
        <p className="disclaimer">{marketPositioning.note}</p>
      </section>
      <section className="paper-grid">
        {marketFacts.map((fact) => (
          <div key={fact.id}>
            <span>{fact.year}</span>
            <h3>{fact.label}</h3>
            <p>
              <strong>{fact.value}</strong>
              <br />
              {fact.detail}
            </p>
            <small>{fact.source}</small>
          </div>
        ))}
      </section>
      <section className="paper-grid">
        {comparisonNotes.map((note) => (
          <div key={note.place}>
            <span>-</span>
            <h3>{note.place}</h3>
            <p>
              {note.role}
              <br />
              {note.fit}
            </p>
          </div>
        ))}
      </section>
      <section className="paper-grid">
        {priorityCorridors.map((corridor) => (
          <div key={corridor.region}>
            <span>Corridor</span>
            <h3>{corridor.region}</h3>
            <p>{corridor.why}</p>
            <Link href={corridor.href} className="text-link">
              Start this pathway <ArrowUpRight size={14} />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
