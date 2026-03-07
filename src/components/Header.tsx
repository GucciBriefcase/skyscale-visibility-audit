import React, { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "Visibility Audit", href: "#hero", active: true },
  { label: "Services", href: "#pillars" },
  { label: "Insights", href: "#invisible" },
  { label: "About Us", href: "#how-it-works" },
  { label: "Contact Us", href: "#footer" },
];

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
      className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-foreground font-bold text-xl tracking-tight">
          SkyScale
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                l.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CTAButton size="sm" href="https://api.whatsapp.com/send/?phone=61468881846">
            Chat on WhatsApp
          </CTAButton>

          {/* Mobile hamburger */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
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

      {/* Mobile slide-in drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ${
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
              className={`block text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                l.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
