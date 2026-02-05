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
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[hsl(var(--glow-purple))]" />
      <div className="absolute -right-24 top-10 w-[360px] h-[360px] bg-[hsl(var(--glow-green))] rounded-full opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <div className="poster-card inline-block px-6 py-5">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4">The Numbers Don't Lie</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
              {/* The Future of Sales is <span className="highlight-lime">Already Here</span> */}
              Your Customers Are <span className="highlight-lime">Using AI to Decide</span> What to Buy.
            </h2>
            <p className="text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
              While you're optimizing for yesterday's search engines, your customers are making decisions in AI conversations. You are not just behind, you are Invisible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const textClass = "text-foreground";

            return (
              <div key={stat.label} ref={refs[index]} className="group relative">
                <div className={`sticker-card rounded-2xl p-6 md:p-8 h-full ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border-2 border-border bg-[hsl(var(--glaze-mint))]`}>
                    <Icon size={24} className="text-foreground" />
                  </div>

                  <div className="mb-4 flex items-end gap-1">
                    <span className={`text-5xl md:text-6xl font-bold tracking-tight ${textClass}`}>
                      {counts[index]}
                    </span>
                    <span className={`text-5xl md:text-6xl font-bold tracking-tight ${textClass}`}>
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-foreground font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-ink-secondary text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="sticker-card inline-flex items-center gap-3 px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--glow-green))]" />
            <span className="text-ink-secondary">
              Your competitors are already optimizing for AI. <a href="#pricing" className="font-semibold underline decoration-[hsl(var(--glow-green))]">Don't get left behind →</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
