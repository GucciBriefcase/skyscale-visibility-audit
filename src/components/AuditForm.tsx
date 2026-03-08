import React, { useState } from "react";
import { CheckCircle2, ChevronDown, Lock } from "lucide-react";
import CTAButton from "./CTAButton";

const AuditForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    website: "",
    importance: "",
    role: "",
    situation: "",
    fullName: "",
    email: "",
    company: "",
    prompted: "",
    consent: false,
  });

  const update = (key: string, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const goNext = () => setStep((s) => Math.min(s + 1, 3));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    console.log("Audit form submitted:", form);
    setSubmitted(true);
  };

  const stepNames = ["Quick check", "About you", "Contact details"];

  const inputCls =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition";

  const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

  if (submitted) {
    return (
      <div id="audit-form" className="card-premium rounded-2xl p-6">
        <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up" style={{ animationDuration: "400ms" }}>
          <CheckCircle2 size={48} className="text-primary mb-4" />
          <p className="text-foreground font-bold text-xl mb-2">Thank you!</p>
          <p className="text-body text-sm text-center">
            Your submission has been received. We'll review it and be in touch within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  const importanceOptions = [
    "Critical — it directly affects revenue",
    "Important — it supports revenue",
    "Not critical at this stage",
  ];

  const roleOptions = [
    "Founder / Owner",
    "CEO / Managing Director",
    "Head of Marketing / Growth",
    "Senior Marketing Manager",
    "Other decision-maker",
  ];

  const situationOptions = [
    "Visibility or enquiries are declining",
    "Traffic is stable but results are weaker",
    "We invest in SEO but aren't visible in AI answers",
    "We don't know how we appear in AI answers",
    "Other",
  ];

  return (
    <div id="audit-form" className="card-premium rounded-2xl p-6">
      <h3 className="text-foreground font-bold text-lg mb-1">Request Your Free Audit</h3>
      <p className="text-body text-sm mb-5">
        Takes ~2 minutes. Each request is manually reviewed.
      </p>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-5">
        {stepNames.map((name, i) => (
          <React.Fragment key={name}>
            <div className={`flex items-center gap-1.5 ${i + 1 <= step ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                i + 1 <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {i + 1}
              </span>
              <span className="text-xs font-medium hidden sm:inline">{name}</span>
            </div>
            {i < 2 && <div className={`flex-1 h-px ${i + 1 < step ? 'bg-primary' : 'bg-border'}`} />}
          </React.Fragment>
        ))}
      </div>

      <div>
        {step === 1 && (
          <div key={step} className="animate-fade-in">
            <div className="space-y-4 pb-2">
              <div>
                <label className={labelCls}>What's your website?</label>
                <input
                  className={inputCls}
                  placeholder="https://example.com"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                />
              </div>
              <div>
                <label className={labelCls + " mb-3"}>
                  How important is being found online to your business?
                </label>
                <div className="space-y-2">
                  {importanceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("importance", opt)}
                      className={`w-full flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-all duration-200 text-left ${
                        form.importance === opt
                          ? "border-primary bg-primary/5"
                          : "border-border bg-transparent hover:border-muted-foreground/30"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center transition-colors ${
                          form.importance === opt ? "border-primary" : "border-muted-foreground/40"
                        }`}
                      >
                        {form.importance === opt && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </span>
                      <span className="text-body text-sm">{opt}</span>
                    </button>
                  ))}
                </div>
                <p className="text-caption text-xs mt-2 mb-4">
                  Requests marked 'Not critical' may not be reviewed.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div key={step} className="animate-fade-in">
            <div className="space-y-5 pb-2">
              <div>
                <label className={labelCls}>Which best describes your role?</label>
                <div className="relative">
                  <select
                    className={`${inputCls} appearance-none pr-10`}
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                  >
                    <option value="">Select…</option>
                    {roleOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <label className={labelCls}>Which best describes your current situation?</label>
                <div className="relative">
                  <select
                    className={`${inputCls} appearance-none pr-10`}
                    value={form.situation}
                    onChange={(e) => update("situation", e.target.value)}
                  >
                    <option value="">Select…</option>
                    {situationOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div key={step} className="animate-fade-in">
            <div className="space-y-4 pb-2">
              <div>
                <label className={labelCls}>Full Name</label>
                <input className={inputCls} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Work Email</label>
                <input className={inputCls} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Company Name</label>
                <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>What prompted you to request this audit now?</label>
                <textarea
                  className={`${inputCls} resize-none`}
                  rows={3}
                  value={form.prompted}
                  onChange={(e) => update("prompted", e.target.value)}
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <button
                  type="button"
                  onClick={() => update("consent", !form.consent)}
                  className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-[3px] border-[1.5px] flex items-center justify-center transition-colors ${
                    form.consent
                      ? "bg-primary border-primary"
                      : "bg-transparent border-muted-foreground/40"
                  }`}
                >
                  {form.consent && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <span className="text-body text-xs leading-relaxed">
                  I understand this is a manual visibility assessment focused on clarity and eligibility — not a guarantee of rankings or traffic.
                </span>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        {step > 1 ? (
          <button
            onClick={goPrev}
            className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <CTAButton size="md" onClick={goNext}>Continue</CTAButton>
        ) : (
          <CTAButton size="md" onClick={handleSubmit}>Get My Free Audit</CTAButton>
        )}
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4 text-muted-foreground">
        <Lock size={12} />
        <span className="text-xs">We never store your data</span>
      </div>
    </div>
  );
};

export default AuditForm;
