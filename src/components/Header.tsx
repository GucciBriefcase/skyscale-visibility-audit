import React, { useEffect, useState } from "react";
import skyscaleLogo from "@/assets/skyscale-logo.png";
import CTAButton from "./CTAButton";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#footer" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex-shrink-0">
          <img src={skyscaleLogo} alt="SkyScale" className="h-8 md:h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CTAButton size="sm" href="#audit-form" className="whitespace-nowrap text-xs md:text-sm">
            Get Free Audit
          </CTAButton>

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
              className="block text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
