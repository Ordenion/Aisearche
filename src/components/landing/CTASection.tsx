import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-[hsl(var(--glow-green))]" />
      <div className="absolute -left-24 top-8 w-[320px] h-[320px] bg-[hsl(var(--glow-purple))] rounded-full opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="poster-card inline-block px-6 py-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
              The Land Grab for AI Citations Is <span className="highlight-pink">Happening Now.</span>
            </h2>
            <p className="text-xl text-ink-secondary mb-6">
              Are you going to let your competitors take your spot?
            </p>
          </div>

          <Button variant="hero" size="xl" className="group">
            <Zap size={20} className="mr-2" />
            Audit My Site Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-ink-secondary mt-4">
            Instant results. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
