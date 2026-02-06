import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Is this just another SEO tool?",
    answer:
      "Traditional SEO focuses on improving a website's ranking in search engine results pages (SERPs) using keywords and backlinks. GEO, on the other hand, aims to influence the generation of AI-driven answers and search results by optimizing content for AI-powered search engines. While traditional SEO targets click-through rates by positioning web pages higher in link-based results, GEO prioritizes creating content that AI systems can synthesize and cite within their conversational responses. This fundamental shift reflects how users increasingly seek direct answers from AI rather than browsing multiple websites, requiring content creators to optimize for AI comprehension and attribution rather than traditional ranking signals.",
  },
  {
    question: "What Is Answer Engine Optimization/ Generative Engine Optimization?",
    answer:
      "Answer Engine Optimization (AEO), also known as Generative Engine Optimization (GEO), is the practice of optimizing your brand's content and digital presence to appear in AI-powered answer engines like Gemini, ChatGPT, Claude, Perplexity... Unlike traditional SEO which focuses on ranking in search results, AEO ensures your products, services, and brand information are accurately represented when AI systems generate responses to user queries. Success in AEO requires two critical elements: creating optimized GEO content that's structured for AI comprehension (including clear product descriptions, detailed specifications, FAQ formats, and comparison data), and ensuring this content is cited across a broad range of authoritative sources. Answer engines typically synthesize information from multiple websites, reviews, articles, and databases to build confidence in their responses.",
  },
  {
    question: "How fast will we see results?",
    answer:
      "Most teams spot their first revenue leak within the first week. The real magic is in the compounding effect—solving one leak reveals the next. It's a continuous conversion optimization engine.",
  },
  {
    question: "Who is this actually for?",
    answer:
      "B2B and B2C companies doing $30k+/mo in revenue who need their funnel performing like a top-tier growth squad is behind it. If you're tired of guessing what to fix next, this is for you.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-[55%] bg-[hsl(var(--glow-purple))]" />
      <div className="absolute -right-24 top-10 w-[320px] h-[320px] bg-[hsl(var(--glow-green))] rounded-full opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="poster-card inline-block px-6 py-5">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 text-balance">
              Answers Before You Ask
            </h2>
            <p className="text-lg text-ink-secondary text-balance">
              Straight talk about what we do, how it works, and what to expect.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="poster-card">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-ink-secondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
