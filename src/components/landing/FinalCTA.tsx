const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-soft/10 via-surface to-lilac/10 rounded-3xl border border-border shadow-card p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-soft/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-lilac/20 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-4">
              Ready to work smarter?
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto mb-8">
              Join thousands of teams who've already transformed the way they work.
              Start free, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-text-on-primary font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Start free today
              </button>
              <button className="px-8 py-4 bg-surface text-text font-semibold rounded-xl border border-border hover:bg-surface-alt transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Talk to sales
              </button>
            </div>

            <p className="mt-6 text-sm text-text-muted">
              Free 14-day trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
