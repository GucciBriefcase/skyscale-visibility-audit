import React from "react";
import { Sparkles, AlertTriangle } from "lucide-react";

const AIResponseMockup: React.FC = () => (
  <div className="bg-[hsl(0_0%_5%)] border border-border rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(0,229,200,0.12)]">
    {/* Header bar */}
    <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-[hsl(0_0%_7%)]">
      <Sparkles size={14} className="text-muted-foreground" />
      <span className="text-muted-foreground text-sm font-medium">AI Assistant</span>
    </div>

    <div className="p-5 md:p-6 space-y-5">
      {/* User prompt */}
      <div className="flex justify-end">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
          <p className="text-foreground/80 text-sm italic">
            What are the best digital marketing agencies in Melbourne?
          </p>
        </div>
      </div>

      {/* AI response */}
      <div className="space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Here are some top digital marketing agencies in Melbourne:
        </p>

        <div className="space-y-3.5">
          {[
            { name: "Competitor A", desc: "Full-service digital strategy" },
            { name: "Competitor B", desc: "Specialist PPC management" },
            { name: "Competitor C", desc: "SEO and content agency" },
          ].map((item, i) => (
            <div key={item.name} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-foreground/90 text-sm font-medium">{item.name}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning bar — the punchline */}
        <div className="mt-5 pt-4 border-t border-border">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3.5 animate-pulse-glow flex items-center gap-2.5">
            <AlertTriangle size={18} className="text-destructive/70 flex-shrink-0" />
            <p className="text-destructive/70 text-base md:text-lg font-semibold">
              Your Brand — Not Mentioned
            </p>
          </div>
          <p className="text-muted-foreground text-xs mt-2 ml-1">
            AI couldn't find enough structured, citable information about your business.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AIResponseMockup;
