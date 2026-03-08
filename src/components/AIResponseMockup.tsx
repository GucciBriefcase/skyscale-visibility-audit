import React from "react";
import { X } from "lucide-react";

const AIResponseMockup: React.FC = () => (
  <div className="bg-[hsl(0_0%_5%)] border border-border rounded-2xl overflow-hidden shadow-2xl">
    {/* Header bar */}
    <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-[hsl(0_0%_7%)]">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(0_72%_51%/0.6)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(45_100%_51%/0.6)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(120_100%_37%/0.6)]" />
      </div>
      <span className="text-muted-foreground text-xs ml-2 font-medium tracking-wide">AI Assistant</span>
    </div>

    <div className="p-5 md:p-6 space-y-5">
      {/* User prompt */}
      <div className="flex justify-end">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
          <p className="text-foreground text-sm">
            What are the best digital marketing agencies in Melbourne?
          </p>
        </div>
      </div>

      {/* AI response */}
      <div className="space-y-3">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Based on recent reviews and industry presence, here are some of the top digital marketing agencies in Melbourne:
        </p>

        <div className="space-y-2.5">
          {[
            {
              name: "Rocket Digital",
              desc: "Full-service agency known for performance marketing and paid media strategy.",
            },
            {
              name: "Clearpath SEO",
              desc: "Specialises in organic search strategy with strong enterprise case studies.",
            },
            {
              name: "BrightEdge Co.",
              desc: "Content-driven agency with a focus on AI-ready content architecture.",
            },
            {
              name: "Summit Growth",
              desc: "Data-first approach to search, social, and conversion optimisation.",
            },
          ].map((item, i) => (
            <div key={item.name} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-foreground text-sm font-medium">{item.name}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Your brand — not mentioned */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2.5">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center">
              <X size={11} className="text-destructive" />
            </span>
            <p className="text-destructive/80 text-sm font-medium">
              Your Brand: <span className="text-destructive/60">Not Mentioned</span>
            </p>
          </div>
          <p className="text-muted-foreground text-xs mt-2 ml-[30px]">
            AI couldn't find enough structured, citable information about your business.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AIResponseMockup;
