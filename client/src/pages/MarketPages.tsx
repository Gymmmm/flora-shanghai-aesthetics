import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { landingPages } from "../data/site";
import { destinationCompare, marketById, priorityMarkets, shanghaiPosition, marketSources } from "../data/markets";

const cityImage = "/images/shanghai-city.jpg";
const clinicStill = "/images/hero.jpg";
const clinicMediaStrip = [
  "/images/doctors/doctor_zhang_yalun__face-crop.jpg",
  "/images/doctors/doctor_si_yang__face-crop.jpg",
  "/images/doctors/doctor_dong_lei__face-crop.jpg",
  "/images/doctors/doctor_wu_baoci__face-crop.jpg",
];

type ButtonLinkProps = { href: string; children: React.ReactNode; dark?: boolean; onClick?: () => void };
type InteriorHeroProps = { eyebrow: string; title: React.ReactNode; intro: string };

export function WhyShanghaiView({
  ButtonLink,
  InteriorHero,
}: {
  ButtonLink: (props: ButtonLinkProps) => React.ReactElement;
  InteriorHero: (props: InteriorHeroProps) => React.ReactElement;
}) {
  return (
    <>
      <InteriorHero eyebrow="01 / The city" title={<>A different<br /><i>perspective.</i></>} intro={shanghaiPosition.headline} />
      <section className="article-split">
        <div className="article-image" style={{ backgroundImage: `url(${cityImage})` }} />
        <div className="article-text">
          <p className="eyebrow">The honest reading</p>
          <h2>Early inbound.<br />Not late skill.</h2>
          <p>{shanghaiPosition.body}</p>
          <p>{shanghaiPosition.clinicSignal}</p>
        </div>
      </section>
      <section className="compare-section">
        <p className="eyebrow">Destination context · 2025</p>
        <h2>What each city<br /><i>actually is.</i></h2>
        <div className="compare-table" role="table">
          <div className="compare-row compare-head" role="row">
            <span>City</span><span>Role</span><span>What the data shows</span><span>Friction</span>
          </div>
          {destinationCompare.map((row) => (
            <div className="compare-row" role="row" key={row.destination}>
              <strong>{row.destination}</strong>
              <span>{row.role}</span>
              <span>{row.strength}</span>
              <span>{row.friction}</span>
            </div>
          ))}
        </div>
        <p className="source-note">Industry figures describe destination markets, not Flora patient volume. Sources: {marketSources.map((s) => s.label).join(" · ")}.</p>
      </section>
      <section className="article-split article-split-reverse">
        <div className="article-image" style={{ backgroundImage: `url(${clinicStill})` }} />
        <div className="article-text">
          <p className="eyebrow">Flora surgeons</p>
          <h2>Our own clinical team.</h2>
          <p>Profiles on this site use Flora's own doctor photographs — not stock faces. Credentials stay verification-honest until independently confirmed.</p>
          <ButtonLink href="/surgeons">Meet the surgeons</ButtonLink>
        </div>
      </section>
      <div className="clinic-media-strip clinic-media-strip-page" aria-label="Flora surgeons">{clinicMediaStrip.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div>
      <section className="paper-grid">{priorityMarkets.map((market) => (
        <div key={market.id}>
          <span>{market.flight}</span>
          <h3>{market.name}</h3>
          <p>{market.floraOffer}</p>
          <Link href={`/lp/${market.landingSlug}`} className="text-link">Open {market.name} route <ArrowUpRight size={14} /></Link>
        </div>
      ))}</section>
      <section className="cta-strip"><h2>Explore the pathway<br /><i>with context.</i></h2><ButtonLink href="/consultation">Private Consultation</ButtonLink></section>
    </>
  );
}

export function MarketLandingView({
  slug,
  ButtonLink,
  InteriorHero,
  Fallback,
}: {
  slug: string;
  ButtonLink: (props: ButtonLinkProps) => React.ReactElement;
  InteriorHero: (props: InteriorHeroProps) => React.ReactElement;
  Fallback: React.ReactNode;
}) {
  const page = landingPages.find((item) => item.slug === slug);
  if (!page) return <>{Fallback}</>;
  const market = page.marketId ? marketById(page.marketId) : undefined;
  return (
    <>
      <InteriorHero eyebrow={page.eyebrow} title={<>{page.title}<br /><i>{page.italic}</i></>} intro={page.intro} />
      <section className="lp-points">
        <p className="eyebrow">{market ? `${market.name} · ${market.flight}` : `Channel · ${page.sourceChannel}`}</p>
        <h2>What this route<br /><i>is for.</i></h2>
        <ul>{page.points.map((point) => <li key={point}>{point}</li>)}</ul>
        {market ? <p className="lp-signal">{market.outboundSignal}</p> : null}
      </section>
      {market ? (
        <section className="paper-grid lp-related">
          {[["Mindset", market.patientMindset], ["Flora offer", market.floraOffer], ["Start", "WhatsApp or the private form. No travel required for the first conversation."]].map(([t, d]) => (
            <div key={t}><span>-</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </section>
      ) : null}
      <section className="cta-strip">
        <p className="eyebrow">Source channel: {page.sourceChannel}</p>
        <h2>Start with<br /><i>the right questions.</i></h2>
        <div className="cta-actions">
          <ButtonLink href="/consultation">Private Consultation</ButtonLink>
          {page.procedureSlug ? <ButtonLink href={`/procedures/${page.procedureSlug}`} dark>Procedure notes</ButtonLink> : <ButtonLink href="/why-shanghai" dark>Why Shanghai</ButtonLink>}
        </div>
      </section>
    </>
  );
}

export function HomeMarketRoutes() {
  return (
    <section className="market-routes">
      <div className="market-routes-heading">
        <p className="eyebrow">Southeast Asia first</p>
        <h2>Coming from<br /><i>KL, Singapore, Jakarta?</i></h2>
        <p>Korea still leads the cross-border beauty brand. Shanghai is the quieter short-haul alternative — start remote, fly only if the plan holds.</p>
      </div>
      <div className="market-route-grid">
        {priorityMarkets.filter((m) => m.priority === 1).map((market) => (
          <Link href={`/lp/${market.landingSlug}`} className="market-route-card" key={market.id}>
            <small>{market.flight}</small>
            <h3>{market.name}</h3>
            <p>{market.floraOffer}</p>
            <span>Open this route <ArrowUpRight size={14} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
