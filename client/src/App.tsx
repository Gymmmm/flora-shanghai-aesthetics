import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, Pause, Play, Send, X } from "lucide-react";
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
const heroVideo = "/images/hero-video.mp4";
const cityImage = "/images/shanghai-city.jpg";
const clinicStill = "/images/hero.jpg";
const recoveryStill = "/images/recovery.jpg";
const mark = "/images/flora-mark.png";
const clinicMediaStrip = [
  "/images/doctors/doctor_zhang_yalun__face-crop.jpg",
  "/images/doctors/doctor_si_yang__face-crop.jpg",
  "/images/doctors/doctor_dong_lei__face-crop.jpg",
  "/images/doctors/doctor_wu_baoci__face-crop.jpg",
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
    if (status === "pending_verification") return "⏱";
    if (status === "hospital_reported") return "◐";
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
  const [formFocused, setFormFocused] = useState(false);
  const [location] = useLocation();
  const { locale, setLocale, t, footerLabel } = useLocale();
  const whatsapp = contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : "";
  const mobileNav = [["Why Shanghai","/why-shanghai"],["Surgeons","/surgeons"],["Procedures","/procedures"],["Journey","/patient-journey"],["Consultation","/consultation"]] as const;

  useEffect(() => {
    const focusIn = (event: FocusEvent) => setFormFocused(Boolean((event.target as HTMLElement)?.closest?.(".consultation-form")));
    const focusOut = () => window.setTimeout(() => setFormFocused(Boolean((document.activeElement as HTMLElement)?.closest?.(".consultation-form"))), 0);
    document.addEventListener("focusin", focusIn); document.addEventListener("focusout", focusOut);
    return () => { document.removeEventListener("focusin", focusIn); document.removeEventListener("focusout", focusOut); };
  }, []);

  return <div className="site-shell">
    <header className={`site-header ${location !== "/" ? "header-paper" : ""}`}>
      <Link href="/" className="brand" onClick={() => setOpen(false)}><Mark /><span><b>Flora</b><em>{t.brandSubtitle}</em></span></Link>
      <nav className="desktop-nav">{navItems.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""}>{t.nav[href] ?? label}</Link>)}</nav>
      <div className="lang-toggle" role="group" aria-label={t.langAria}><button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>{t.langEn}</button><span aria-hidden="true">|</span><button type="button" className={locale === "zh" ? "active" : ""} onClick={() => setLocale("zh")}>{t.langZh}</button></div>
      <Link href="/consultation" className="mobile-consult-link" onClick={() => { setOpen(false); track("start_consultation"); }}>{locale === "zh" ? "咨询" : "Consult"}</Link>
      <ButtonLink href="/consultation" onClick={() => track("start_consultation")}>{t.privateConsultation}</ButtonLink>
      <button className="menu-trigger" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </header>
    {open && <div className="mobile-menu">{mobileNav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{locale === "zh" ? (t.nav[href] ?? (href === "/consultation" ? "私人咨询" : label)) : label}<ArrowUpRight size={14} /></Link>)}<div className="lang-toggle mobile" role="group" aria-label={t.langAria}><button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>{t.langEn}</button><span>|</span><button type="button" className={locale === "zh" ? "active" : ""} onClick={() => setLocale("zh")}>{t.langZh}</button></div></div>}
    <main>{children}</main>
    <div className={`mobile-action-bar ${formFocused ? "hidden" : ""}`}>
      {whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp")}><MessageCircle size={17} />WhatsApp</a>}
      <Link href="/consultation" onClick={() => track("start_consultation")}>{t.startConsultation}</Link>
    </div>
    <FloatingContactButtons />
    <footer className="footer">
      <div className="footer-brand"><Mark small /><div><div className="footer-title">{t.footerTitle}</div><p>{t.footerBlurb.split("\n").map((line, i) => <span key={i}>{i > 0 ? <br /> : null}{line}</span>)}</p></div></div>
      <div className="footer-col"><span>{t.footerContact}</span>{whatsapp ? <a href={whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsappLabel}<br />{contact.whatsapp}</a> : null}</div>
      <div className="footer-col"><span>{t.footerInformation}</span>{footerLinks.map(([label, href]) => <Link key={href} href={href}>{footerLabel(href, label)}</Link>)}</div>
      <div className="footer-note">Still You.<br /><i>Just Refined.</i><small>© 2026 Flora Shanghai Aesthetics</small></div>
    </footer>
  </div>;
}

function InteriorHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) { return <section className="interior-hero"><div className="hero-spine"><b>FLORA</b><span>MERIDIAN<br />{eyebrow.split(" ")[0]}</span></div><div className="container-narrow"><div className="meridian-rule"><span>{eyebrow.split(" ")[0]}</span><i /></div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="interior-intro">{intro}</p></div></section>; }
function Chapter({ index, eyebrow, title, children, dark = false }: { index: string; eyebrow: string; title: string; children?: React.ReactNode; dark?: boolean }) { return <div className={`chapter ${dark ? "chapter-dark" : ""}`}><div className="chapter-index"><span>{index}</span><small>{eyebrow}</small></div><h2>{title}</h2>{children && <div className="chapter-copy">{children}</div>}</div>; }

function Home() {
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const whatsapp = contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : "";
  const corridors = landingPages.filter((p) => ["rhinoplasty-malaysia","eyelid-sea","rhinoplasty-indonesia","revision-rhinoplasty"].includes(p.slug));
  usePageSeo("Shanghai Plastic Surgery for International Patients | Flora", "Flora Shanghai Aesthetics offers a considered international patient pathway for plastic surgery in Shanghai.", "/", { "@context": "https://schema.org", "@type": "MedicalOrganization", name: siteCopy.brand });
  const toggleVideo = () => { const video=videoRef.current; if(!video) return; if(video.paused){ video.play(); setPaused(false); } else { video.pause(); setPaused(true); } };
  return <>
    <section className="hero hero-mobile-first">
      <video ref={videoRef} autoPlay muted loop playsInline poster={heroImage} className="hero-video"><source src={heroVideo} type="video/mp4" /></video>
      <div className="hero-wash" />
      <button className="hero-pause" type="button" onClick={toggleVideo} aria-label={paused ? "Play background video" : "Pause background video"}>{paused ? <Play size={15}/> : <Pause size={15}/>}</button>
      <div className="hero-copy"><p className="eyebrow light">{t.heroEyebrow}</p><h1>Still You.<br /><i>Just Refined.</i></h1><p>{t.heroLead}</p><div className="hero-actions"><ButtonLink href="/consultation" dark onClick={() => track("start_consultation")}>{t.privateConsultation}</ButtonLink><ButtonLink href="/surgeons">{t.exploreSurgeons}</ButtonLink></div></div>
    </section>
    <section className="home-proof-strip compact" aria-label="Flora international patient pathway">
      <div><b>Remote first</b><small>Begin privately before planning travel.</small></div>
      <div><b>Surgeon context</b><small>Review focus areas and verification status.</small></div>
      <div><b>Shanghai pathway</b><small>Plan the visit only when it makes sense.</small></div>
    </section>
    <section className="home-corridors"><div className="home-section-head"><h2>Start with your context.</h2><Link href="/why-shanghai">Why Shanghai <ArrowUpRight size={14}/></Link></div><div className="corridor-snap">{corridors.map((p)=><Link href={`/lp/${p.slug}`} className="corridor-card" key={p.slug}><span>{p.eyebrow}</span><h3>{p.title}</h3><p>{p.intro}</p><b>Explore pathway <ArrowUpRight size={14}/></b></Link>)}</div></section>
    <section className="surgeon-section home-compact-section"><div className="home-section-head"><div><h2>{t.surgeonsTitle}</h2><p>{t.surgeonsLead}</p></div><ButtonLink href="/surgeons">{t.viewAllSurgeons}</ButtonLink></div><div className="doctor-grid doctor-grid-home">{publishableDoctors.slice(0,3).map((d)=><DoctorCard key={d.id} doctor={d}/>)}</div></section>
    <section className="procedures-section home-compact-section"><div className="home-section-head"><div><h2>Featured Procedures</h2><p>Explore the basics before a personal consultation.</p></div><Link href="/procedures">View all <ArrowUpRight size={14}/></Link></div><div className="procedure-grid home-procedure-grid">{procedures.slice(0,4).map((p)=><Link href={`/procedures/${p.slug}`} className="procedure-card" key={p.slug}><img src={p.image} alt="" loading="lazy"/><div className="procedure-overlay"><h3>{p.name}</h3><ArrowUpRight size={18}/></div></Link>)}</div></section>
    <section className="home-verification-line"><span>Surgeon information is labelled by verification status.</span><Link href="/surgeon-verification">How verification works <ArrowUpRight size={14}/></Link></section>
    <section className="consult-banner home-final-cta"><h2>Begin with<br/><i>a conversation.</i></h2><div><ButtonLink href="/consultation" dark>{t.privateConsultation}</ButtonLink>{whatsapp && <a className="qm-button" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp")}>WhatsApp <ArrowUpRight size={15}/></a>}</div><p><Link href="/patient-journey">Patient journey</Link> · <Link href="/why-shanghai">Why Shanghai</Link></p></section>
  </>;
}


function WhyShanghai() { usePageSeo("Why Shanghai Plastic Surgery | Flora Shanghai Aesthetics", "Understand the international patient context for considering plastic surgery in Shanghai.", "/why-shanghai"); return <><InteriorHero eyebrow="01 / The city" title={<>A different<br /><i>perspective.</i></>} intro="Shanghai is not a promise of one perfect outcome. It is a place to consider a broader range of aesthetic perspectives, clinical conversations, and care pathways." /><section className="article-split"><div className="article-image" style={{ backgroundImage: `url(${cityImage})` }} /><div className="article-text"><p className="eyebrow">Shanghai, in context</p><h2>International by nature.</h2><p>Shanghai connects people, languages, and ideas across Asia and beyond. For international patients, that context can make the process more legible: from remote consultation and translation to travel planning and follow-up.</p><p>Different strengths. Different aesthetic perspectives. The right decision begins with knowing what you are comparing.</p></div></section><section className="article-split article-split-reverse"><div className="article-image" style={{ backgroundImage: `url(${clinicStill})` }} /><div className="article-text"><p className="eyebrow">Flora surgeons</p><h2>Our own clinical team.</h2><p>Profiles on this site use Flora\'s own doctor photographs — not stock faces. Credentials stay verification-honest until independently confirmed.</p><ButtonLink href="/surgeons">Meet the surgeons</ButtonLink></div></section><div className="clinic-media-strip clinic-media-strip-page" aria-label="Flora surgeons">{clinicMediaStrip.slice(0,4).map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><section className="paper-grid">{[["Aesthetic diversity", "Asian aesthetics are not a single visual language."], ["Personalized philosophy", "A thoughtful plan starts with the individual, not a template."], ["International support", "Practical care matters before, during, and after a visit."]].map(([t,d]) => <div key={t}><span>-</span><h3>{t}</h3><p>{d}</p></div>)}</section><MarketContext /><section className="cta-strip"><h2>Explore the pathway<br /><i>with context.</i></h2><ButtonLink href="/consultation">Private Consultation</ButtonLink></section></>; }
function Surgeons() { usePageSeo("Plastic Surgeons in Shanghai | Flora", "A verification-ready directory of surgeon profiles for international patients.", "/surgeons"); return <><InteriorHero eyebrow="Shanghai Medical Aesthetics" title={<>Meet the<br /><i>surgeons.</i></>} intro="Clean international profiles for overseas patients. Every factual claim carries a verification status — credentials are never invented." /><section className="listing-section"><div className="listing-note">{publishableDoctors.length} profiles / Shanghai medical aesthetics <span>Credentials are not claims until sourced</span></div><div className="doctor-grid doctor-grid-large">{publishableDoctors.map((d) => <DoctorCard doctor={d} key={d.id} />)}</div></section></>; }
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
function ProcedureDetail() { const [, params] = useRoute("/procedures/:slug"); const p = params ? procedureBySlug(params.slug) : undefined; if (!p) return <SimplePage title="Procedure unavailable" eyebrow="Procedure guide">This procedure is not in the current directory.</SimplePage>; usePageSeo(p.seo.title, p.seo.description, `/procedures/${p.slug}`, { "@context": "https://schema.org", "@type": "MedicalWebPage", name: p.name, description: p.seo.description }); track("view_procedure", { procedure: p.slug }); return <><InteriorHero eyebrow={`Procedure guide / ${p.category}`} title={<>{p.name}<br /><i>in context.</i></>} intro={p.overview} /><section className="procedure-hero-media"><img src={p.image} alt="" loading="lazy" /><img src={clinicStill} alt="" loading="lazy" /><img src="/images/doctors/doctor_zhang_yalun__face-crop.jpg" alt="" loading="lazy" /></section><section className="guide-layout"><aside><span>On this page</span><a href="#consider">Who may consider it</a><a href="#process">Consultation evaluates</a><a href="#planning">Planning</a><a href="#recovery">Recovery</a><a href="#risks">Risks & questions</a></aside><article><h2 id="consider">Who may consider a conversation.</h2>{p.whoMayConsider.map((text) => <p key={text}>{text}</p>)}<div className="info-callout"><b>Medical boundary</b><p>{siteCopy.medicalBoundary}</p></div><h3 id="process">Consultation evaluates</h3>{p.consultationEvaluates.map((text) => <p key={text}>{text}</p>)}<h3 id="planning">Planning</h3>{p.planning.map((text) => <p key={text}>{text}</p>)}<h3 id="recovery">Recovery</h3>{p.recovery.map((text) => <p key={text}>{text}</p>)}<h3 id="risks">Risks & questions</h3>{p.risks.map((text) => <p key={text}>{text}</p>)}<div className="credential-box"><span>Pricing</span><strong>{p.pricing.mode === "consultation_only" ? "Consultation only / not published" : p.pricing.mode}</strong><p>{p.pricing.disclaimer}</p></div><ButtonLink href="/consultation">Discuss your questions</ButtonLink></article></section></>; }
function Cases() { usePageSeo("Plastic Surgery Cases | Flora Shanghai Aesthetics", "Consent-gated case architecture for approved patient journeys.", "/cases"); return <><InteriorHero eyebrow="04 / The record" title={<>Patient<br /><i>journeys.</i></>} intro="Case media belongs to the people represented in it. Only approved, verified cases with website permission can appear in the production directory." /><section className="case-list">{publishableCases.length === 0 ? <div className="cases-pending-fill"><div className="demo-banner"><Seal>CONSENT REQUIRED</Seal> No patient before/after is published yet. Until written consent is approved, this page shows Flora clinic and surgeon context only — never invented outcomes.</div><div className="clinic-media-strip clinic-media-strip-page" aria-label="Flora clinic context">{clinicMediaStrip.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><p className="cases-pending-note">No patient case media is published until the required consent and review are complete.</p></div> : publishableCases.map((c) => <Link href={`/cases/${c.slug}`} className="case-row" key={c.id}><div className="case-pair"><Placeholder label="Before" /><Placeholder label="After" /></div><div className="case-copy"><p className="eyebrow">Approved case</p><h2>{c.title}</h2><span className="text-link">View full case <ArrowUpRight size={15} /></span></div></Link>)}</section></>; }
function CaseDetail() { const [, params] = useRoute("/cases/:slug"); const c = params ? caseBySlug(params.slug) : undefined; if (!c || !publishableCases.some((item) => item.slug === c.slug)) return <SimplePage title="Case not published" eyebrow="Consent gate">This case is held from production until consent, channel scope, and verification requirements are satisfied.</SimplePage>; usePageSeo(c.seo.title, c.seo.description, `/cases/${c.slug}`); track("view_case", { case: c.slug }); return <><InteriorHero eyebrow="Case detail / approved" title={<>{c.title}<br /><i>in context.</i></>} intro={c.seo.description} /><section className="guide-layout"><article><div className="case-pair"><Placeholder label="Before / approved media" /><Placeholder label="After / approved media" /></div><h2>Recovery timeline</h2>{c.recoveryTimeline.map((step) => <p key={step.label}><strong>{step.label}</strong> - {step.detail}</p>)}<div className="info-callout"><b>Media scope</b><p>{c.mediaUsageScope}</p></div></article></section></>; }
function Verification() { usePageSeo("Surgeon Verification in China | Flora", "A transparent framework for checking source, date, institution, and context behind surgeon profile information.", "/surgeon-verification"); return <><InteriorHero eyebrow="05 / The standard" title={<>Verify before<br /><i>you decide.</i></>} intro="We don't ask you to trust a marketing claim. We show you what can be verified." /><section className="verification-layout"><div><Seal /><p className="eyebrow">A transparent framework</p><h2>Evidence should<br /><i>be findable.</i></h2><p>Each factual statement can carry a source name, URL, verification date, and note. Pending information is labelled rather than presented as fact.</p><ButtonLink href="/consultation">Ask a question</ButtonLink></div><div className="verification-list">{["Source name", "Source URL", "Verification date", "Context note"].map((x,i) => <div key={x}><span>0{i+1}</span><b>{x}</b><Check size={16} /></div>)}</div></section><section className="verification-note"><p className="eyebrow">Before publication</p><h2>Every profile needs<br /><i>documentation.</i></h2><p>Physician schema is only enabled for verified records. Placeholder credentials, titles, institutions, patents, publications, and surgical volume are never inferred or generated.</p></section></>; }
function Journey() { usePageSeo("International Patient Journey | Flora Shanghai Aesthetics", "A structured international patient journey from inquiry to remote follow-up in Shanghai.", "/patient-journey"); track("view_patient_journey"); return <><InteriorHero eyebrow="06 / The pathway" title={<>Your journey<br /><i>in Shanghai.</i></>} intro="A clear sequence makes an international care experience easier to understand. Each step can pause for questions, review, and informed consent." /><div className="clinic-media-strip clinic-media-strip-page" aria-label="Flora surgeons and Shanghai">{clinicMediaStrip.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}</div><section className="timeline">{journey.map((step) => <div key={step.id} className="timeline-item"><span>{String(step.step).padStart(2,"0")}</span><div><h2>{step.title}</h2><p>{step.description}</p><div className="journey-services"><span className="service-label">Included Services</span><ul>{step.services.map((service) => <li key={service}><Check size={14} /> {service}</li>)}</ul></div><small><b>Responsible:</b> {step.responsibleParty} · <b>Timing:</b> {step.estimatedTiming}</small><p className="medical-boundary">{step.medicalBoundary}</p></div></div>)}</section><section className="journey-city" style={{ backgroundImage: `url(${cityImage})` }}><div><p className="eyebrow light">A city between appointments</p><h2>Make room for<br /><i>the whole trip.</i></h2></div></section><section className="cta-strip"><h2>Ready for the<br /><i>first conversation?</i></h2><ButtonLink href="/consultation" onClick={() => track("start_consultation")}>Start Private Inquiry</ButtonLink></section></>; }

function Consultation() {
  const { locale } = useLocale();
  const [sent,setSent]=useState(false), [error,setError]=useState(""), [more,setMore]=useState(false);
  const [form,setForm]=useState({fullName:"",country:"",age:"",email:"",whatsapp:"",preferredLanguage:"English",procedureSlug:"rhinoplasty",mainConcern:"",previousProcedures:"",preferredAesthetic:"",estimatedBudget:"",expectedTravelDate:"",canTravelToShanghai:true,consent:false});
  const mutation=trpc.consultation.submit.useMutation(); const attribution=useMemo(()=>getAttribution(),[]);
  useEffect(()=>{track("start_consultation")},[]);
  const update=(key:string,value:string|boolean)=>setForm(current=>({...current,[key]:value}));
  const submit=async(event:React.FormEvent)=>{event.preventDefault();setError("");if(!form.email.trim()&&!form.whatsapp.trim()){setError(locale==="zh"?"请填写邮箱或 WhatsApp 至少一项。":"Please provide either email or WhatsApp.");return;}try{const payload={...form,age:form.age?Number(form.age):null,consent:true as const,attribution,honeypot:"",photoNames:[]} as import("../../shared/lead").ConsultationPayload;const result=await mutation.mutateAsync(payload);setSent(true);track("submit_consultation",{mode:result.mode})}catch(err){setError(err instanceof Error?err.message:"We could not receive this inquiry. Please try again.")}};
  usePageSeo("Private Consultation | Flora Shanghai Aesthetics","Submit an international patient inquiry for a considered first conversation about plastic surgery in Shanghai.","/consultation");
  return <><InteriorHero eyebrow={locale==="zh"?"开始咨询":"Start here"} title={locale==="zh"?<>私人<br/><i>咨询。</i></>:<>A private<br/><i>conversation.</i></>} intro={locale==="zh"?"告诉我们你正在考虑什么，我们会回复合适的下一步。":"Share what you are considering. Our team can review the context and outline the next appropriate step."}/>
  <section className="form-wrap consultation-wrap">{sent?<div className="success-state"><Check size={28}/><p className="eyebrow">{locale==="zh"?"已收到咨询":"Inquiry received"}</p><h2>{locale==="zh"?"我们会按你留下的方式回复。":"Your questions are noted."}</h2><p>{mutation.data?.message}</p><ButtonLink href="/">Return home</ButtonLink></div>:
  <form className="consultation-form" onSubmit={submit}><div className="form-heading"><h2>{locale==="zh"?"从这里开始":"Tell us where to begin."}</h2><p className="reply-expectation">{locale==="zh"?"我们通常在 24–48 小时内回复。远程沟通不能替代面对面的医疗评估。":"We aim to reply within 24–48 hours. Remote review does not replace an in-person medical assessment."}</p></div>
  <div className="form-grid">
    <label>{locale==="zh"?"姓名":"Name"}<input name="name" autoComplete="name" required value={form.fullName} onChange={e=>update("fullName",e.target.value)}/></label>
    <label>{locale==="zh"?"国家/地区":"Country"}<input name="country" autoComplete="country-name" required value={form.country} onChange={e=>update("country",e.target.value)}/></label>
    <label>{locale==="zh"?"邮箱":"Email"}<input name="email" type="email" autoComplete="email" value={form.email} onChange={e=>update("email",e.target.value)}/></label>
    <label>WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" value={form.whatsapp} onChange={e=>update("whatsapp",e.target.value)}/></label>
    <label>{locale==="zh"?"咨询项目":"Procedure"}<select name="procedure" required value={form.procedureSlug} onChange={e=>update("procedureSlug",e.target.value)}>{procedures.map(p=><option key={p.slug} value={p.slug}>{p.name}</option>)}</select></label>
    <label>{locale==="zh"?"主要关注点":"What would you like to discuss?"}<textarea name="concern" rows={4} required minLength={10} value={form.mainConcern} onChange={e=>update("mainConcern",e.target.value)}/></label>
  </div>
  <button className="more-detail-toggle" type="button" aria-expanded={more} onClick={()=>setMore(!more)}>{locale==="zh"?"更多信息（可选）":"More detail (optional)"} <ChevronDown size={16}/></button>
  {more&&<div className="form-grid optional-detail">
    <label>{locale==="zh"?"年龄":"Age"}<input name="age" type="number" autoComplete="off" min="18" max="100" value={form.age} onChange={e=>update("age",e.target.value)}/></label>
    <label>{locale==="zh"?"预计到沪日期":"Travel date"}<input name="travelDate" type="date" autoComplete="off" value={form.expectedTravelDate} onChange={e=>update("expectedTravelDate",e.target.value)}/></label>
    <label>{locale==="zh"?"预算":"Budget"}<input name="budget" autoComplete="off" value={form.estimatedBudget} onChange={e=>update("estimatedBudget",e.target.value)}/></label>
    <label>{locale==="zh"?"既往项目/手术":"Previous procedures"}<textarea name="previousProcedures" rows={3} value={form.previousProcedures} onChange={e=>update("previousProcedures",e.target.value)}/></label>
  </div>}
  <p className="photo-followup">{locale==="zh"?"如需照片，可在我们回复后通过 WhatsApp 发送。":"If photos are useful, you can send them on WhatsApp after we reply."}</p>
  <label className="consent"><input name="consent" type="checkbox" required checked={form.consent} onChange={e=>update("consent",e.target.checked)}/><span>{locale==="zh"?"我理解此咨询不构成医疗建议，并同意团队查看这些信息用于初步沟通。":"I understand this inquiry is not medical advice and agree that the team may review this information for a preliminary consultation."}</span></label>
  {error&&<p className="form-error" role="alert">{error}</p>}<button className="qm-button qm-button-dark consultation-submit" type="submit" disabled={mutation.isPending}>{mutation.isPending?(locale==="zh"?"发送中…":"Sending…"):(locale==="zh"?"提交咨询":"Submit consultation")} <ArrowUpRight size={15}/></button>
  </form>}</section></>;
}

function LandingPage({ slug }: { slug: string }) { const page = landingPages.find((item) => item.slug === slug); if (!page) return <SimplePage title="Landing page unavailable" eyebrow="Channel entry">This campaign landing page has not been configured.</SimplePage>; usePageSeo(`${page.title} | Flora Shanghai Aesthetics`, page.intro, `/lp/${page.slug}`); return <LandingExperience slug={slug} />; }
function SimplePage({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) { usePageSeo(`${title} | Flora Shanghai Aesthetics`, `${title}. Draft content requiring professional review before production.`, `/${title.toLowerCase().replaceAll(" ", "-")}`); return <><InteriorHero eyebrow={eyebrow} title={<>{title}<br /><i>in plain language.</i></>} intro="DRAFT - REQUIRES LEGAL REVIEW BEFORE PRODUCTION." /><section className="simple-copy"><p>{children}</p>{!legalReviewed && <div className="info-callout"><b>DRAFT - REQUIRES LEGAL REVIEW BEFORE PRODUCTION</b><p>This page is a structural placeholder. Confirm applicable privacy, consent, data processing, and medical advertising requirements before launch.</p></div>}</section></>; }
function AppRoutes() { return <Switch><Route path="/" component={Home} /><Route path="/admin/contact-buttons" component={AdminContactButtons} /><Route path="/why-shanghai" component={WhyShanghai} /><Route path="/surgeons" component={Surgeons} /><Route path="/surgeons/:slug" component={DoctorDetail} /><Route path="/procedures" component={Procedures} /><Route path="/procedures/:slug" component={ProcedureDetail} /><Route path="/cases" component={Cases} /><Route path="/cases/:slug" component={CaseDetail} /><Route path="/surgeon-verification" component={Verification} /><Route path="/patient-journey" component={Journey} /><Route path="/consultation" component={Consultation} /><Route path="/lp/:slug">{(params) => <LandingPage slug={params.slug} />}</Route><Route path="/privacy"><SimplePage title="Privacy Policy" eyebrow="Information">Describe collection, use, storage, retention, international transfer, rights, and clinic contact details after legal review.</SimplePage></Route><Route path="/medical-disclaimer"><SimplePage title="Medical Disclaimer" eyebrow="Information">This website provides general educational information only. It does not provide medical advice, diagnosis, or a guarantee of results.</SimplePage></Route><Route path="/terms"><SimplePage title="Terms of Use" eyebrow="Information">Add reviewed terms governing website use, third-party links, limitations, and applicable law.</SimplePage></Route><Route path="/patient-media-consent"><SimplePage title="Patient Media Consent" eyebrow="Information">Add the approved consent language, channels, expiry, withdrawal, and deletion process for patient media.</SimplePage></Route><Route path="/data-processing-notice"><SimplePage title="Data Processing Notice" eyebrow="Information">Add a reviewed notice describing sensitive information, processors, retention, access controls, and deletion requests.</SimplePage></Route><Route><SimplePage title="Page not found" eyebrow="404">The page you are looking for is not part of this release.</SimplePage></Route></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><LocaleProvider><SiteShell><AppRoutes /></SiteShell><Toaster /></LocaleProvider></ThemeProvider></ErrorBoundary>; }
