import React from "react";

const Footer: React.FC = () => (
  <footer id="footer" className="bg-background border-t border-border py-16">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="text-foreground font-bold text-xl mb-3">SkyScale</p>
          <p className="text-body text-[13px] leading-relaxed mb-4">
            SkyScale helps local businesses become clearly understood, trusted, and eligible to be recommended in AI search tools like ChatGPT, Gemini, Claude, and Perplexity. Based in Melbourne, Australia. Serving businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-foreground font-bold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Visibility Audit", "Services", "Insights", "About Us"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-[#00E5C8] transition">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-foreground font-bold text-sm mb-4">Services</h4>
          <ul className="space-y-2">
            {["AI Visibility Audit", "Search Strategy", "Entity Optimisation", "Content Architecture"].map((l) => (
              <li key={l}><a href="#" className="text-body text-sm hover:text-[#00E5C8] transition">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-foreground font-bold text-sm mb-4">Contact Information</h4>
          <ul className="space-y-2 text-body text-sm">
            <li>+61 468 881 846</li>
            <li>contact@skyscale.com.au</li>
            <li>20 Queens Road Melbourne 3004<br />Victoria Australia</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-muted-foreground text-xs">© Copyright 2026 | SkyScale Pty Ltd ACN 693 157 523</p>
        <div className="flex gap-4 text-muted-foreground text-xs">
          <a href="#" className="hover:text-foreground transition">Terms & Conditions</a>
          <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
