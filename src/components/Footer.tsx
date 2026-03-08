import React from "react";
import skyscaleLogo from "@/assets/skyscale-logo.png";

const Footer: React.FC = () => (
  <footer id="footer" className="bg-background border-t section-divider py-16 noise-overlay">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={skyscaleLogo} alt="SkyScale" className="h-8 mb-4" />
          <p className="text-body text-sm leading-relaxed mb-4">
            SkyScale helps businesses become clearly understood, trusted, and eligible to be recommended by AI systems like ChatGPT, Gemini, Claude, and Perplexity.
          </p>
        </div>
        <div>
          <h4 className="text-foreground font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Visibility Audit", "How It Works", "Insights", "Contact"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2">
            {["AI Visibility Audit", "Search Strategy", "Entity Optimisation", "Content Architecture"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-primary transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-body text-sm">
            <li>+61 468 881 846</li>
            <li>contact@skyscale.com.au</li>
            <li>20 Queens Road Melbourne 3004<br />Victoria Australia</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t section-divider flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-caption text-xs">© 2026 SkyScale Pty Ltd · ACN 693 157 523</p>
        <div className="flex gap-4 text-caption text-xs">
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
