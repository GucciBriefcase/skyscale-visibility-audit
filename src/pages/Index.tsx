import React from "react";
import { Check, X, Shield, Zap, Search, Eye, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuditForm from "@/components/AuditForm";
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
}> = ({ children, className = "", id, alt }) => (
  <section
    id={id}
    className={`py-20 md:py-28 noise-overlay ${alt ? "bg-alt" : "bg-background"} ${className}`}
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

/* ── What we check signals ──────────────────── */
const signals = [
  { icon: <Shield size={20} />, label: "Crawl & index health" },
  { icon: <Eye size={20} />, label: "Entity & brand clarity" },
  { icon: <Search size={20} />, label: "Search intent alignment" },
  { icon: <Zap size={20} />, label: "AI citation readiness" },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <StickyCtaBar />
      <WhatsAppButton />

      {/* ───── 1. HERO ───── */}
      <Section id="hero" className="pt-12 md:pt-20">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Free AI & Search Visibility Audit
            </p>
            <h1 className="text-foreground font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] mb-5">
              See whether your brand is eligible to appear in AI&#8209;generated answers
            </h1>
            <p className="text-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              We analyze <span className="text-foreground font-semibold">14 signals</span> AI systems use to decide whether to cite your brand. This audit tells you exactly where you stand.
            </p>

            {/* Logo bar */}
            <div className="mb-8">
              <p className="text-caption text-xs uppercase tracking-wider mb-4">
                Teams from these companies have run audits
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {logos.map((name) => (
                  <span
                    key={name}
                    className="text-muted-foreground/40 font-bold text-lg tracking-wider"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stat counter */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16">
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

        {/* What we check teaser */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {signals.map((s) => (
              <div
                key={s.label}
                className="card-premium rounded-xl p-5 text-center"
              >
                <div className="text-primary mx-auto mb-2">{s.icon}</div>
                <p className="text-body text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Audit form */}
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <AuditForm />
          </ScrollReveal>
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 2. INVISIBLE ───── */}
      <Section id="invisible" alt>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img
              src={invisibleImg}
              alt="AI visibility data"
              className="rounded-xl w-full object-cover"
            />
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-5">
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
      </Section>

      <SectionDivider />

      {/* ───── 3. WHAT THIS IS / ISN'T (consolidated) ───── */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-3">
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
                If you're looking for promises or exploits, this isn't for you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 4. TESTIMONIALS ───── */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-foreground font-bold text-2xl md:text-3xl text-center mb-12">
            What our clients say
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <ScrollReveal key={t.name}>
              <div className="card-premium rounded-xl p-8 border-l-2 border-l-primary h-full flex flex-col">
                <Quote size={24} className="text-primary/30 mb-4" />
                <p className="text-body text-base leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-caption text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 5. SAMPLE AUDIT PREVIEW ───── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-5">
              Here's what you'll receive
            </h2>
            <ul className="space-y-3 mb-6">
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
              <img
                src={sampleAuditImg}
                alt="Sample audit report preview"
                className="rounded-xl w-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <SectionDivider />

      {/* ───── 6. HOW IT WORKS ───── */}
      <Section id="how-it-works" alt>
        <ScrollReveal>
          <h2 className="text-foreground font-bold text-2xl md:text-3xl text-center mb-14">
            How it works
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            {
              num: "01",
              title: "You submit your website",
              desc: "Fill out the short form with your website and a few details about your business.",
            },
            {
              num: "02",
              title: "We review it manually",
              desc: "Senior consultants assess your eligibility using our Search + AI visibility framework.",
            },
            {
              num: "03",
              title: "You receive a clear assessment",
              desc: "An honest, prioritised report of what's blocking visibility and what needs attention.",
            },
          ].map((s) => (
            <ScrollReveal key={s.num}>
              <div className="text-center">
                <p className="text-primary/20 font-extrabold text-6xl md:text-7xl mb-4">
                  {s.num}
                </p>
                <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-body text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-caption text-sm font-medium text-center mt-10">
          No obligation. No pressure.
        </p>
      </Section>

      <SectionDivider />

      {/* ───── 7. IMPORTANT NOTE ───── */}
      <Section>
        <ScrollReveal>
          <div className="card-premium rounded-xl p-10 max-w-3xl mx-auto text-center">
            <h2 className="text-foreground font-bold text-xl mb-4">Important note</h2>
            <p className="text-body text-base leading-relaxed">
              This audit assesses eligibility and clarity — not outcomes. Search engines and AI systems are probabilistic, not controllable. Our role is to remove ambiguity and blockers so your brand can compete fairly in both search results and AI-generated answers.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ───── 8. FINAL CTA ───── */}
      <section className="py-20 md:py-28 bg-cta-gradient noise-overlay">
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
            <AuditForm />
            <div className="text-center mt-8">
              <CTAButton size="lg" href="#audit-form">
                Get My Free Audit →
              </CTAButton>
              <p className="text-caption text-xs mt-4">
                Takes ~2 minutes · Manually reviewed · No credit card
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
