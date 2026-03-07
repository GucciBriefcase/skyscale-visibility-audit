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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b border-border bg-background/80" : "bg-background"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-foreground font-bold text-xl tracking-tight">
          SkyScale
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                l.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton size="sm" href="https://api.whatsapp.com/send/?phone=61468881846">
            Chat on WhatsApp
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium ${l.active ? "text-foreground" : "text-muted-foreground"}`}
            >
              {l.label}
            </a>
          ))}
          <CTAButton size="sm" href="https://api.whatsapp.com/send/?phone=61468881846">
            Chat on WhatsApp
          </CTAButton>
        </div>
      )}
    </header>
  );
};

export default Header;
