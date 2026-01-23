import { pricingPlans } from '../../data/mockData';

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`
                bg-surface rounded-2xl border shadow-card p-8 relative
                hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200
                ${plan.highlighted
                  ? 'border-primary/30 ring-2 ring-primary/10'
                  : 'border-border'}
              `}
            >
              {/* Highlight badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-text-on-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-semibold text-text-heading mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-text-heading">{plan.price}</span>
                <span className="text-text-muted">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-text text-sm mb-6">
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                className={`
                  w-full py-3 px-4 rounded-xl font-semibold transition-all
                  ${plan.highlighted
                    ? 'bg-primary text-text-on-primary hover:bg-primary-hover shadow-lg shadow-primary/25'
                    : 'bg-surface-alt text-text hover:bg-border'}
                `}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-text">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full pricing link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center text-link font-medium hover:text-link-hover transition-colors"
          >
            Full pricing details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
