import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import skyscaleLogo from "@/assets/skyscale-logo.png";

const navLinks = [
  { label: "Visibility Audit", href: "#visibility-audit", active: true },
  { label: "Services", href: "#services", active: false },
  { label: "Case Studies", href: "#case-studies", active: false },
  { label: "Insights", href: "#insights", active: false },
  { label: "About Us", href: "#about-us", active: false },
  { label: "Contact Us", href: "#contact-us", active: false },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex-shrink-0">
          <img src={skyscaleLogo} alt="SkyScale" className="h-8" />
        </a>

        <nav className="hidden md:flex items-center rounded-full bg-secondary/60 px-2 py-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                l.active
                  ? "text-foreground font-medium bg-foreground/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/20"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#contact"
            className="hidden md:inline-flex cta-btn cta-btn-sm"
          >
            <span>Chat on WhatsApp</span>
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm transition-colors duration-200 ${
                l.active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="cta-btn cta-btn-sm mt-3 w-full">
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
