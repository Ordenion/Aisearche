import { useEffect, useRef, useState, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type ObserverReturn = { ref: RefObject<HTMLDivElement>; isInView: boolean };

function useInView(threshold = 0.2): ObserverReturn {
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

const aiResponseBrands = [
  {
    name: "HubSpot",
    icon: "🟠",
    description:
      "HubSpot offers a strong free tier with contact management, email tracking, reporting, and integrations. It easily expands into Sales, Marketing, or Service Hubs as you grow.",
    highlighted: true,
  },
  {
    name: "Attio",
    icon: "🔵",
    description:
      "Attio is a flexible modern CRM that works like a relational database, letting you design pipelines, views, and workflows around your process.",
    highlighted: false,
  },
  {
    name: "Zero",
    icon: "⚫",
    description:
      "Zero is built for founders who want a streamlined CRM without the usual bloat. It focuses on speed, simplicity, and essential deal tracking.",
    highlighted: false,
  },
];

function ChatGPTLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-9 h-9 rounded-full bg-[#10a37f] flex items-center justify-center shadow-lg", className)}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4046-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    </div>
  );
}

function AISimulation() {
  const { ref, isInView } = useInView(0.2);

  return (
    <div ref={ref} className="relative">
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-violet-500/15 to-orange-500/20 rounded-[2rem] blur-3xl opacity-50" />
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-70" />

      <div
        className={cn(
          "relative bg-[#212121] rounded-2xl overflow-hidden",
          "shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)]",
          "border border-white/10",
          "transition-all duration-1000",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        <div className="p-6 pb-3 flex justify-end">
          <div
            className={cn(
              "bg-[#2f2f2f] rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-sm",
              "shadow-sm",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-white text-sm font-medium">What are the best CRMs for Startups?</p>
          </div>
        </div>

        <div className="px-6 pb-8">
          <div className="flex gap-4">
            <ChatGPTLogo className="flex-shrink-0 mt-1" />

            <div
              className={cn(
                "flex-1 space-y-5",
                "transition-all duration-700 delay-400",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                Choosing the right CRM really comes down to how your startup sells, grows, and automates. Here's a curated
                breakdown of the top CRM platforms for startups in 2025:
              </p>

              <div className="space-y-4">
                {aiResponseBrands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className={cn(
                      "relative transition-all duration-500",
                      brand.highlighted
                        ? "pl-4 border-l-[3px] border-primary bg-gradient-to-r from-primary/15 via-primary/5 to-transparent -mx-2 px-5 py-4 rounded-xl"
                        : "pl-4 border-l-2 border-white/20 hover:border-white/40"
                    )}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-lg">{brand.icon}</span>
                      <h4 className="font-semibold text-white text-sm">{brand.name}</h4>
                      {brand.highlighted && (
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary text-white font-semibold uppercase tracking-wide shadow-sm">
                          You're here
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{brand.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute -bottom-3 left-1/2 -translate-x-1/2",
            "sticker-card px-4 py-2 text-xs font-semibold bg-[hsl(var(--glaze-pink))]",
            "transition-all duration-700 delay-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Live AI Response Preview
        </div>
      </div>
    </div>
  );
}

export function ExecutionSection() {
  const { ref: sectionRef, isInView } = useInView(0.05);

  return (
    <section ref={sectionRef} id="execution" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[hsl(var(--glow-green))]" />
      <div className="absolute -left-24 top-10 w-[360px] h-[360px] bg-[hsl(var(--glow-purple))] rounded-full opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16",
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="poster-card inline-block px-6 py-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Here is <span className="highlight-pink">why</span> we build WebGlazer
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto">
              A tool that shows you how AI sees your brand—and gives you the playbook to become the answer.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <AISimulation />
          </div>

          <div
            className={cn(
              "order-1 lg:order-2 space-y-8",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="poster-card p-6 space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                We built this because we needed it ourselves.
              </h3>
              <p className="text-ink-secondary leading-relaxed">
                When we saw traffic from AI platforms overtaking traditional search for our own projects, we had no way to understand it. No dashboard. No insights. No strategy.
              </p>
              <p className="text-ink-secondary leading-relaxed">
                So we built one. What you see here is the same tool we use internally—now available to every brand navigating this shift.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {["Real-time monitoring of AI mentions across platforms", "Actionable data—not vanity metrics", "Built by practitioners, not observers"].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[hsl(var(--glaze-lime))] border-2 border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <p className="text-ink-secondary text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "max-w-5xl mx-auto",
            "transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">The industry is shifting. We're ready.</h3>
            <p className="text-sm md:text-base text-ink-secondary mt-3">
              We are not imagining it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="poster-card p-6">
              <div className="sticker-card bg-[hsl(var(--glaze-lime))] text-xs font-semibold px-3 py-1 inline-block mb-4 -rotate-1">
                Zero Clicks
              </div>
              <p className="text-ink-secondary leading-relaxed mb-6">
                "60% of searches now end without a click. If you aren't the cited answer, you aren't seen at all."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="HubSpot analyst"
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">HubSpot Research</p>
                  <p className="text-xs text-ink-secondary">Marketing Trends Report</p>
                </div>
              </div>
            </div>

            <div className="poster-card p-6">
              <div className="sticker-card bg-[hsl(var(--glaze-pink))] text-xs font-semibold px-3 py-1 inline-block mb-4 rotate-1">
                Marketing Shift
              </div>
              <p className="text-ink-secondary leading-relaxed mb-6">
                "We are moving from a world of search engine optimization to 'Search Everywhere Optimization.'"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="Neil Patel"
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Neil Patel</p>
                  <p className="text-xs text-ink-secondary">CMO & Co-Founder, NP Digital</p>
                </div>
              </div>
            </div>

            <div className="poster-card p-6">
              <div className="sticker-card bg-[hsl(var(--glaze-mint))] text-xs font-semibold px-3 py-1 inline-block mb-4 -rotate-1">
                Fuure is AI
              </div>
              <p className="text-ink-secondary leading-relaxed mb-6">
                "The future of search is not about lists of links. It's about getting the answer. It's about a shift from search engines to answer engines."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&w=80&h=80&q=80"
                  alt="Sam Altman"
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">Sam Altman</p>
                  <p className="text-xs text-ink-secondary">CEO, OpenAI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
