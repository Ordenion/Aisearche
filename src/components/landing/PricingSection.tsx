import { Button } from "@/components/ui/Button";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Free Hustler Check",
    tagline: 'For the "Am I Broken?" check',
    price: "$0",
    period: "/ Forever",
    cta: "Run Scan",
    ctaVariant: "glow-outline" as const,
    features: [
      "Instant Homepage Scan",
      "Full Site Analysis",
      "Pass/Fail Report",
      "Prioritized 'Fix It' List",
      "One-time check",
    ],
    popular: false,
  },
  {
    name: "Pro Growth Engine",
    tagline: 'For the "Scale My Sales" mindset',
    price: "$49",
    period: "/ mo",
    cta: "Start Growing",
    ctaVariant: "hero" as const,
    features: [
      "Everything in Free Hustler Check",
      "Weekly AI Tracking",
      "'Offer Optimizer' Tips",
      "Priority fixes based on revenue impact",
      "Monthly opportunity report",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[hsl(var(--glow-purple))]" />
      <div className="absolute -right-24 top-10 w-[360px] h-[360px] bg-[hsl(var(--glow-green))] rounded-full opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="poster-card inline-block px-6 py-5">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
              An Entire Sales Team for <span className="highlight-lime">Less Than a Lunch</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative poster-card rounded-2xl p-8 ${plan.popular ? "bg-[hsl(var(--glaze-pink))]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 sticker-card px-4 py-1 text-xs font-semibold bg-[hsl(var(--glaze-mint))]">
                  <Star size={12} fill="currentColor" />
                  Best value
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-ink-secondary">{plan.tagline}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-ink-secondary">{plan.period}</span>
              </div>

              <Button variant={plan.ctaVariant} size="xl" className="w-full mb-8 group">
                {plan.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[hsl(var(--glaze-lime))] border-2 border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-foreground" />
                    </div>
                    <span className="text-ink-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
