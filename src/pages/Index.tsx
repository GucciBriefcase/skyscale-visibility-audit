import React, { useState, useEffect } from "react";
import { Check, X, Send, Search, FileText, ChevronDown, Lock, Star, Shield, Clock, Eye, Target, AlertTriangle, ClipboardList } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import StickyCtaBar from "@/components/StickyCtaBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIResponseMockup from "@/components/AIResponseMockup";
import sampleAuditImg from "@/assets/sample-audit-preview.jpg";

/* ── URL context ─────────────────────────── */
const URLContext = React.createContext<{ url: string; setUrl: (v: string) => void }>({ url: "", setUrl: () => {} });

/* ── Shared helpers ─────────────────────────── */

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="section-label inline-block mb-4">
    {children}
  </span>
);

const TealCheck = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
    <Check size={12} className="text-primary" />
  </span>
);

const RedX = () => (
  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
    <X size={12} className="text-destructive/60" />
  </span>
);

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={20} className="text-primary fill-primary" />
    ))}
  </div>
);

const CardWrap: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-card border border-border rounded-xl card-hover-glow ${className}`}>
    {children}
  </div>
);

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}> = ({ children, className = "", id, alt }) => (
  <section
    id={id}
    className={`py-24 md:py-32 noise-overlay ${alt ? "bg-surface" : "bg-background"} ${className}`}
  >
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

/* ── Trust microcopy ────────────────────────── */
const TrustLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <p className={`text-muted-foreground text-xs text-center ${className}`}>
    Free audit · Manually reviewed · No credit card required
  </p>
);

/* ── Testimonials ───────────────────────────── */
const testimonials = [
  {
    quote: "The audit revealed blind spots we had no idea existed. Within weeks of implementing the recommendations, our brand started appearing in AI-generated answers for the first time.",
    name: "Sarah Chen",
    title: "Head of Growth",
    company: "TechFlow",
    highlight: "our brand started appearing in AI-generated answers for the first time",
  },
  {
    quote: "No fluff, no upsell — just a brutally honest assessment of where we stood. It changed how we think about online visibility entirely.",
    name: "Marcus Webb",
    title: "Founder & CEO",
    company: "Meridian Advisory",
    highlight: "It changed how we think about online visibility entirely",
  },
];

/* ── Scroll helper ──────────────────────────── */
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

/* ── Standardized CTA button classes ────────── */
const ctaGlow = "shadow-[0_0_20px_hsl(174_100%_42%/0.3)]";

/* ── Mid-page CTA ───────────────────────────── */
const MidPageCTA: React.FC = () => {
  const { url, setUrl } = React.useContext(URLContext);
  return (
    <div className="max-w-xl mx-auto mt-16 mb-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          placeholder="Enter your website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-[1.8] min-w-0 bg-white/[0.06] border border-white/[0.10] rounded-full px-6 py-3.5 h-12 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
        <CTAButton size="md" className={`h-12 px-8 ${ctaGlow}`} onClick={() => scrollTo("audit-form")}>
          Get My Free Audit
        </CTAButton>
      </div>
      <TrustLine className="mt-3" />
    </div>
  );
};

/* ── Report modules data ────────────────────── */
const reportModules = [
  {
    icon: <Shield size={18} className="text-primary" />,
    title: "Eligibility Overview",
    desc: "Whether your site qualifies for AI visibility",
  },
  {
    icon: <Eye size={18} className="text-primary" />,
    title: "Visibility Score",
    desc: "How your brand currently appears across AI platforms",
  },
  {
    icon: <Target size={18} className="text-primary" />,
    title: "Competitor Comparison",
    desc: "Who's being cited instead of you",
  },
  {
    icon: <AlertTriangle size={18} className="text-primary" />,
    title: "Citation Gaps",
    desc: "What's missing from your content and structure",
  },
  {
    icon: <ClipboardList size={18} className="text-primary" />,
    title: "Action Plan",
    desc: "Prioritised fixes to improve your AI presence",
  },
];

/* ── Bottom CTA Form ────────────────────────── */
const BottomForm: React.FC = () => {
  const { url } = React.useContext(URLContext);
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

  // Sync URL from context into form
  useEffect(() => {
    if (url && !form.website) {
      setForm((f) => ({ ...f, website: url }));
    }
  }, [url]);

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const inputCls =
    "w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 h-12 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition";
  const labelCls = "block text-sm font-medium text-muted-foreground mb-1.5";

  if (submitted) {
    return (
      <CardWrap className="rounded-2xl p-8 md:p-10 text-center">
        <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
          <Check size={48} className="text-primary mb-4" />
          <p className="text-foreground font-bold text-xl mb-2">Thank you!</p>
          <p className="text-muted-foreground text-sm">
            Your submission has been received. We'll review it and be in touch within 48 hours.
          </p>
        </div>
      </CardWrap>
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
    <CardWrap className="rounded-2xl p-8 md:p-10">
      <h3 className="text-foreground font-bold text-xl mb-1">Request Your Free Audit</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Manually reviewed by our team · Results within 48 hours
      </p>

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
        <CTAButton size="lg" className={`w-full h-12 ${ctaGlow}`} onClick={() => { console.log("Form submitted:", form); setSubmitted(true); }}>
          Get My Free Audit
        </CTAButton>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4 text-muted-foreground">
        <Lock size={12} />
        <span className="text-xs">Your information stays private</span>
      </div>
    </CardWrap>
  );
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

const Index = () => {
  const [sharedUrl, setSharedUrl] = useState("");

  return (
    <URLContext.Provider value={{ url: sharedUrl, setUrl: setSharedUrl }}>
      <div className="bg-background min-h-screen">
        <Header />
        <StickyCtaBar />
        <WhatsAppButton />

        {/* ───── 1. HERO ───── */}
        <Section id="hero" className="pt-28 md:pt-36 pb-24 md:pb-32">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-10">
              <Pill>FREE AI VISIBILITY AUDIT</Pill>
              <h1 className="text-foreground font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.12] mb-6 max-w-3xl mx-auto">
                See whether your brand is eligible to appear in <span className="text-primary">AI&#8209;generated</span> answers
              </h1>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                A free, human-reviewed assessment of your brand's visibility across search and AI.
              </p>
            </div>
          </ScrollReveal>

          {/* Trust stats */}
          <ScrollReveal>
            <CardWrap className="max-w-lg mx-auto mb-8 p-8">
              <div className="flex items-center justify-around">
                {[
                  { val: "2,400+", label: "Audits completed" },
                  { val: "48hr", label: "Turnaround" },
                  { val: "$0", label: "No credit card" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-primary font-extrabold text-3xl md:text-4xl leading-normal">{s.val}</p>
                    <p className="text-muted-foreground text-sm mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </CardWrap>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-muted-foreground text-sm text-center mb-10">
              Trusted by growing businesses · Reviewed manually by our team · Based in Australia
            </p>
          </ScrollReveal>

          {/* Hero CTA — URL input */}
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  placeholder="Enter your website URL"
                  value={sharedUrl}
                  onChange={(e) => setSharedUrl(e.target.value)}
                  className="flex-[1.8] min-w-0 bg-white/[0.07] border border-white/[0.12] rounded-full px-6 py-3.5 h-12 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition"
                />
                <CTAButton size="lg" className={`flex-1 h-12 px-8 ${ctaGlow}`} onClick={() => scrollTo("audit-form")}>
                  Get My Free Audit
                </CTAButton>
              </div>
              <p className="text-muted-foreground text-xs text-center mt-3">
                No obligation · No credit card · Results within 48 hours
              </p>
            </div>
          </ScrollReveal>
        </Section>

        {/* ───── 2. PROBLEM ───── */}
        <Section id="invisible" alt>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <AIResponseMockup />
            </ScrollReveal>
            <ScrollReveal>
              <Pill>THE PROBLEM</Pill>
              <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4">
                Most businesses are <span className="text-primary">invisible</span> in AI answers
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                AI doesn't rank the way search engines do. It synthesises answers from sources it considers clear, credible, and consistent.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                If your brand isn't structured in a way that AI systems can confidently extract and reference, you won't be included — no matter how good your product or service is.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                This isn't a penalty. It's silent exclusion. And most businesses don't even realise it's happening.
              </p>
            </ScrollReveal>
          </div>
        </Section>

        {/* ───── 3. HOW IT WORKS ───── */}
        <Section id="how-it-works">
          <ScrollReveal>
            <div className="text-center mb-14">
              <Pill>HOW IT WORKS</Pill>
              <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4">
                Three <span className="text-primary">simple</span> steps to your audit
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Three simple steps to understanding your AI visibility.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                icon: <Send size={24} className="text-primary" />,
                title: "Submit your website",
                desc: "Fill out the short form with your website and a few details about your business.",
              },
              {
                num: "02",
                icon: <Search size={24} className="text-primary" />,
                title: "We review manually",
                desc: "Senior consultants assess your eligibility using our Search + AI visibility framework.",
              },
              {
                num: "03",
                icon: <FileText size={24} className="text-primary" />,
                title: "Receive your assessment",
                desc: "An honest, prioritised report of what's blocking visibility and what needs attention.",
              },
            ].map((s) => (
              <ScrollReveal key={s.num}>
                <CardWrap className="p-8 h-full min-h-[240px] flex flex-col items-start justify-start relative">
                  <span className="absolute top-4 right-4 text-xs font-bold text-primary/30">{s.num}</span>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-3 text-left">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-left">{s.desc}</p>
                </CardWrap>
              </ScrollReveal>
            ))}
          </div>

          {/* Mid-page CTA */}
          <MidPageCTA />
        </Section>

        {/* ───── 4. WHAT YOU'LL RECEIVE ───── */}
        <Section alt className="border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-14">
              <Pill>YOUR REPORT</Pill>
              <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4">
                Here's what you'll <span className="text-primary">receive</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <CardWrap className="rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-3">
                  {reportModules.map((mod) => (
                    <div key={mod.title} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                        {mod.icon}
                      </span>
                      <div>
                        <p className="text-foreground font-semibold text-sm mb-0.5">{mod.title}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-muted-foreground text-xs leading-relaxed pt-2">
                    No fluff. No padding. Just a clear, decision-ready assessment.
                  </p>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img src={sampleAuditImg} alt="Sample audit report preview" className="w-full object-cover" />
                </div>
              </div>
            </CardWrap>
          </ScrollReveal>
        </Section>

        {/* ───── 5. WHAT THIS IS / ISN'T ───── */}
        <Section>
          <ScrollReveal>
            <div className="text-center mb-14">
              <Pill>WHAT TO EXPECT</Pill>
              <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4">
                A viability <span className="text-primary">eligibility</span> check — not a marketing report
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                It evaluates whether your site is clear enough to be considered at all.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal>
              <CardWrap className="p-8 h-full">
                <h3 className="text-foreground font-bold text-lg mb-5">What this audit is</h3>
                <ul className="space-y-4">
                  {[
                    "Human-reviewed, no automated tools",
                    "Focused on search + AI answer systems",
                    "Evaluates eligibility, clarity & extractability",
                    "Identifies real blockers, not cosmetic issues",
                    "Honest, prioritised, and decision-ready",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="mt-0.5"><TealCheck /></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </CardWrap>
            </ScrollReveal>
            <ScrollReveal>
              <CardWrap className="p-8 h-full">
                <h3 className="text-foreground font-bold text-lg mb-5">What this audit is not</h3>
                <ul className="space-y-4">
                  {[
                    "No guaranteed rankings or traffic",
                    "No automated SEO reports",
                    "No shortcuts, hacks, or 'AI optimisation' hype",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="mt-0.5"><RedX /></span>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm italic mt-5">
                  This audit assesses eligibility and clarity — not outcomes. If you're looking for promises, this isn't for you.
                </p>
              </CardWrap>
            </ScrollReveal>
          </div>
        </Section>

        {/* ───── 6. TESTIMONIALS ───── */}
        <section className="py-24 md:py-32 noise-overlay bg-testimonials">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-14">
                <Pill>TESTIMONIALS</Pill>
                <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4">
                  What our <span className="text-primary">clients</span> say
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto">
                  Hear from teams who've used the audit to uncover blind spots.
                </p>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <ScrollReveal key={t.name}>
                  <CardWrap className="p-8 h-full flex flex-col">
                    <Stars />
                    <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
                      "{t.quote.split(t.highlight)[0]}
                      <span className="text-foreground font-medium">{t.highlight}</span>
                      {t.quote.split(t.highlight)[1]}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.title}, {t.company}</p>
                      </div>
                    </div>
                  </CardWrap>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── 7. FINAL CTA ───── */}
        <section id="audit-form" className="py-24 md:py-32 bg-cta-gradient noise-overlay">
          <div className="max-w-xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-10">
                <Pill>GET STARTED</Pill>
                <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-4 md:whitespace-nowrap">
                  Ready to check your AI <span className="text-primary">visibility</span>?
                </h2>
                <p className="text-muted-foreground text-base">
                  Limited availability. Each audit is manually reviewed by senior consultants.
                </p>
              </div>
              <BottomForm />
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </URLContext.Provider>
  );
};

export default Index;
