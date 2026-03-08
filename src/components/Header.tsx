import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={skyscaleLogo} alt="SkyScale" className="h-8" />
        </a>

        {/* Center pill nav */}
        <nav className="hidden md:flex items-center rounded-full bg-secondary/60 px-2 py-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                l.active
                  ? "text-foreground font-medium bg-foreground/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/20"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex cta-btn cta-btn-sm"
          >
            <span>Get in touch on WhatsApp</span>
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

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm transition-colors duration-200 ${
                l.active
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm font-semibold text-primary hover:underline mt-2"
          >
            Get in touch on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
