import { useState } from 'react';

const AuditForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    websiteUrl: '',
    contactEmail: '',
  });

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

   const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const payload = {
      fullName: form.fullName.trim(),
      websiteUrl: form.websiteUrl.trim(),
      contactEmail: form.contactEmail.trim(),
    };



    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; message?: string; error?: string }
      | null;

      if (!res.ok) {
        const msg = data?.message || data?.error || `Request failed (${res.status})`;
        throw new Error(msg);
      }

      // optional: clear the form on success
      setForm({ fullName: '', websiteUrl: '', contactEmail: '' });
    } catch (err) {
      // replace with your toast/ui handling
      console.error(err);
      alert(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* centered header */}
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
              onChange={onChange('fullName')}
              placeholder="Enter your full name..."
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text placeholder:text-text-muted/70 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-text-muted">Website URL*</label>
            <input
              type="text"
              value={form.websiteUrl}
              onChange={onChange('websiteUrl')}
              placeholder="yourwebsite.com"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text placeholder:text-text-muted/70 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-text-muted">Contact email*</label>
            <input
              type="email"
              value={form.contactEmail}
              onChange={onChange('contactEmail')}
              placeholder="Your email..."
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text placeholder:text-text-muted/70 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
              required
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-text-on-primary font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Get free AI audit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuditForm;
