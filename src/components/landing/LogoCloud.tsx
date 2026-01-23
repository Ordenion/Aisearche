import { logoCloud } from '../../data/mockData';

const LogoCloud = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-2xl border border-border shadow-card p-8 md:p-12">
          <p className="text-center text-sm font-medium text-text-muted mb-8">
            Trusted by teams at innovative companies
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {logoCloud.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                {/* Placeholder logo */}
                <div className="flex items-center gap-2 text-text-faint hover:text-text-muted transition-colors">
                  <div className="w-8 h-8 bg-surface-alt rounded-lg flex items-center justify-center text-xs font-bold">
                    {company.charAt(0)}
                  </div>
                  <span className="text-sm font-medium hidden md:inline">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
