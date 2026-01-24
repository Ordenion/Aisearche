import DemoPreview from './DemoPreview';

const Hero = () => {
  const bullets = [
    { icon: '💳', text: 'No credit card required' },
    { icon: '⚡', text: 'Setup in minutes' },
    { icon: '✓', text: 'Cancel anytime' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight">
                Ship slowe,
                <span className="text-primary"> stress less</span>
              </h1>
              <p className="text-xl text-text max-w-lg">
                The all-in-one platform that helps teams automate workflows,
                centralize knowledge, and focus on what matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-text-on-primary font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Start free
              </button>
              <button className="px-6 py-3 bg-surface text-text font-semibold rounded-xl border border-border hover:bg-surface-alt transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  <span>▶</span> Watch demo
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-2 text-text-muted">
                  <span className="text-lg">{bullet.icon}</span>
                  <span className="text-sm">{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:pl-8">
            <DemoPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
