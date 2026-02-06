import { useEffect, useRef, useState, type RefObject } from "react";
import { AlertTriangle, ArrowRight, Check, Network, Scan, TrendingUp, X } from "lucide-react";

type ObserverReturn = { ref: RefObject<HTMLDivElement>; isInView: boolean };

function useInView(threshold: number = 0.3): ObserverReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function ScanVisual() {
  const [progress, setProgress] = useState<number>(0);
  const { ref, isInView } = useInView(0.5);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setProgress((prev: number) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, [isInView]);

  const scanItems = [
    { status: "success" as const, label: "robots.txt accessible" },
    { status: "success" as const, label: "Structured data found" },
    { status: "warning" as const, label: "Pricing not machine-readable" },
    { status: "error" as const, label: "AI access blocked" },
  ];

  return (
    <div ref={ref} className="poster-card w-full max-w-[460px] rounded-2xl bg-card p-5 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Scan size={18} className="text-primary" />
          <span className="font-mono text-sm text-foreground">Audit in Progress...</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>

      <div className="h-1 w-full bg-[hsl(var(--glaze-mint))] rounded-full mb-6 overflow-hidden border-2 border-border">
        <div
          className="h-full bg-gradient-to-r from-[hsl(var(--glow-green))] to-[hsl(var(--glow-purple))] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-3">
        {scanItems.map((item, index) => {
          const toneClass =
            item.status === "success"
              ? "bg-[hsl(var(--glaze-lime))]"
              : item.status === "warning"
                ? "bg-[hsl(var(--glaze-pink))]"
                : "bg-[hsl(var(--glaze-mint))]";

          const icon =
            item.status === "success" ? (
              <Check size={16} className="text-foreground" />
            ) : item.status === "warning" ? (
              <AlertTriangle size={16} className="text-foreground" />
            ) : (
              <X size={16} className="text-foreground" />
            );

          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 rounded-lg border-2 p-3 transition-all duration-500 ${toneClass} ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {icon}
              <span className="font-mono text-sm text-ink-secondary">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GraphVisual() {
  const { ref, isInView } = useInView(0.5);

  const nodes = [
    { id: "business", label: "Business", x: 50, y: 20, primary: true },
    { id: "services", label: "Services", x: 80, y: 50 },
    { id: "price", label: "Price", x: 80, y: 80 },
    { id: "location", label: "Location", x: 20, y: 50 },
    { id: "reviews", label: "Reviews", x: 50, y: 65 },
  ];

  return (
    <div ref={ref} className="poster-card w-full max-w-[460px] rounded-2xl bg-card p-5 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Network size={18} className="text-glow-purple" />
          <span className="font-mono text-sm text-foreground">Entity Mapping</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>

      <div className="relative h-48 w-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="50"
            y1="28"
            x2="72"
            y2="50"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.5"
            className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          />
          <line
            x1="80"
            y1="58"
            x2="80"
            y2="72"
            stroke="hsl(var(--glow-purple) / 0.3)"
            strokeWidth="0.5"
            className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "450ms" }}
          />
          <line
            x1="42"
            y1="28"
            x2="28"
            y2="45"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.5"
            className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          />
          <line
            x1="50"
            y1="28"
            x2="50"
            y2="57"
            stroke="hsl(var(--glow-orange) / 0.3)"
            strokeWidth="0.5"
            className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "500ms" }}
          />
          <line
            x1="72"
            y1="50"
            x2="58"
            y2="60"
            stroke="hsl(var(--glow-purple) / 0.3)"
            strokeWidth="0.5"
            className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "550ms" }}
          />
        </svg>

        {nodes.map((node, index) => (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%`, transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`px-3 py-1.5 rounded-lg font-mono text-xs whitespace-nowrap border-2 ${
                node.primary
                  ? "bg-[hsl(var(--glaze-lime))] border-border text-foreground"
                  : "bg-[hsl(var(--glaze-mint))] border-border text-ink-secondary"
              }`}
            >
              {node.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricsVisual() {
  const { ref, isInView } = useInView(0.5);

  const metrics = [
    { label: "AI Visibility", value: "+38%", color: "primary" as const },
    { label: "Brand Mentions", value: "156", color: "glow-purple" as const },
    { label: "Intent Signals", value: "24 new", color: "glow-orange" as const },
  ];

  return (
    <div ref={ref} className="poster-card w-full max-w-[460px] rounded-2xl bg-card p-5 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-glow-orange" />
          <span className="font-mono text-sm text-foreground">Weekly Performance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`p-4 rounded-xl border-2 border-border bg-[hsl(var(--glaze-mint))] transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-ink-secondary text-sm">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xl font-bold ${
                    metric.color === "primary"
                      ? "text-foreground"
                      : metric.color === "glow-purple"
                        ? "text-foreground"
                        : "text-foreground"
                  }`}
                >
                  {metric.value}
                </span>
                <TrendingUp size={16} className="text-foreground" />
              </div>
            </div>
            <div className="flex items-end gap-1 mt-3 h-8">
              {[40, 55, 45, 70, 60, 85, 90].map((height, i) => (
                <div
                  key={`${metric.label}-${i}`}
                  className={`flex-1 rounded-sm transition-all duration-500 ${
                    metric.color === "primary"
                      ? "bg-[hsl(var(--glow-green))]"
                      : metric.color === "glow-purple"
                        ? "bg-[hsl(var(--glow-purple))]"
                        : "bg-[hsl(var(--glow-green))]"
                  }`}
                  style={{ height: isInView ? `${height}%` : "10%", transitionDelay: `${index * 150 + i * 50}ms` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    stage: "Audit",
    navLabel: "Scan & Diagnose",
    title: "WebGlazer Scans Your Site",
    description:
      "We analyze how AI platforms currently see (or don't see) your business. Our audit crawls the same paths AI assistants use, exposing blind spots in your visibility.",
    outcomes: [
      "Crawls the same entry points AI assistants use",
      "Flags missing machine-readable business details",
      "Prioritizes high-impact visibility fixes first",
    ],
    deliverable: "Visibility report in minutes",
    badgeClass: "bg-[hsl(var(--glaze-lime))]",
    glowClass: "bg-[hsl(var(--glow-green))]",
    Visual: ScanVisual,
  },
  {
    number: "02",
    stage: "Structure",
    navLabel: "Teach AI Your Business",
    title: "Glaze the AI",
    description:
      "Automatically create an AI-friendly (glazed) version of your site for your new VIP visitors - AI traffic. Think of it as teaching ChatGPT your entire business — prices, services, and unique value—in a language it understands.",
    outcomes: [
      "Builds a clean entity map of your services and proof",
      "Translates your offers into AI-readable content blocks",
      "Aligns pricing, location, and trust signals for retrieval",
    ],
    deliverable: "AI-ready content architecture",
    badgeClass: "bg-[hsl(var(--glaze-pink))]",
    glowClass: "bg-[hsl(var(--glow-purple))]",
    Visual: GraphVisual,
  },
  {
    number: "03",
    stage: "Scale",
    navLabel: "Track & Grow",
    title: "Monitor & Scale",
    description:
      "Track your AI visibility weekly and discover new revenue opportunities. See exactly when and how AI platforms recommend your business to potential customers. Metrics like brand mentions, impressions, and sentiment are hard to track - which is why WebGlazer is so powerful! ",
    outcomes: [
      "Measures visibility trends by platform and intent",
      "Tracks recommendations, mentions, and momentum weekly",
      "Turns signal changes into next actions for growth",
    ],
    deliverable: "Weekly growth loop",
    badgeClass: "bg-[hsl(var(--glaze-mint))]",
    glowClass: "bg-[hsl(var(--glow-green))]",
    Visual: MetricsVisual,
  },
];

export function MoneyLeakSection() {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section ref={sectionRef} id="money-leak" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-[48%] bg-[hsl(var(--glow-green))] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="absolute -left-16 top-28 h-72 w-72 rounded-full bg-[hsl(var(--glow-purple))] opacity-20 blur-3xl" />
      <div className="absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-[hsl(var(--glow-green))] opacity-25 blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <header
          className={`mx-auto mb-12 max-w-4xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="poster-card px-6 py-6 md:px-10 md:py-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink-secondary">How it works</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground text-balance md:text-6xl">
              AI can’t read your site. <span className="highlight-lime">We fix that in 3 steps.</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-secondary md:text-lg">
              Each stage removes friction between your website and AI assistants, so your brand becomes clear, trusted, and
              recommendable.
            </p>
          </div>
        </header>

        <div
          className={`mb-10 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="poster-card p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.number} className="relative rounded-xl border-2 border-border bg-card p-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border text-sm font-bold ${step.badgeClass}`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-secondary">{step.stage}</p>
                      <p className="mt-1 text-base font-semibold leading-tight text-foreground">{step.navLabel}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 ? (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full border-2 border-border bg-background p-1 text-foreground md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative space-y-8 md:space-y-10">
          <div className="absolute left-6 top-10 hidden w-1 rounded-full bg-gradient-to-b from-[hsl(var(--glow-green))] via-[hsl(var(--glow-purple))] to-[hsl(var(--glow-green))] md:bottom-10 md:block" />
          {steps.map((step, index) => {
            const Visual = step.Visual;
            const isReversed = index % 2 === 1;

            return (
              <article
                key={step.number}
                className={`relative transition-all duration-700 md:pl-16 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${160 + index * 130}ms` }}
              >
                <div
                  className={`absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-border text-sm font-black md:flex ${step.badgeClass}`}
                >
                  {step.number}
                </div>

                <div className="poster-card overflow-hidden p-5 md:p-7">
                  <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className={`space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`sticker-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${step.badgeClass}`}>
                          {step.stage}
                        </span>
                        <span className="rounded-full border-2 border-border bg-[hsl(var(--glaze-mint))] px-3 py-1 text-xs font-mono text-foreground">
                          {step.deliverable}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold leading-tight text-foreground md:text-4xl">{step.title}</h3>
                      <p className="text-base leading-relaxed text-ink-secondary md:text-lg">{step.description}</p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {step.outcomes.map((outcome) => (
                          <div
                            key={`${step.number}-${outcome}`}
                            className="flex items-start gap-2 rounded-lg border-2 border-border bg-[hsl(var(--glaze-lime))] px-3 py-2"
                          >
                            <Check size={14} className="mt-0.5 shrink-0 text-foreground" />
                            <span className="text-sm leading-relaxed text-ink-secondary">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`relative flex w-full justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div className={`absolute inset-3 -z-10 rounded-[1.25rem] blur-2xl opacity-35 ${step.glowClass}`} />
                      <Visual />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="sticker-card inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[hsl(var(--glow-green))]" />
            <span className="text-sm text-ink-secondary md:text-base">
              Start with step 1 today.
              <a
                href="#pricing"
                className="ml-2 font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-[hsl(var(--glow-green))]"
              >
                See pricing
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
