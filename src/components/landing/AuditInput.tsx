import { useState, type ChangeEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const options = [
  { id: "high-ticket", label: "My High-Ticket Sales", icon: "💎" },
  { id: "products", label: "My Best-Selling Products", icon: "📦" },
  { id: "services", label: "My Services", icon: "⚙️" },
];

export function AuditInput() {
  const [domain, setDomain] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative">
        <div className="poster-card rounded-2xl p-5 sm:p-6 md:p-8 bg-card">
          <div className="sticker-card bg-[hsl(var(--glaze-pink))] text-xs font-semibold px-3 py-1 absolute -top-4 right-6 rotate-2">
            Run Scan →
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground mb-4">
              <Sparkles size={24} />
              <span>Can AI see your business?</span>
            </div>

            <div className="relative mb-5 sm:mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-secondary">
                <Globe size={18} />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setDomain(event.target.value)}
                placeholder="https://your-business.com"
                className="w-full h-12 sm:h-14 pl-12 pr-4 bg-background border-2 border-border rounded-xl text-foreground placeholder:text-[hsl(var(--ink-secondary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--glow-green))] transition-all text-sm sm:text-base"
              />
            </div>

            <p className="text-sm text-ink-secondary mb-3">
              What do you want AI to sell for you?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`relative flex items-center gap-3 p-3 sm:p-3 min-h-[48px] rounded-xl border-2 transition-all text-left text-sm ${
                    selectedOption === option.id
                      ? "border-border bg-[hsl(var(--glaze-pink))] text-foreground before:content-[''] before:absolute before:left-2.5 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[hsl(var(--glow-green))]"
                      : "border-border bg-background text-ink-secondary hover:bg-[hsl(var(--glaze-mint))]"
                  }`}
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{option.icon}</span>
                  <span className="whitespace-normal break-words leading-snug">{option.label}</span>
                </button>
              ))}
            </div>

            <Button variant="hero" size="xl" className="w-full group min-h-[56px] sm:min-h-[48px]">
              <span>Audit My AI Sales Potential</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-xs text-ink-secondary text-center mt-4">
              {/* Built on modern infrastructure for instant analysis. No credit card required. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
