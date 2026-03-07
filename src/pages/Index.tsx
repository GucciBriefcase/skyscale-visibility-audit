import React from "react";
import { Check, X, Globe, Search, FileText, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuditForm from "@/components/AuditForm";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import invisibleImg from "@/assets/invisible-section.jpg";
import pillar1Img from "@/assets/pillar-1.jpg";
import pillar2Img from "@/assets/pillar-2.jpg";
import pillar3Img from "@/assets/pillar-3.jpg";
import pillar4Img from "@/assets/pillar-4.jpg";

const TealCheck = () => (
  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00E5C8]/10 flex items-center justify-center">
    <Check size={14} className="text-[#00E5C8]" />
  </span>
);

const RedX = () => (
  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
    <X size={14} className="text-destructive" />
  </span>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* 1. Hero */}
      <Section id="hero" className="pt-12 md:pt-20">
        <p className="text-body text-[13px] font-medium uppercase tracking-[0.15em] mb-5">
          Free AI & Search Visibility Audit
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          <div className="lg:pt-4">
            <ScrollReveal>
              <h1 className="text-foreground font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] mb-8">
                See whether your brand is eligible to appear in<br className="hidden lg:block" /> Google and AI&#8209;generated{'\u00A0'}answers
              </h1>
              <div className="space-y-2 ml-1">
                {[
                  "Manual, senior reviewed assessment",
                  "Best suited for businesses where online visibility directly affects revenue",
                  "Limited availability due to review capacity",
                ].map((t) => (
                  <div key={t} className="border-l-2 border-[#00E5C8]/50 pl-4 py-1.5">
                    <span className="text-body text-[15px] leading-[1.7]">{t}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-8 opacity-60">
                <Clock size={14} className="text-body flex-shrink-0" />
                <span className="text-body text-[13px]">Typically delivered within 5 business days</span>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <AuditForm />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* 3. Most businesses are invisible */}
      <Section id="invisible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={invisibleImg} alt="Data visualization" className="rounded-xl w-full object-cover" />
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-6">
              Most businesses are invisible in AI answers
            </h2>
            <div className="text-body text-[15px] leading-[1.7] space-y-4">
              <p>AI doesn't rank the way search engines do. It doesn't crawl a list and pick the best match. It synthesises answers from sources it considers clear, credible, and consistent.</p>
              <p>If your brand isn't structured in a way that AI systems can confidently extract and reference, you won't be included — no matter how good your product or service is.</p>
              <p>This isn't a penalty. It's silent exclusion. And most businesses don't even realise it's happening.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 4. What this audit is / is not */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-3">
              This is a visibility eligibility check — not a marketing report
            </h2>
            <p className="text-body text-[15px] max-w-2xl mx-auto">
              It does not attempt to influence algorithms. It evaluates whether your site is clear enough to be considered at all.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-8 h-full">
              <h3 className="text-foreground font-bold text-lg mb-2">What this audit is</h3>
              <p className="text-body text-sm mb-5">A manual visibility assessment grounded in how search engines and AI systems actually operate in 2026.</p>
              <ul className="space-y-3">
                {["Human reviewed — no automated tools", "Focused on search engines and AI answer systems", "Evaluates eligibility, clarity, and extractability", "Identifies real blockers, not cosmetic issues", "Honest, prioritised, and decision ready"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm"><TealCheck />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-8 h-full">
              <h3 className="text-foreground font-bold text-lg mb-2">What this audit is not</h3>
              <ul className="space-y-3 mb-5">
                {["No guaranteed rankings or traffic", "No automated SEO reports", "No shortcuts, hacks, or 'AI optimisation' hype"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm"><RedX />{t}</li>
                ))}
              </ul>
              <p className="text-body text-sm italic">If you're looking for promises or exploits, this isn't for you.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 5. Four Audit Pillars */}
      <Section id="pillars">
        {[
          {
            question: "Can your site even be considered?",
            label: "Crawl & Index Health",
            items: ["Index bloat and duplicate signals", "Canonicals, redirects, and crawl paths", "Sitemap and robots configuration", "JavaScript rendering issues", "Security and crawl access"],
            closing: "If this layer fails, nothing else matters.",
            img: pillar1Img,
            reverse: false,
          },
          {
            question: "Do systems clearly understand who you are?",
            label: "Entity & Brand Clarity",
            items: ["Who you are", "What you do", "What you don't do"],
            closing: "Ambiguous brands are rarely surfaced or cited.",
            img: pillar2Img,
            reverse: true,
          },
          {
            question: "Do your pages actually resolve intent?",
            label: "Search Intent Alignment",
            items: ["One intent per page", "Mixed or conflicting intent", "Thin or unresolved content", "Outcome clarity"],
            closing: "Pages that fail to resolve intent are suppressed — even when technically 'optimised'.",
            img: pillar3Img,
            reverse: false,
          },
          {
            question: "Would AI confidently quote or reference you?",
            label: "AI Retrieval & Citation Readiness",
            items: ["Easy to extract", "Easy to quote", "Easy to trust"],
            closing: "If systems have to rewrite your content, they won't cite it.",
            img: pillar4Img,
            reverse: true,
          },
        ].map((p, i) => (
          <ScrollReveal key={i} className={i > 0 ? "mt-20" : ""}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${p.reverse ? "lg:flex-row-reverse" : ""}`}>
              <div className={p.reverse ? "lg:order-2" : ""}>
                <img src={p.img} alt={p.label} className="rounded-xl w-full object-cover" />
              </div>
              <div className={p.reverse ? "lg:order-1" : ""}>
                <p className="text-[#00E5C8] text-sm font-bold uppercase tracking-wider mb-2">{p.label}</p>
                <h3 className="font-syne text-foreground font-bold text-2xl md:text-[30px] leading-tight mb-5">{p.question}</h3>
                <ul className="space-y-3 mb-4">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body text-sm"><TealCheck />{item}</li>
                  ))}
                </ul>
                <p className="text-body text-sm italic">{p.closing}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </Section>

      {/* 6. What you'll receive */}
      <Section>
        <ScrollReveal>
          <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-10">What you'll receive</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <ScrollReveal>
            <h4 className="text-foreground font-bold text-lg mb-4">You'll receive:</h4>
            <ul className="space-y-3">
              {["What is blocking eligibility", "What is limiting search and AI visibility", "What should be fixed, merged, or removed", "What matters now versus later"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-body text-sm"><TealCheck />{t}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h4 className="text-foreground font-bold text-lg mb-4">You'll understand:</h4>
            <ul className="space-y-3">
              {["Where visibility is being lost", "Why it's happening", "What decisions need to be made"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-body text-sm"><TealCheck />{t}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <p className="text-body text-[15px] leading-[1.7] max-w-3xl">
            You will not receive a checklist or implementation guide — only a clear assessment of what's limiting visibility and what actions require a decision. No fluff. No padding. No disguised upsell.
          </p>
        </ScrollReveal>
      </Section>

      {/* 7. Who this is for / not for */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-8 h-full">
              <h3 className="text-foreground font-bold text-lg mb-4">Who this audit is for</h3>
              <ul className="space-y-3">
                {[
                  "Businesses where being found online directly affects revenue",
                  "Founders or senior leaders who make decisions",
                  "Companies investing in SEO but unsure about AI visibility",
                  "Brands that want honest answers, not sales pitches",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm"><TealCheck />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-8 h-full">
              <h3 className="text-foreground font-bold text-lg mb-4">Who this audit is not for</h3>
              <ul className="space-y-3">
                {[
                  "Businesses looking for guaranteed results",
                  "Anyone expecting an automated report",
                  "Companies not willing to make changes",
                  "Those seeking quick-fix hacks or shortcuts",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-body text-sm"><RedX />{t}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 8. How it works */}
      <Section id="how-it-works">
        <ScrollReveal>
          <h2 className="text-foreground font-bold text-2xl md:text-3xl text-center mb-12">How it works</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] border-t border-dashed border-border" />
          {[
            { icon: <Globe size={28} className="text-[#00E5C8]" />, title: "You submit your website", desc: "Fill out the short form with your website and a few details about your business." },
            { icon: <Search size={28} className="text-[#00E5C8]" />, title: "We review it manually", desc: "Using our Search + AI visibility framework, senior consultants assess your eligibility." },
            { icon: <FileText size={28} className="text-[#00E5C8]" />, title: "You receive a clear assessment", desc: "An honest, prioritised report of what's blocking visibility and what needs attention." },
          ].map((s, i) => (
            <ScrollReveal key={i}>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-body text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-muted-foreground text-sm font-medium text-center mt-10">No obligation. No pressure.</p>
      </Section>

      {/* 9. Important Note */}
      <Section>
        <ScrollReveal>
          <div className="bg-card border border-border rounded-xl p-10 max-w-3xl mx-auto text-center">
            <h2 className="text-foreground font-bold text-xl mb-4">Important note</h2>
            <p className="text-body text-[15px] leading-[1.7]">
              This audit assesses eligibility and clarity — not outcomes. Search engines and AI systems are probabilistic, not controllable. Our role is to remove ambiguity and blockers so your brand can compete fairly in both search results and AI-generated answers.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* 10. Bottom CTA */}
      <section className="py-20 md:py-28 bg-cta-gradient">
        <div className="max-w-[540px] mx-auto px-6">
          <ScrollReveal>
            <AuditForm />
            <div className="text-center mt-8">
              <h3 className="text-foreground font-bold text-lg mb-2">Limited availability</h3>
              <p className="text-body text-sm mb-6">Each audit is manually reviewed by senior consultants. Not all requests are accepted.</p>
              <CTAButton size="lg" href="https://api.whatsapp.com/send/?phone=61468881846">
                Check Your AI Visibility
              </CTAButton>
              <p className="text-body text-xs italic mt-4">Takes ~2 minutes. Manually reviewed by senior consultants.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
