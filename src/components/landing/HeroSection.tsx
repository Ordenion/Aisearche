import { Bot, TrendingUp, DollarSign } from "lucide-react";
import { AuditInput } from "./AuditInput";
import { AILogos } from "./AILogos";
import { FloatingCard } from "./FloatingCard";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[70vh] bg-[hsl(var(--glow-green))]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      />
      <div className="absolute -right-10 top-16 w-[380px] h-[380px] bg-[hsl(var(--glow-purple))] opacity-80 rounded-full" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="text-ink-secondary text-sm md:text-base uppercase tracking-wider mb-4">
            {/* Is your most valuable website visitor human or AI ? */}
                      </p>
          <div className="relative poster-card px-6 py-8 md:px-10 md:py-10 text-left md:text-center">
            <div className="sticker-card bg-[hsl(var(--glaze-pink))] text-xs font-semibold tracking-wide px-3 py-1 absolute -top-4 left-6 -rotate-2">
              Why now
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-heading mb-6 leading-tight text-balance">
              The Future of Sales is Here. Let <span className="highlight-pink">AI</span> <span className="highlight-lime">Close Sales</span> For You.
            </h1>
            <p className="text-lg md:text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
              Turn ChatGPT, Gemini, and Perplexity into your 24/7 sales agents.
            </p>
            <div className="sticker-card bg-[hsl(var(--glaze-mint))] text-xs font-semibold tracking-wide px-3 py-1 absolute -bottom-4 right-6 rotate-2">
              AI is your most valuable website visitor
            </div>
          </div>
        </div>

        <div className="relative mb-16">
          <AuditInput />

          <div className="hidden lg:block">
            <FloatingCard className="absolute -left-12 top-1/4 w-52" delay={0}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--glaze-mint))] border-2 border-border flex items-center justify-center">
                  <Bot size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-ink-secondary">AI Mentions</p>
                  <p className="text-lg font-semibold text-foreground">+247%</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -right-10 top-1/3 w-56" delay={0.5} reverse>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--glaze-lime))] border-2 border-border flex items-center justify-center">
                  <TrendingUp size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-ink-secondary">Conversion Rate</p>
                  <p className="text-lg font-semibold text-foreground">6x Higher</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute right-12 bottom-0 w-48" delay={1}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(var(--glaze-pink))] border-2 border-border flex items-center justify-center">
                  <DollarSign size={20} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-ink-secondary">Revenue</p>
                  <p className="text-lg font-semibold text-foreground">+$48K/mo</p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-ink-secondary mb-4">
            AI Routing Map — A single offer powers answers across every major AI assistant
          </p>
          <AILogos />
        </div>
      </div>
    </section>
  );
}
