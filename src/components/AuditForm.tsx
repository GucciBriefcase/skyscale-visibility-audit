import React, { useState } from "react";
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

  const handleSubmit = () => {
    console.log("Audit form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <p className="text-[#00E5C8] font-bold text-xl mb-2">Thank you!</p>
        <p className="text-body text-sm">Your submission has been received!</p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm font-normal placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#00E5C8] transition";

  const stepLabels = ["Quick check", "About you", "Final details"];

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h3 className="text-foreground font-bold text-lg mb-1">Request Form</h3>
      <p className="text-body text-[13px] italic mb-5">
        Takes ~2 minutes. Each request is manually reviewed by senior consultants.
      </p>
      <p className="text-muted-foreground text-sm font-semibold mb-5">
        Step {step} of 3 — {stepLabels[step - 1]}
      </p>

      <div className="min-h-[260px]">
        {step === 1 && (
          <div className="space-y-4 animate-fade-in-up" style={{ animationDuration: "400ms" }}>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">What's your website?</label>
              <input className={inputCls} placeholder="https://example.com" value={form.website} onChange={(e) => update("website", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-2 font-medium">How important is being found online to your business?</label>
              {["Critical — it directly affects revenue", "Important — it supports revenue", "Not critical at this stage"].map((opt) => (
                <label key={opt} className="flex items-center gap-3 mb-2 cursor-pointer group">
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition ${form.importance === opt ? "border-[#00E5C8]" : "border-border"}`}>
                    {form.importance === opt && <span className="w-2 h-2 rounded-full bg-[#00E5C8]" />}
                  </span>
                  <span className="text-body text-sm">{opt}</span>
                </label>
              ))}
              <p className="text-body text-xs mt-1">Requests marked 'Not critical' may not be reviewed.</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in-up" style={{ animationDuration: "400ms" }}>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">Which best describes your role?</label>
              <select className={inputCls} value={form.role} onChange={(e) => update("role", e.target.value)}>
                <option value="">Select…</option>
                {["Founder / Owner", "CEO / MD", "Head of Marketing / Growth", "Senior Marketing Manager", "Other decision-maker"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">Which best describes your current situation?</label>
              <select className={inputCls} value={form.situation} onChange={(e) => update("situation", e.target.value)}>
                <option value="">Select…</option>
                {["Visibility declining", "Traffic stable but results weaker", "Invest in SEO but not visible in AI", "Don't know how we appear in AI", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in-up" style={{ animationDuration: "400ms" }}>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">Full Name</label>
              <input className={inputCls} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">Work Email</label>
              <input className={inputCls} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
              <p className="text-body text-xs mt-1">Please use a work email</p>
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">Company Name</label>
              <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-foreground mb-1.5 font-medium">What prompted you to request this audit now?</label>
              <textarea className={`${inputCls} resize-none`} rows={3} value={form.prompted} onChange={(e) => update("prompted", e.target.value)} />
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 accent-[#00E5C8]" />
              <span className="text-body text-xs leading-relaxed">
                I understand this is a manual visibility assessment focused on clarity and eligibility — not a guarantee of rankings or traffic.
              </span>
            </label>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-6">
        {step > 1 ? (
          <button onClick={() => setStep(step - 1)} className="text-muted-foreground text-sm font-medium hover:text-foreground transition">
            Prev
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <CTAButton size="md" onClick={() => setStep(step + 1)}>Continue</CTAButton>
        ) : (
          <CTAButton size="md" onClick={handleSubmit}>Submit</CTAButton>
        )}
      </div>
    </div>
  );
};

export default AuditForm;
