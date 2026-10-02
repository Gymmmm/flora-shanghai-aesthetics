import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, Send, Upload, X } from "lucide-react";
import { Link, Route, Switch, useLocation, useRoute } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { trpc } from "./lib/trpc";
import { getAttribution, track } from "./lib/analytics";
import { doctors, doctorBySlug, publishableDoctors } from "./data/doctors";
import { procedures, procedureBySlug } from "./data/procedures";
import { PricingGuide } from "./components/PricingGuide";
import { TrustBanner } from "./components/TrustBanner";
import { VirtualConsultBanner } from "./components/VirtualConsultBanner";
import { MarketContext } from "./components/MarketContext";
import { LandingExperience } from "./components/LandingExperience";
import { FloatingContactButtons } from "./components/FloatingContactButtons";
import { AdminContactButtons } from "./components/AdminContactButtons";
import { DoctorCard } from "./components/DoctorCard";
import { DoctorProfile } from "./components/DoctorProfile";
import { cases, caseBySlug, publishableCases } from "./data/cases";
import { journey } from "./data/journeys";
import { faq } from "./data/faq";
import { contact, footerLinks, legalReviewed, navItems, siteCopy, landingPages } from "./data/site";
import { LocaleProvider, useLocale } from "./i18n/LocaleContext";

const heroImage = "/images/hero.jpg";
const cityImage = "/images/shanghai-city.jpg";
const clinicStill = "/images/hero.jpg";
const mark = "/images/flora-mark.png";
const clinicMediaStrip = [
  "/images/doctors/doctor_zhang_yalun__portrait-v2.jpg",
  "/images/doctors/doctor_si_yang__portrait-v2.jpg",
  "/images/doctors/doctor_dong_lei__portrait-v2.jpg",
  "/images/doctors/doctor_wu_baoci__portrait-v2.jpg",
  "/images/shanghai-city.jpg",
  "/images/hero.jpg",
];

function usePageSeo(title: string, description: string, path: string, jsonLd?: Record<string, unknown>) {
  useEffect(() => {
    document.title = title;
    const set = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let node = document.querySelector<HTMLMetaElement>(selector);
      if (!node) { node = document.createElement("meta"); property ? node.setAttribute("property", name) : node.setAttribute("name", name); document.head.appendChild(node); }
      node.content = content;
    };
    set("description", description); set("og:title", title, true); set("og:description", description, true); set("twitter:card", "summary_large_image"); set("twitter:title", title); set("twitter:description", description);
    const canonical = document.querySelector<HTMLLinkElement>("link[rel=canonical]") || Object.assign(document.createElement("link"), { rel: "canonical" });
    canonical.href = `${window.location.origin}${path}`; document.head.appendChild(canonical);
    document.querySelector("script[data-flora-jsonld]")?.remove();
    if (jsonLd) { const script = document.createElement("script"); script.type = "application/ld+json"; script.dataset.floraJsonld = "true"; script.textContent = JSON.stringify(jsonLd); document.head.appendChild(script); }
    return () => { document.querySelector("script[data-flora-jsonld]")?.remove(); };
  }, [title, description, path, jsonLd]);
}

function ButtonLink({ href, children, dark = false, onClick }: { href: string; children: React.ReactNode; dark?: boolean; onClick?: () => void }) { return <Link href={href} onClick={onClick} className={`qm-button ${dark ? "qm-button-dark" : ""}`}>{children}<ArrowUpRight size={15} /></Link>; }
function Mark({ small = false }: { small?: boolean }) { return <img src={mark} alt="Flora botanical meridian mark" className={small ? "brand-mark small" : "brand-mark"} />; }
function Placeholder({ label = "Image placeholder" }: { label?: string }) { return <div className="placeholder"><span>{label}</span><small>Replace with approved media</small></div>; }
function Seal({ children = "PENDING / VERIFY", status }: { children?: React.ReactNode; status?: string }) {
  const getStatusIcon = () => {
    if (status === "verified") return "✓";
    if (status === "pending_verification") return "•";
    if (status === "hospital_provided") return "•";
    return "✳";
  };
  const getStatusColor = () => {
    if (status === "verified") return "seal-verified";
    if (status === "pending_verification") return "seal-pending";
    return "";
  };
  return <span className={`evidence-seal ${getStatusColor()}`}><b>{getStatusIcon()}</b>{children}</span>;
}

function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { locale, setLocale, t, footerLabel } = useLocale();
  const whatsapp = contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : "";
  const instagram = String(contact.instagram || "").replace(/^@/, "");
  const showInstagram = Boolean(instagram) && instagram !== "goat.2014238";

  return (
    <div className="site-shell" data-current-route={location}>
      <header className={`site-header ${location !== "/" ? "header-paper" : ""}`}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Mark />
          <span>
            <b>Flora</b>
            <em>{t.brandSubtitle}</em>
          </span>
        </Link>
        <nav className="desktop-nav">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className={location === href ? "active" : ""}>
              {t.nav[href] ?? label}
            </Link>
          ))}
        </nav>
        <div className="lang-toggle" role="group" aria-label={t.langAria}>
          <button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>{t.langEn}</button>
          <span aria-hidden="true">|</span>
          <button type="button" className={locale === "zh" ? "active" : ""} onClick={() => setLocale("zh")}>{t.langZh}</button>
        </div>
        <ButtonLink href="/consultation" onClick={() => track("start_consultation")}>Start International Intake</ButtonLink>
        <button className="menu-trigger" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      {open && (
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {t.nav[href] ?? label}
              <ArrowUpRight size={14} />
            </Link>
          ))}
          <div className="lang-toggle mobile" role="group" aria-label={t.langAria}>
            <button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>{t.langEn}</button>
            <span aria-hidden="true">|</span>
            <button type="button" className={locale === "zh" ? "active" : ""} onClick={() => setLocale("zh")}>{t.langZh}</button>
          </div>
          <ButtonLink href="/consultation">Start International Intake</ButtonLink>
        </div>
      )}
      <main>{children}</main>
      {(!contact.email && !contact.whatsapp) && (
        <div className="mobile-cta visible">
          <Link href="/consultation" onClick={() => track("start_consultation")}>
            Start International Intake <ArrowUpRight size={15} />
          </Link>
        </div>
      )}
      <FloatingContactButtons />
      <footer className="footer">
        <div className="footer-brand">
          <Mark small />
          <div>
            <div className="footer-title">{t.footerTitle}</div>
            <p>{t.footerBlurb.split("\n").map((line, i) => <span key={i}>{i > 0 ? <br /> : null}{line}</span>)}</p>
          </div>
        </div>
        <div className="footer-col">
          <span>{t.footerContact}</span>
          <p className="support-hours">{(contact.email || contact.whatsapp) ? t.supportHours : t.inquiryFallback}</p>
          {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : null}
          {whatsapp ? <a href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsappLabel}</a> : <span>{t.whatsappComingSoon}</span>}
          {showInstagram ? <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">Instagram @{instagram}</a> : null}
        </div>
        <div className="footer-col">
          <span>{t.footerInformation}</span>
          {footerLinks.map(([label, href]) => <Link key={href} href={href}>{footerLabel(href, label)}</Link>)}
        </div>
        <div className="footer-note">Shanghai hospital.<br /><i>Verified context.</i><small>© 2026 Flora Shanghai Aesthetics Hospital. {t.footerRights}</small></div>
      </footer>
    </div>
  );
}

function InteriorHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) { return <section className="interior-hero"><div className="hero-spine"><b>FLORA</b><span>MERIDIAN<br />{eyebrow.split(" ")[0]}</span></div><div className="container-narrow"><div className="meridian-rule"><span>{eyebrow.split(" ")[0]}</span><i /></div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="interior-intro">{intro}</p></div></section>; }
function Chapter({ index, eyebrow, title, children, dark = false }: { index: string; eyebrow: string; title: string; children?: React.ReactNode; dark?: boolean }) { return <div className={`chapter ${dark ? "chapter-dark" : ""}`}><div className="chapter-index"><span>{index}</span><small>{eyebrow}</small></div><h2>{title}</h2>{children && <div className="chapter-copy">{children}</div>}</div>; }

function Home() {
  usePageSeo(
    "Flora Shanghai Aesthetics Hospital | For International Patients",
    "Flora Shanghai Aesthetics Hospital in Shanghai. The hospital's brand site for international patients considering facial aesthetics, body contouring and breast surgery at Flora.",
    "/",
    { "@context": "https://schema.org", "@type": "Hospital", name: siteCopy.hospital, description: "A Shanghai medical aesthetics hospital for international patients.", url: "https://flora-shanghai-aesthetics.vercel.app/" },
  );
  const pathway = [
    ["01", "International intake", "Country, language, treatment interest, timing, budget and prior procedures are captured so the hospital team can begin from context."],
    ["02", "Remote review", "The first clinical step can begin from home. Remote review is preliminary and does not replace an in-person assessment at Flora."],
    ["03", "Doctor & credential review", "Doctor identity, hospital affiliation, procedure focus and source status are shown before any in-person visit or treatment decision."],
    ["04", "In-hospital consultation", "When the case is appropriate, the patient is invited to the hospital in Shanghai for the in-person consultation, examination and informed consent."],
    ["05", "Recovery & follow-up", "Recovery questions and follow-up requirements are part of the hospital pathway from the first conversation onward."],
  ];
  return <>
    <section className="hero access-hero">
      <img src={heroImage} alt="Flora Shanghai Aesthetics Hospital — international patient entrance" className="hero-image" />
      <div className="hero-wash" />
      <div className="hero-copy">
        <p className="eyebrow light">Flora Shanghai Aesthetics Hospital</p>
        <h1>A Shanghai hospital for<br /><i>international patients.</i></h1>
        <p>Begin the international patient intake from home. Understand our doctors, verification status, and the next clinical step at Flora before you decide whether to travel.</p>
        <div className="hero-actions">
          <ButtonLink href="/consultation" dark onClick={() => track("start_consultation")}>Start International Intake</ButtonLink>
          <ButtonLink href="/surgeon-verification">See Verification</ButtonLink>
        </div>
      </div>
      <div className="hero-caption">Shanghai medical aesthetics hospital<br /><span>Verification status shown before travel.</span></div>
    </section>

    <section className="access-proof" aria-label="How Flora prepares international patients">
      <div><span>Before travel</span><b>01</b><p>See our doctors, hospital affiliation and verification status before committing to a care route.</p></div>
      <div><span>Before the hospital visit</span><b>02</b><p>Complete a structured international intake so the hospital team starts with usable clinical context.</p></div>
      <div><span>Before treatment</span><b>03</b><p>Final diagnosis, treatment planning and informed consent are made by the licensed clinical team at Flora.</p></div>
    </section>

    <section className="product-pathway">
      <div className="product-pathway-head">
        <p className="eyebrow">International Patient Pathway</p>
        <h2>One route from first question<br /><i>to the hospital consultation.</i></h2>
        <p>Flora turns an overseas inquiry into structured information a patient can understand and the hospital's medical team can review.</p>
      </div>
      <div className="pathway-rail">
        {pathway.map(([n,title,copy]) => <div className="pathway-node" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
      </div>
      <div className="pathway-actions">
        <ButtonLink href="/patient-journey">Open Patient Pathway</ButtonLink>
        <ButtonLink href="/consultation" dark>Start Intake</ButtonLink>
      </div>
    </section>

    <section className="verification-product">
      <div>
        <p className="eyebrow">Verification Graph</p>
        <h2>Doctor → hospital → procedure → source → status.</h2>
        <p>Profiles are not treated as marketing copy. Each factual claim is tied to a source, verification date and status. Missing evidence stays visibly pending.</p>
        <ButtonLink href="/surgeon-verification">Inspect the verification model</ButtonLink>
      </div>
      <div className="verification-graph" aria-label="Verification graph example">
        <div><span>Doctor</span><strong>Named profile</strong><small>Pending / hospital-provided / verified</small></div>
        <i>→</i>
        <div><span>Hospital</span><strong>Flora Shanghai Aesthetics Hospital</strong><small>Source-linked when confirmed</small></div>
        <i>→</i>
        <div><span>Procedure</span><strong>Clinical focus</strong><small>Educational context, not recommendation</small></div>
        <i>→</i>
        <div><span>Evidence</span><strong>Source + date</strong><small>Auditable verification record</small></div>
      </div>
    </section>

    <section className="surgeon-section access-doctors">
      <Chapter index="01" eyebrow="Verification-ready directory" title="Doctors with visible evidence status.">
        <p>Patients can see what is confirmed, what is hospital-provided, and what is still under verification before making a travel decision.</p>
        <ButtonLink href="/surgeons">View all doctors</ButtonLink>
      </Chapter>
      <div className="doctor-grid doctor-grid-home">{publishableDoctors.slice(0, 3).map((d) => <DoctorCard key={d.id} doctor={d} />)}</div>
    </section>

    <section className="procedures-section access-procedures">
      <Chapter index="02" eyebrow="Decision information" title="Procedure pages built for questions, not packages.">
        <p>Each guide separates who may consider a conversation, what a consultation evaluates, planning, recovery, risks and pricing variables.</p>
        <ButtonLink href="/procedures">Explore procedure guides</ButtonLink>
      </Chapter>
      <div className="procedure-grid">{procedures.slice(0, 4).map((p) => <Link href={`/procedures/${p.slug}`} className="procedure-card" key={p.slug}><img src={p.image} alt="" loading="lazy" /><div className="procedure-overlay"><span>{p.category}</span><h3>{p.name}</h3><p>{p.shortDescription}</p><ArrowUpRight size={18} /></div></Link>)}</div>
    </section>

    <section className="intake-product">
      <div className="intake-copy">
        <p className="eyebrow">International Patient Intake</p>
        <h2>Not a contact form.<br /><i>The hospital's intake.</i></h2>
        <p>The intake captures the information the hospital team needs to begin a preliminary review: country, language, procedure, concerns, prior procedures, budget, timing and how you found Flora.</p>
        <ButtonLink href="/consultation" dark onClick={() => track("start_consultation")}>Open International Intake</ButtonLink>
      </div>
      <div className="intake-schema" aria-label="International intake fields">
        {["Country & language","Treatment interest","Main concern","Previous procedures","Budget context","Travel timing","Remote review readiness","Source attribution"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b><Check size={15}/></div>)}
      </div>
    </section>

    <section className="coordination-band">
      <div><p className="eyebrow light">What the hospital does</p><h2>Prepared for review,<br /><i>without pretending every service is already integrated.</i></h2></div>
      <div className="coordination-grid">
        <article><span>Remote review</span><p>The hospital team collects patient context and prepares the next appropriate clinical step.</p></article>
        <article><span>In-hospital consultation</span><p>Examination, imaging, and informed consent happen at the hospital in Shanghai.</p></article>
        <article><span>Cost & travel readiness</span><p>The hospital surfaces the questions a patient needs answered before committing to travel.</p></article>
        <article><span>Recovery & follow-up</span><p>Post-procedure questions and continuity are part of the same hospital pathway.</p></article>
      </div>
    </section>

    <section className="consult-banner access-final-cta">
      <p className="eyebrow light">Start with structured context</p>
      <h2>Begin from home.<br /><i>Travel only when the hospital route is clear.</i></h2>
      <ButtonLink href="/consultation" dark>Start International Intake</ButtonLink>
    </section>
  </>;
}

function WhyShanghai() { usePageSeo("Why Flora Shanghai Aesthetics Hospital for International Patients | Flora", "Why Flora Shanghai Aesthetics Hospital is on the shortlist for international patients considering care in Shanghai.", "/why-shanghai"); return <><InteriorHero eyebrow="01 / Why Flora" title={<>Flora,<br /><i>in Shanghai.</i></>} intro="Flora is a Shanghai medical aesthetics hospital. This page explains the public context for considering care at Flora, and what is still left for the hospital team to confirm with you." /><section className="article-split"><div className="article-image" style={{ backgroundImage: `url(${cityImage})` }} /><div className="article-text"><p className="eyebrow">Shanghai, in context</p><h2>Clinical supply already exists in the city.</h2><p>Shanghai has substantial clinical capacity and a growing international-care infrastructure. The harder part is often the digital path before arrival: finding structured doctor information, understanding what is verified, preparing an inquiry and knowing what the next step at the hospital actually is.</p><p>Flora is the hospital of record on this site. City-level market data on this page is sourced from public reports and is not presented as Flora patient numbers.</p></div></section><section className="article-split article-split-reverse"><div className="article-image" style={{ backgroundImage: `url(${clinicStill})` }} /><div className="article-text"><p className="eyebrow">Doctor information</p><h2>Evidence status before preference.</h2><p>Doctor profiles at Flora are presented with visible verification status. Hospital-provided information stays labelled as hospital-provided; details still being checked stay marked as verification in progress.</p><ButtonLink href="/surgeon-verification">See verification method</ButtonLink></div></section><div className="clinic-media-strip clinic-media-strip-page" aria-label="Doctor profile context">{clinicMediaStrip.slice(0,4).map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><section className="paper-grid">{[["Public evidence", "Market and city data are labelled as external context, not Flora performance."], ["Verification", "Doctor and hospital claims keep their source and evidence status visible."], ["Patient pathway", "Intake, preliminary review, in-hospital consultation and travel readiness are separated into clear steps."]].map(([t,d]) => <div key={t}><span>-</span><h3>{t}</h3><p>{d}</p></div>)}</section><MarketContext /><section className="cta-strip"><h2>Understand the hospital route<br /><i>before you travel.</i></h2><ButtonLink href="/consultation">Start International Intake</ButtonLink></section></>; }
function Surgeons() { usePageSeo("Doctors at Flora Shanghai Aesthetics Hospital | Flora", "A verification-ready directory of doctor profiles at Flora Shanghai Aesthetics Hospital for international patients.", "/surgeons"); return <><InteriorHero eyebrow="Flora Shanghai Aesthetics Hospital" title={<>Meet the<br /><i>doctors.</i></>} intro="Doctor profiles for international patients at Flora. Every factual claim carries a verification status — credentials are never invented." /><section className="listing-section desktop-only"><div className="listing-note">{publishableDoctors.length} profiles / Flora Shanghai Aesthetics Hospital <span>Credentials are not claims until sourced</span></div><div className="doctor-grid doctor-grid-large">{publishableDoctors.map((d) => <DoctorCard doctor={d} key={d.id} />)}</div></section></>; }
function DoctorDetail() {
  const [, params] = useRoute("/surgeons/:slug");
  const d = params ? doctorBySlug(params.slug) : undefined;
  if (!d || d.verificationStatus === "do_not_publish") {
    return <SimplePage title="Profile unavailable" eyebrow="Surgeon profile">This profile is not available for production publication.</SimplePage>;
  }
  usePageSeo(
    d.seo.title,
    d.seo.description,
    `/surgeons/${d.slug}`,
    d.verificationStatus === "verified" ? { "@context": "https://schema.org", "@type": "Physician", name: d.name } : undefined,
  );
  return <DoctorProfile doctor={d} />;
}
function Procedures() { usePageSeo("Plastic Surgery Procedures in Shanghai | Flora", "Explore educational procedure pages for international patients considering plastic surgery in Shanghai.", "/procedures"); return <><InteriorHero eyebrow="03 / The options" title={<>Considered<br /><i>procedures.</i></>} intro="Educational information can help you prepare better questions. It cannot diagnose, recommend, or promise an outcome." /><section className="procedure-list">{procedures.map((p,i) => <Link href={`/procedures/${p.slug}`} className="procedure-row" key={p.slug}><img className="procedure-row-thumb" src={p.image} alt="" loading="lazy" /><span>0{(i % 9) + 1}</span><div><small>{p.category}</small><h2>{p.name}</h2><p>{p.shortDescription}</p></div><ArrowUpRight /></Link>)}</section></>; }
function ProcedureDetail() { const [, params] = useRoute("/procedures/:slug"); const p = params ? procedureBySlug(params.slug) : undefined; if (!p) return <SimplePage title="Procedure unavailable" eyebrow="Procedure guide">This procedure is not in the current directory.</SimplePage>; usePageSeo(p.seo.title, p.seo.description, `/procedures/${p.slug}`, { "@context": "https://schema.org", "@type": "MedicalWebPage", name: p.name, description: p.seo.description }); track("view_procedure", { procedure: p.slug }); return <><InteriorHero eyebrow={`Procedure guide / ${p.category}`} title={<>{p.name}<br /><i>in context.</i></>} intro={p.overview} /><section className="procedure-hero-media"><img src={p.image} alt="" loading="lazy" /><img src={clinicStill} alt="" loading="lazy" /><img src="/images/doctors/doctor_zhang_yalun__portrait-v2.jpg" alt="" loading="lazy" /></section><section className="guide-layout"><aside><span>On this page</span><a href="#consider">Who may consider it</a><a href="#process">Consultation evaluates</a><a href="#planning">Planning</a><a href="#recovery">Recovery</a><a href="#risks">Risks & questions</a></aside><article><h2 id="consider">Who may consider a conversation.</h2>{p.whoMayConsider.map((text) => <p key={text}>{text}</p>)}<div className="info-callout"><b>Medical boundary</b><p>{siteCopy.medicalBoundary}</p></div><h3 id="process">Consultation evaluates</h3>{p.consultationEvaluates.map((text) => <p key={text}>{text}</p>)}<h3 id="planning">Planning</h3>{p.planning.map((text) => <p key={text}>{text}</p>)}<h3 id="recovery">Recovery</h3>{p.recovery.map((text) => <p key={text}>{text}</p>)}<h3 id="risks">Risks & questions</h3>{p.risks.map((text) => <p key={text}>{text}</p>)}<div className="credential-box"><span>Pricing</span><strong>{p.pricing.mode === "consultation_only" ? "Consultation only / not published" : p.pricing.mode}</strong><p>{p.pricing.disclaimer}</p></div><ButtonLink href="/consultation">Discuss your questions</ButtonLink></article></section></>; }
function Cases() { usePageSeo("Plastic Surgery Cases | Flora Shanghai Aesthetics", "Consent-gated case architecture for approved patient journeys.", "/cases"); return <><InteriorHero eyebrow="04 / The record" title={<>Patient<br /><i>journeys.</i></>} intro="Case media belongs to the people represented in it. Only approved, verified cases with website permission can appear in the production directory." /><section className="case-list">{publishableCases.length === 0 ? <div className="cases-pending-fill"><div className="demo-banner"><Seal>CONSENT REQUIRED</Seal> No patient before/after is published yet. Until written consent is approved, this page shows referenced Shanghai doctor and city context only — never invented outcomes.</div><div className="clinic-media-strip clinic-media-strip-page" aria-label="Referenced doctor and city context">{clinicMediaStrip.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><p className="cases-pending-note">Approved patient stories will appear here after written consent. Ask during consultation if you want to review verified records.</p></div> : publishableCases.map((c) => <Link href={`/cases/${c.slug}`} className="case-row" key={c.id}><div className="case-pair"><Placeholder label="Before" /><Placeholder label="After" /></div><div className="case-copy"><p className="eyebrow">Approved case</p><h2>{c.title}</h2><span className="text-link">View full case <ArrowUpRight size={15} /></span></div></Link>)}</section></>; }
function CaseDetail() { const [, params] = useRoute("/cases/:slug"); const c = params ? caseBySlug(params.slug) : undefined; if (!c || !publishableCases.some((item) => item.slug === c.slug)) return <SimplePage title="Case not published" eyebrow="Consent gate">This case is held from production until consent, channel scope, and verification requirements are satisfied.</SimplePage>; usePageSeo(c.seo.title, c.seo.description, `/cases/${c.slug}`); track("view_case", { case: c.slug }); return <><InteriorHero eyebrow="Case detail / approved" title={<>{c.title}<br /><i>in context.</i></>} intro={c.seo.description} /><section className="guide-layout"><article><div className="case-pair"><Placeholder label="Before / approved media" /><Placeholder label="After / approved media" /></div><h2>Recovery timeline</h2>{c.recoveryTimeline.map((step) => <p key={step.label}><strong>{step.label}</strong> - {step.detail}</p>)}<div className="info-callout"><b>Media scope</b><p>{c.mediaUsageScope}</p></div></article></section></>; }
function Verification() { usePageSeo("Doctor & Credential Verification at Flora Shanghai Aesthetics Hospital | Flora", "See how Flora links doctor identity, hospital affiliation, procedure, source, verification date and status for international patients.", "/surgeon-verification"); return <><InteriorHero eyebrow="05 / Verification graph" title={<>Evidence before<br /><i>decision.</i></>} intro="Flora treats medical profile information as structured evidence: doctor, hospital, procedure, source, verification date and current status." /><section className="verification-layout"><div><Seal /><p className="eyebrow">Verification graph</p><h2>A claim is not a credential<br /><i>until it has a source.</i></h2><p>Every profile can move through visible states: pending verification, hospital-provided, verified, or do-not-publish. Missing evidence remains pending instead of being filled with marketing language.</p><ButtonLink href="/surgeons">View doctor statuses</ButtonLink></div><div className="verification-list">{["Doctor identity","Current hospital","Procedure focus","Source record","Verification date","Status & context note"].map((x,i) => <div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b><Check size={16} /></div>)}</div></section><section className="verification-note"><p className="eyebrow">Publication rule</p><h2>Structured data follows<br /><i>evidence status.</i></h2><p>Physician schema is only enabled for verified records. Titles, hospital affiliations, publications, memberships, patents, surgical volume and patient outcomes are never inferred. Hospital-provided information remains explicitly labelled until independently confirmed.</p></section></>; }
function Journey() { usePageSeo("International Patient Pathway at Flora Shanghai Aesthetics Hospital | Flora", "A structured international patient pathway from inquiry to remote follow-up at Flora Shanghai Aesthetics Hospital.", "/patient-journey"); track("view_patient_journey"); return <><InteriorHero eyebrow="06 / The pathway" title={<>Your pathway<br /><i>at Flora.</i></>} intro="A clear sequence makes an international care experience easier to understand. Each step can pause for questions, review, and informed consent." /><div className="clinic-media-strip clinic-media-strip-page" aria-label="Referenced Shanghai doctor and city context">{clinicMediaStrip.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><section className="timeline">{journey.map((step) => <div key={step.id} className="timeline-item"><span>{String(step.step).padStart(2,"0")}</span><div><h2>{step.title}</h2><p>{step.description}</p><div className="journey-services"><span className="service-label">Included Services</span><ul>{step.services.map((service) => <li key={service}><Check size={14} /> {service}</li>)}</ul></div><small><b>Responsible:</b> {step.responsibleParty} · <b>Timing:</b> {step.estimatedTiming}</small><p className="medical-boundary">{step.medicalBoundary}</p></div></div>)}</section><section className="journey-city" style={{ backgroundImage: `url(${cityImage})` }}><div><p className="eyebrow light">A city between appointments</p><h2>Make room for<br /><i>the whole trip.</i></h2></div></section><section className="cta-strip"><h2>Ready for the<br /><i>first conversation?</i></h2><ButtonLink href="/consultation" onClick={() => track("start_consultation")}>Start International Intake</ButtonLink></section></>; }

function Consultation() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    country: "",
    age: "",
    email: "",
    whatsapp: "",
    preferredLanguage: "English",
    procedureSlug: "rhinoplasty",
    mainConcern: "",
    mainGoal: "",
    previousProcedures: "",
    preferredAesthetic: "",
    estimatedBudget: "",
    expectedTravelDate: "",
    canTravelToShanghai: "open" as "open" | "remote_first" | "undecided",
    remoteAssessmentReady: false,
    attribution: "",
    consent: false,
  });
  const mutation = trpc.consultation.submit.useMutation();
  const attribution = useMemo(() => getAttribution(), []);
  useEffect(() => { track("start_consultation"); }, []);
  const update = (key: string, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      const payload = {
        ...form,
        age: form.age ? Number(form.age) : null,
        canTravelToShanghai: form.canTravelToShanghai === "open",
        consent: true as const,
        attribution,
        honeypot: "",
        photoNames: [],
      } as unknown as import("../../shared/lead").ConsultationPayload;
      const result = await mutation.mutateAsync(payload);
      setSent(true);
      track("submit_consultation", { mode: result.mode });
    } catch (err) {
      setError(err instanceof Error ? err.message : "We could not receive this inquiry. Please try again.");
    }
  };
  usePageSeo("International Patient Intake | Flora Shanghai Aesthetics Hospital", "Start the international patient intake at Flora Shanghai Aesthetics Hospital for preliminary review by the hospital's clinical team.", "/consultation");
  return (
    <>
      <InteriorHero eyebrow="07 / International intake" title={<>Start with<br /><i>structured context.</i></>} intro="Share the information the Flora hospital team needs for a preliminary review of your case, before any decision to travel." />
      <section className="form-wrap">
        <div className="form-spine"><span>07</span><b>PATIENT<br />INTAKE</b></div>
        {sent ? (
          <div className="success-state">
            <Check size={28} />
            <p className="eyebrow">Inquiry received</p>
            <h2>Your context<br /><i>is noted.</i></h2>
            <p>{mutation.data?.message}</p>
            <ButtonLink href="/">Return home</ButtonLink>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-heading">
              <p className="eyebrow">International Patient Intake</p>
              <h2>Information for<br /><i>preliminary review.</i></h2>
              <p className="reply-expectation">
                Your country, language, treatment interest, prior procedures, budget context and timing help determine the next appropriate step.
                This intake is not medical advice, diagnosis or a promise of hospital acceptance.
              </p>
              <div className="intake-status-row"><span>01 Intake</span><span>02 Preliminary review</span><span>03 Verification</span><span>04 Hospital consultation</span></div>
            </div>

            <fieldset className="form-fieldset">
              <legend>1. About you</legend>
              <div className="form-grid">
                <label>Country / region *<input type="text" required minLength={2} value={form.country} onChange={(e) => update("country", e.target.value)} /></label>
                <label>Preferred language *<input type="text" required value={form.preferredLanguage} onChange={(e) => update("preferredLanguage", e.target.value)} placeholder="English" /></label>
                <label>Full name *<input type="text" required minLength={2} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} /></label>
                <label>Age<input type="number" min={18} max={100} value={form.age} onChange={(e) => update("age", e.target.value)} placeholder="Adult patients (18+)" /></label>
              </div>
            </fieldset>

            <fieldset className="form-fieldset">
              <legend>2. Procedure & concern</legend>
              <div className="form-grid">
                <label>Procedure / area of interest
                  <select value={form.procedureSlug} onChange={(e) => update("procedureSlug", e.target.value)}>
                    {procedures.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                  </select>
                </label>
                <label>Approximate budget
                  <input type="text" value={form.estimatedBudget} onChange={(e) => update("estimatedBudget", e.target.value)} placeholder="e.g. USD 5,000 – 8,000" />
                </label>
                <label className="full">Main concern *<textarea rows={4} required minLength={10} value={form.mainConcern} onChange={(e) => update("mainConcern", e.target.value)} placeholder="What are you trying to understand or address?" /></label>
                <label className="full">Main goal<textarea rows={3} value={form.mainGoal} onChange={(e) => update("mainGoal", e.target.value)} placeholder="What does success look like for you? (optional)" /></label>
                <label className="full">Previous procedures / surgery<textarea rows={3} value={form.previousProcedures} onChange={(e) => update("previousProcedures", e.target.value)} placeholder="Prior surgery, fillers, treatments relevant to this concern (optional)" /></label>
                <label className="full">Preferred aesthetic / reference<textarea rows={2} value={form.preferredAesthetic} onChange={(e) => update("preferredAesthetic", e.target.value)} placeholder="A short description of the look you want to keep / avoid (optional)" /></label>
              </div>
            </fieldset>

            <fieldset className="form-fieldset">
              <legend>3. Timing & readiness</legend>
              <div className="form-grid">
                <label>Desired travel timing<input type="text" value={form.expectedTravelDate} onChange={(e) => update("expectedTravelDate", e.target.value)} placeholder="e.g. Apr–Jun 2025, no fixed date" /></label>
                <label>Shanghai travel readiness
                  <select
                    value={form.canTravelToShanghai}
                    onChange={(e) => update("canTravelToShanghai", e.target.value)}
                  >
                      <option value="open">Open to travel if clinically appropriate</option>
                      <option value="remote_first">Prefer remote review first</option>
                      <option value="undecided">Undecided — want to understand options first</option>
                    </select>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" checked={form.remoteAssessmentReady} onChange={(e) => update("remoteAssessmentReady", e.target.checked)} />
                  <span>I am ready to provide further information if it helps the preliminary review.</span>
                </label>
              </div>
            </fieldset>

            <fieldset className="form-fieldset">
              <legend>4. Contact & attribution</legend>
              <div className="form-grid">
                <label>Email *<input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} /></label>
                <label>WhatsApp / phone<input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} /></label>
                <label className="full">How did you hear about Flora? (optional)
                  <input type="text" value={form.attribution} onChange={(e) => update("attribution", e.target.value)} placeholder="Search, friend, social, doctor, etc." />
                </label>
              </div>
            </fieldset>

            <p className="upload-note">Remote review media is requested only after an appropriate next step is confirmed. Please do not send sensitive medical images through unverified channels.</p>

            <label className="consent">
              <input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} />
              I understand this intake is not medical advice and agree that Flora may review the information for preliminary coordination and routing.
            </label>
            <p id="photo-note" className="disclaimer">{siteCopy.photoNotice}</p>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="qm-button qm-button-dark" type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Sending…" : "Start International Intake"}
              <ArrowUpRight size={15} />
            </button>
          </form>
        )}
      </section>
    </>
  );
}
function LandingPage({ slug }: { slug: string }) { const page = landingPages.find((item) => item.slug === slug); if (!page) return <SimplePage title="Landing page unavailable" eyebrow="Channel entry">This campaign landing page has not been configured.</SimplePage>; usePageSeo(`${page.title} | Flora Shanghai Aesthetics`, page.intro, `/lp/${page.slug}`); return <LandingExperience slug={slug} />; }
function SimplePage({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) { usePageSeo(`${title} | Flora Shanghai Aesthetics`, `${title} information for Flora Shanghai Aesthetics.`, `/${title.toLowerCase().replaceAll(" ", "-")}`); return <><InteriorHero eyebrow={eyebrow} title={<>{title}<br /><i>in plain language.</i></>} intro={title === "Medical Disclaimer" ? "Important boundaries for using Flora's international patient information and intake pathway." : "This information page is not part of the primary patient navigation."} /><section className="simple-copy"><p>{children}</p>{!legalReviewed && title !== "Medical Disclaimer" && <div className="info-callout"><b>Not published in primary navigation</b><p>This supporting policy page remains outside the client-facing navigation until professional review is complete.</p></div>}</section></>; }
function AppRoutes() { return <Switch><Route path="/" component={Home} /><Route path="/admin/contact-buttons" component={AdminContactButtons} /><Route path="/why-shanghai" component={WhyShanghai} /><Route path="/surgeons" component={Surgeons} /><Route path="/surgeons/:slug" component={DoctorDetail} /><Route path="/procedures" component={Procedures} /><Route path="/procedures/:slug" component={ProcedureDetail} /><Route path="/cases" component={Cases} /><Route path="/cases/:slug" component={CaseDetail} /><Route path="/surgeon-verification" component={Verification} /><Route path="/patient-journey" component={Journey} /><Route path="/consultation" component={Consultation} /><Route path="/lp/:slug">{(params) => <LandingPage slug={params.slug} />}</Route><Route path="/privacy"><SimplePage title="Privacy Policy" eyebrow="Information">Describe collection, use, storage, retention, international transfer, rights, and clinic contact details after legal review.</SimplePage></Route><Route path="/medical-disclaimer"><SimplePage title="Medical Disclaimer" eyebrow="Information">This website provides general educational information only. It does not provide medical advice, diagnosis, or a guarantee of results.</SimplePage></Route><Route path="/terms"><SimplePage title="Terms of Use" eyebrow="Information">Add reviewed terms governing website use, third-party links, limitations, and applicable law.</SimplePage></Route><Route path="/patient-media-consent"><SimplePage title="Patient Media Consent" eyebrow="Information">Add the approved consent language, channels, expiry, withdrawal, and deletion process for patient media.</SimplePage></Route><Route path="/data-processing-notice"><SimplePage title="Data Processing Notice" eyebrow="Information">Add a reviewed notice describing sensitive information, processors, retention, access controls, and deletion requests.</SimplePage></Route><Route><SimplePage title="Page not found" eyebrow="404">The page you are looking for is not part of this release.</SimplePage></Route></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><LocaleProvider><SiteShell><AppRoutes /></SiteShell><Toaster /></LocaleProvider></ThemeProvider></ErrorBoundary>; }
