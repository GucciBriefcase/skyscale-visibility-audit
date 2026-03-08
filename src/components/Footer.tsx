import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import skyscaleLogo from "@/assets/skyscale-logo.png";

const Footer: React.FC = () => (
  <footer id="footer" className="bg-background border-t section-divider py-16 noise-overlay">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — Brand */}
        <div>
          <img src={skyscaleLogo} alt="SkyScale" className="h-8 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            Helping businesses become visible, trusted, and recommended by AI.
          </p>
          <p className="text-muted-foreground text-sm mb-1">Based in Melbourne, Australia</p>
          <p className="text-muted-foreground text-sm mb-4">Serving businesses worldwide</p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Case Studies", "Insights", "Contact Us"].map((l) => (
              <li key={l}>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2">
            {["Answer Engine Optimisation", "AI SEO", "Generative Engine Optimisation"].map((l) => (
              <li key={l}>
                <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-sm">+61 468 881 846</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <a href="mailto:contact@skyscale.com.au" className="text-primary text-sm hover:underline transition">
                contact@skyscale.com.au
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-sm">
                20 Queens Road, Melbourne 3004<br />Victoria, Australia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-muted-foreground text-xs">© 2026 SkyScale. All rights reserved.</p>
        <div className="flex gap-4 text-muted-foreground text-xs">
          <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
