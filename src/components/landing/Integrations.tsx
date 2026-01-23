import { integrations } from '../../data/mockData';

const Integrations = () => {
  return (
    <section id="integrations" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-2xl border border-border shadow-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
                Connect your stack
              </h2>
              <p className="text-lg text-text">
                Seamlessly integrate with the tools your team already uses.
                No more switching between apps or manual data entry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-text">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">✓</span>
                  50+ native integrations
                </li>
                <li className="flex items-center gap-3 text-text">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">✓</span>
                  2-way sync in real-time
                </li>
                <li className="flex items-center gap-3 text-text">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm">✓</span>
                  Custom API for anything else
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-link font-medium hover:text-link-hover transition-colors"
              >
                Browse all integrations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right column - Icons grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="group bg-surface-alt hover:bg-surface rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-border hover:border-primary/20 hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </span>
                  <span className="text-xs text-text font-medium text-center">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
