import { beforeAfterData } from '../../data/mockData';

const BeforeAfter = () => {
  const { before, after } = beforeAfterData;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what changes when you switch to a smarter way of working.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">😫</span>
              <h3 className="text-xl font-semibold text-gray-900">{before.title}</h3>
            </div>

            <ul className="space-y-4">
              {before.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex-shrink-0 flex items-center justify-center text-red-500 text-xs mt-0.5">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-semibold text-gray-900">{after.title}</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {after.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center text-green-600 text-xs mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {after.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
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
