import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Is this just another AI tool?",
    answer:
      "No. It's a growth command center plugged into your existing funnels. We identify leaks, score urgency, and tell your team exactly what to execute next—in plain language. AI handles analysis, you handle implementation.",
  },
  {
    question: "Do I need to switch platforms?",
    answer:
      "Absolutely not. We plug into your current stack—landing pages, CRM, automations, payment processors—and diagnose where the money slips through. No migrations, no new dashboards for your team to learn.",
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
      <div className="absolute inset-0 bg-gradient-section opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Answers Before You Ask
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Straight talk about what we do, how it works, and what to expect.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="landing-card border border-border/60">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
