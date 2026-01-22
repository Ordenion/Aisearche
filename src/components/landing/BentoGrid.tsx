import { useCases } from '../../data/mockData';

const BentoGrid = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for how you work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From automating daily tasks to scaling your operations,
            discover what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className={`
                group bg-white rounded-2xl border border-gray-100 shadow-card p-6
                hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200
                ${useCase.size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''}
              `}
            >
              {/* Badge */}
              {useCase.badge && (
                <span className={`
                  inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4
                  ${useCase.badge === 'Popular'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'}
                `}>
                  {useCase.badge}
                </span>
              )}

              {/* Image placeholder */}
              {useCase.hasImage && (
                <div className="mb-4 aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <span className="text-sm text-gray-400">Feature preview</span>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-gray-600">
                {useCase.description}
              </p>

              {/* Arrow link */}
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
