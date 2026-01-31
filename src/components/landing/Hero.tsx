import { Link } from 'react-router-dom';
import AnimatedCube from './AnimatedCube';

const Hero = () => {
  const models = [
    { image: '/models/chatgpt.svg', name: 'ChatGPT' },
    { image: '/models/gemini.svg', name: 'Gemini' },
    { image: '/models/perplexity.svg', name: 'Perplexity' },
    { image: '/models/claude.svg', name: 'Claude' }
  ];

  const stats = [
    { value: '50k+', label: 'Articles Created' },
    { value: '150+', label: 'Languages' },
    { value: '24/7', label: 'System Active' }
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-0">
          {/* Animated cube - first on mobile */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <AnimatedCube />
          </div>

          {/* Content - second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight">
                Stop Chasing Clicks
                <span className="text-primary"> Let AI Close Sales For You</span>
              </h1>
              <p className="text-xl text-text max-w-xl">
                We audit your website's AI visibility and show exactly what to fix so your brand appears in ChatGPT, Gemini, and Perplexity answers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/audit" className="px-6 py-3 bg-primary text-text-on-primary font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
                Request free AI visibility audit
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-text-muted">
                  <span className="text-sm">{stat.label}</span>
                  <span className="text-sm font-bold text-text-heading">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Models footer pinned to bottom */}
      <div className="border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-around items-center">
            {models.map((model, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={model.image} alt={model.name} className="w-10 h-10 md:w-12 md:h-12"/>
                <span className="text-sm text-text-muted">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
