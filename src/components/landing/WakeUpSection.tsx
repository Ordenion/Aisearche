import { useEffect, useRef, useState, type RefObject } from "react";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

type CountUpReturn = { count: number; ref: RefObject<HTMLDivElement> };

type StatColor = "primary" | "glow-green" | "glow-purple" | "glow-orange";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true): CountUpReturn {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

const stats: Array<{
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: StatColor;
}> = [
  { value: 50, suffix: "%", label: "of buyers ask AI first", description: "Before they ever open Google", icon: Users, color: "primary" },
  { value: 6, suffix: "x", label: "higher buying intent", description: "LLM searches vs traditional search", icon: TrendingUp, color: "glow-green" },
  { value: 73, suffix: "%", label: "trust AI recommendations", description: "For purchase decisions", icon: Target, color: "glow-purple" },
  { value: 24, suffix: "/7", label: "AI never sleeps", description: "Your offers selling around the clock", icon: Zap, color: "glow-orange" },
];

export function WakeUpSection() {
  const counters = stats.map((stat) => useCountUp(stat.value));
  const counts = counters.map((item) => item.count);
  const refs = counters.map((item) => item.ref);

  return (
    <section id="wake-up" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow-purple)) 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite 2s",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">The Numbers Don't Lie</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
            The Future of Sales is <span className="gradient-text">Already Here</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            While you're optimizing for yesterday's search engines, your customers are making decisions in AI conversations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses: Record<StatColor, string> = {
              primary: "text-primary border-primary/20 bg-primary/5",
              "glow-green": "text-glow-green border-glow-green/20 bg-glow-green/5",
              "glow-purple": "text-glow-purple border-glow-purple/20 bg-glow-purple/5",
              "glow-orange": "text-glow-orange border-glow-orange/20 bg-glow-orange/5",
            };

            const textClass =
              stat.color === "primary"
                ? "text-primary"
                : stat.color === "glow-green"
                  ? "text-glow-green"
                  : stat.color === "glow-purple"
                    ? "text-glow-purple"
                    : "text-glow-orange";

            return (
              <div key={stat.label} ref={refs[index]} className="group relative">
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClasses[stat.color]}`}>
                    <Icon size={24} />
                  </div>

                  <div className="mb-4">
                    <span className={`text-5xl md:text-6xl font-bold tracking-tight ${textClass}`}>
                      {counts[index]}
                    </span>
                    <span className={`text-3xl md:text-4xl font-bold ${textClass}`}>{stat.suffix}</span>
                  </div>

                  <p className="text-foreground font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              Your competitors are already optimizing for AI. <a href="#pricing" className="text-primary font-semibold hover:underline">Don't get left behind →</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
