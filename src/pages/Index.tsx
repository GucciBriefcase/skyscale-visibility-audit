import React, { useState } from "react";
import { Check, X, Quote, FileText, ClipboardCheck, Send, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import sampleAuditImg from "@/assets/sample-audit-preview.jpg";
import invisibleImg from "@/assets/invisible-section.jpg";

/* ── Shared helpers ─────────────────────────── */

const TealCheck = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
    <Check size={12} className="text-primary" />
  </span>
);

const RedX = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
    <X size={12} className="text-destructive" />
  </span>
);

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
  bg?: string;
}> = ({ children, className = "", id, alt, bg }) => (
  <section
    id={id}
    className={`py-24 md:py-32 noise-overlay ${bg ? bg : alt ? "bg-alt" : "bg-background"} ${className}`}
  >
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const SectionDivider = () => <hr className="border-t section-divider max-w-6xl mx-auto" />;

/* ── Logo bar placeholder logos ─────────────── */
const logos = ["Canva", "Xero", "Atlassian", "Culture Amp", "SafetyCulture"];

/* ── Testimonials ───────────────────────────── */
const testimonials = [
  {
    quote: "The audit revealed blind spots we had no idea existed. Within weeks of implementing the recommendations, our brand started appearing in AI-generated answers for the first time.",
    name: "Sarah Chen",
    title: "Head of Growth",
    company: "TechFlow",
  },
  {
    quote: "No fluff, no upsell — just a brutally honest assessment of where we stood. It changed how we think about online visibility entirely.",
    name: "Marcus Webb",
    title: "Founder & CEO",
    company: "Meridian Advisory",
  },
];

/* ── Hero URL input ─────────────────────────── */
const HeroForm: React.FC = () => {
  const [url, setUrl] = useState("");
  return (
    <div className="max-w-[550px] mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-card border border-border rounded-full px-5 py-3.5 h-[52px] text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
        <CTAButton size="lg" className="h-[52px] px-8 shadow-[0_0_20px_hsl(170_100%_45%/0.3)]" onClick={() => {
          const el = document.getElementById("audit-form");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}>
          Get My Free Audit →
        </CTAButton>
      </div>
      <p className="text-caption text-xs text-center mt-4">
        No credit card · Delivered in 48 hours · 100% human-reviewed
      </p>
    </div>
  );
};

/* ── Bottom CTA Form ────────────────────────── */
const BottomForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showOptional, setShowOptional] = useState(false);
  const [form, setForm] = useState({
    website: "",
    email: "",
    industry: "",
    fullName: "",
    company: "",
    prompted: "",
  });
  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const inputCls =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition";
  const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

  if (submitted) {
    return (
      <div className="card-premium rounded-2xl p-8 text-center">
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
          <Check size={48} className="text-primary mb-4" />
          <p className="text-foreground font-bold text-xl mb-2">Thank you!</p>
          <p className="text-body text-sm">
            Your submission has been received. We'll review it and be in touch within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  const industries = [
    "SaaS / Technology",
    "Professional Services",
    "E-commerce / Retail",
    "Healthcare",
    "Finance / Fintech",
    "Education",
    "Real Estate",
    "Other",
  ];

  return (
    <div className="card-premium rounded-2xl p-8">
      <h3 className="text-foreground font-bold text-xl mb-1">Request Your Free Audit</h3>
      <p className="text-body text-sm mb-6">Takes ~2 minutes. Each request is manually reviewed.</p>

      <div className="space-y-4">
        <div>
          <label className={labelCls}>Website URL *</label>
          <input className={inputCls} placeholder="https://example.com" value={form.website} onChange={(e) => update("website", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Work Email *</label>
          <input className={inputCls} type="email" placeholder="you@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Industry *</label>
          <div className="relative">
            <select className={`${inputCls} appearance-none pr-10`} value={form.industry} onChange={(e) => update("industry", e.target.value)}>
              <option value="">Select your industry…</option>
              {industries.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Optional fields toggle */}
      <button
        type="button"
        onClick={() => setShowOptional(!showOptional)}
        className="text-primary text-sm font-medium mt-5 hover:underline transition flex items-center gap-1"
      >
        <ChevronDown size={14} className={`transition-transform ${showOptional ? "rotate-180" : ""}`} />
        Optional: Help us personalise your audit
      </button>

      {showOptional && (
        <div className="space-y-4 mt-4 animate-fade-in">
          <div>
            <label className={labelCls}>Full Name</label>
            <input className={inputCls} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Company Name</label>
            <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>What prompted you to request this audit?</label>
            <textarea className={`${inputCls} resize-none`} rows={3} value={form.prompted} onChange={(e) => update("prompted", e.target.value)} />
          </div>
        </div>
      )}

      <div className="mt-6">
        <CTAButton size="lg" className="w-full" onClick={() => { console.log("Form submitted:", form); setSubmitted(true); }}>
          Get My Free Audit →
        </CTAButton>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4 text-muted-foreground">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
        <span className="text-xs">We never store your data</span>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <StickyCtaBar />
      <WhatsAppButton />

      {/* ───── 1. HERO — spacious, focused ───── */}
      <Section id="hero" className="pt-16 md:pt-24 pb-28 md:pb-36">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-5">
              Free AI & Search Visibility Audit
            </p>
            <h1 className="text-foreground font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mb-8">
              See whether your brand is eligible to appear in AI&#8209;generated answers
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto">
              We analyze <span className="text-foreground font-semibold">14 signals</span> AI systems use to decide whether to cite your brand. This audit tells you exactly where you stand.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust stats */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
            {[
              { val: "2,400+", label: "Audits completed" },
              { val: "48hr", label: "Turnaround" },
              { val: "$0", label: "No credit card" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-foreground font-extrabold text-2xl md:text-3xl">{s.val}</p>
                <p className="text-caption text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Logo bar */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-caption text-xs uppercase tracking-wider mb-4 text-center">
              Teams from these companies have run audits
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {logos.map((name) => (
                <span key={name} className="text-muted-foreground/40 font-bold text-lg tracking-wider">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Single-field CTA */}
        <ScrollReveal>
          <HeroForm />
        </ScrollReveal>
      </Section>

      <SectionDivider />

      {/* ───── 2. PROBLEM — slightly lighter bg ───── */}
      <section id="invisible" className="py-24 md:py-32 noise-overlay bg-problem">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img src={invisibleImg} alt="AI visibility data" className="rounded-xl w-full object-cover" />
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-foreground font-bold text-3xl mb-4">
                Most businesses are invisible in AI answers
              </h2>
              <p className="text-body text-base leading-relaxed mb-4">
                AI doesn't rank the way search engines do. It synthesises answers from sources it considers clear, credible, and consistent.
              </p>
              <p className="text-body text-base leading-relaxed mb-4">
                If your brand isn't structured in a way that AI systems can confidently extract and reference, you won't be included — no matter how good your product or service is.
              </p>
              <p className="text-body text-base leading-relaxed">
                This isn't a penalty. It's silent exclusion. And most businesses don't even realise it's happening.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ───── 3. HOW IT WORKS — elevated card container ───── */}
      <Section id="how-it-works">
        <ScrollReveal>
          <h2 className="text-foreground font-bold text-3xl text-center mb-4">
            How it works
          </h2>
          <p className="text-body text-base text-center mb-14 max-w-xl mx-auto">
            Three simple steps to understanding your AI visibility.
          </p>
        </ScrollReveal>
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                icon: <Send size={28} className="text-primary" />,
                title: "You submit your website",
                desc: "Fill out the short form with your website and a few details about your business.",
              },
              {
                num: "02",
                icon: <ClipboardCheck size={28} className="text-primary" />,
                title: "We review it manually",
                desc: "Senior consultants assess your eligibility using our Search + AI visibility framework.",
              },
              {
                num: "03",
                icon: <FileText size={28} className="text-primary" />,
                title: "You receive a clear assessment",
                desc: "An honest, prioritised report of what's blocking visibility and what needs attention.",
              },
            ].map((s) => (
              <ScrollReveal key={s.num}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-5">{s.icon}</div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-primary/40 font-extrabold text-2xl">{s.num}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <p className="text-caption text-sm font-medium text-center mt-10">
          No obligation. No pressure.
        </p>
      </Section>

      <SectionDivider />

      {/* ───── 4. WHAT YOU'LL RECEIVE ───── */}
      <Section alt className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-foreground font-bold text-3xl mb-4">
              Here's what you'll receive
            </h2>
            <ul className="space-y-4 mb-6">
              {[
                "What is blocking eligibility",
                "What is limiting search and AI visibility",
                "What should be fixed, merged, or removed",
                "What matters now versus later",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-body text-base">
                  <TealCheck />
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-body text-base leading-relaxed">
              You will not receive a checklist — only a clear assessment of what's limiting visibility and what actions require a decision. No fluff. No padding.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative">
              <img src={sampleAuditImg} alt="Sample audit report preview" className="rounded-xl w-full object-cover shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 5. WHAT THIS IS / ISN'T ───── */}
      <Section bg="bg-problem">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-foreground font-bold text-3xl mb-4">
              A visibility eligibility check — not a marketing report
            </h2>
            <p className="text-body text-base max-w-2xl mx-auto">
              It evaluates whether your site is clear enough to be considered at all.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="card-premium rounded-xl p-8 h-full border-l-2 border-l-primary">
              <h3 className="text-foreground font-bold text-lg mb-5">What this audit is</h3>
              <ul className="space-y-3">
                {[
                  "Human-reviewed, no automated tools",
                  "Focused on search + AI answer systems",
                  "Evaluates eligibility, clarity & extractability",
                  "Identifies real blockers, not cosmetic issues",
                  "Honest, prioritised, and decision-ready",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm">
                    <TealCheck />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="card-premium rounded-xl p-8 h-full">
              <h3 className="text-foreground font-bold text-lg mb-5">What this audit is not</h3>
              <ul className="space-y-3">
                {[
                  "No guaranteed rankings or traffic",
                  "No automated SEO reports",
                  "No shortcuts, hacks, or 'AI optimisation' hype",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm">
                    <RedX />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-caption text-sm italic mt-5">
                This audit assesses eligibility and clarity — not outcomes. If you're looking for promises, this isn't for you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 6. TESTIMONIALS — stacked, larger quotes ───── */}
      <section className="py-24 md:py-32 noise-overlay bg-testimonials">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-foreground font-bold text-3xl text-center mb-4">
              What our clients say
            </h2>
            <p className="text-body text-base text-center mb-14 max-w-xl mx-auto">
              Hear from teams who've used the audit to uncover blind spots.
            </p>
          </ScrollReveal>
          <div className="space-y-8">
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8 md:p-10 border-l-2 border-l-primary">
                  <Quote size={28} className="text-primary/30 mb-5" />
                  <p className="text-body text-[1.15rem] md:text-xl leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.title}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 7. FINAL CTA with full form ───── */}
      <section id="audit-form" className="py-24 md:py-32 bg-cta-gradient noise-overlay">
        <div className="max-w-xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-3">
                Ready to check your AI visibility?
              </h2>
              <p className="text-body text-base">
                Limited availability. Each audit is manually reviewed by senior consultants.
              </p>
            </div>
            <BottomForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
