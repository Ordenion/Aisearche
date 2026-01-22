import { personas } from '../../data/mockData';

const Personas = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for every team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a founder wearing many hats or part of a specialized team,
            we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-100 transition-colors">
                {persona.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {persona.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                {persona.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {persona.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center text-green-600 text-xs mt-0.5">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
