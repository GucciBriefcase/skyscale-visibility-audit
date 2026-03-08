import React, { useEffect, useState } from "react";

const StickyCtaBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-primary/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <span className="text-primary-foreground font-semibold text-sm tracking-tight">
          Free audit — takes 30 seconds
        </span>
        <a
          href="#audit-form"
          className="sticky-cta-btn font-bold text-sm px-5 py-2 rounded-full"
        >
          <span>Get My Free Audit</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCtaBar;
