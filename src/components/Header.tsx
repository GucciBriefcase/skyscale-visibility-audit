import React, { useEffect, useState } from "react";
import skyscaleLogo from "@/assets/skyscale-logo.png";

const navLinks = [
  { label: "Visibility Audit", href: "#audit-form", active: true },
  { label: "Services", href: "#", active: false },
  { label: "Case Studies", href: "#", active: false },
  { label: "Insights", href: "#", active: false },
  { label: "About Us", href: "#", active: false },
  { label: "Contact Us", href: "#footer", active: false },
];

const WHATSAPP_URL = "https://wa.me/61468881846";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? "bg-background/80 border-white/[0.05]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex-shrink-0">
          <img src={skyscaleLogo} alt="SkyScale" className="h-8 md:h-10" />
        </a>

        {/* Center pill nav */}
        <nav className="hidden lg:flex items-center bg-white/[0.05] rounded-full px-3 py-1.5 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                l.active
                  ? "bg-white/[0.10] text-foreground font-medium"
                  : "text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Get in touch on WhatsApp
          </a>

          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="relative ml-auto w-64 h-full bg-background border-l border-border px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-primary hover:underline mt-4"
          >
            Get in touch on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
