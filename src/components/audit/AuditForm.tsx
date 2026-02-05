import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type AuditFormState = {
  fullName: string;
  websiteUrl: string;
  contactEmail: string;
};

const AuditForm = () => {
  const [form, setForm] = useState<AuditFormState>({
    fullName: "",
    websiteUrl: "",
    contactEmail: "",
  });

  const onChange = (key: keyof AuditFormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev: AuditFormState) => ({ ...prev, [key]: event.target.value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      fullName: form.fullName.trim(),
      websiteUrl: form.websiteUrl.trim(),
      contactEmail: form.contactEmail.trim(),
    };

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; error?: string }
        | null;

      if (!response.ok) {
        const message = data?.message || data?.error || `Request failed (${response.status})`;
        throw new Error(message);
      }

      setForm({ fullName: "", websiteUrl: "", contactEmail: "" });
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading tracking-tight">
            See WebGlazer in action
          </h2>
          <p className="mt-3 text-lg text-text-muted">
            Get your AI visibility audited — and get early access to WebGlazer.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 space-y-7">
          <div className="space-y-2">
            <label className="text-sm text-text-muted">Full name*</label>
            <input
              type="text"
              value={form.fullName}
              onChange={onChange("fullName")}
              placeholder="Enter your full name..."
              className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-text placeholder:text-[hsl(var(--ink-secondary))] outline-none focus:ring-2 focus:ring-[hsl(var(--glow-green))]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-text-muted">Website URL*</label>
            <input
              type="text"
              value={form.websiteUrl}
              onChange={onChange("websiteUrl")}
              placeholder="yourwebsite.com"
              className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-text placeholder:text-[hsl(var(--ink-secondary))] outline-none focus:ring-2 focus:ring-[hsl(var(--glow-green))]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-text-muted">Contact email*</label>
            <input
              type="email"
              value={form.contactEmail}
              onChange={onChange("contactEmail")}
              placeholder="Your email..."
              className="w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-text placeholder:text-[hsl(var(--ink-secondary))] outline-none focus:ring-2 focus:ring-[hsl(var(--glow-green))]"
              required
            />
          </div>

          <div className="pt-2 flex justify-end">
            <Button type="submit" variant="hero" size="xl">
              Get free AI audit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuditForm;
