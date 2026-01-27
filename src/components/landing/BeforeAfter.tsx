import { beforeAfterData } from '../../data/mockData';

const BeforeAfter = () => {
  const { before, after } = beforeAfterData;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            The transformation
          </h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            See what changes when you start optimizing for AI search.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-surface rounded-2xl border border-border shadow-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">😫</span>
              <h3 className="text-xl font-semibold text-text-heading">{before.title}</h3>
            </div>

            <ul className="space-y-4">
              {before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-text">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center text-red-500 text-xs mt-0.5">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-surface rounded-2xl border border-border shadow-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-semibold text-text-heading">{after.title}</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-text">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center text-green-600 text-xs mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {after.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
