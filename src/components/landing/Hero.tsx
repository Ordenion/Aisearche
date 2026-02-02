import { Link } from 'react-router-dom';
import AnimatedCube from './AnimatedCube';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);
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
    <section className="min-h-[calc(100vh-5rem)] flex flex-col relative overflow-hidden">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center pt-16 lg:pt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-0">
          {/* Animated cube - first on mobile */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:scale-125">
            <AnimatedCube />
          </div>

          {/* Content - second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8 max-w-[600px]">
            <div className="space-y-6">
              <h1
                className={`font-bold text-text-heading leading-[0.98] tracking-[-0.02em] transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  fontSize: 'clamp(44px, 5vw, 72px)',
                  fontWeight: 800
                }}
              >
                Stop Chasing Clicks
                <span className="text-primary font-extrabold"> Let AI Close Sales For You</span>
              </h1>
              <p
                className={`text-[19px] leading-[1.5] text-text max-w-[60ch] transition-all duration-700 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                We audit your website's AI visibility and show exactly what to fix so your brand appears in ChatGPT, Gemini, and Perplexity answers.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 transition-all duration-700 ease-out delay-[400ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                to="/audit"
                className="px-8 py-4 bg-primary text-text-on-primary font-semibold text-[16px] rounded-xl hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-[2px] active:translate-y-0"
                style={{ fontWeight: 600 }}
              >
                Request free AI visibility audit
              </Link>
            </div>

            <div className={`flex flex-wrap gap-6 mt-12 opacity-60 transition-all duration-700 ease-out delay-[550ms] ${
              isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">{stat.label}</span>
                  <span className="text-xs font-semibold text-text">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Models footer pinned to bottom */}
      <div className={`border-t border-border bg-surface/50 opacity-70 relative z-20 transition-all duration-700 ease-out delay-[700ms] ${
        isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-around items-center">
            {models.map((model, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={model.image} alt={model.name} className="w-8 h-8 md:w-10 md:h-10 opacity-80"/>
                <span className="text-xs text-text-muted">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
