import DemoPreview from './DemoPreview';
import { Link } from 'react-router-dom';

const Hero = () => {
  const bullets = [
    { icon: '🌐', text: 'Enter your website + email' },
    { icon: '⚡', text: 'We’ll send results within 48 hours' }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Center everything */}
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading leading-tight">
              Get found in
              <span className="text-primary"> ChatGPT</span>
            </h1>
            <p className="text-xl text-text mx-auto max-w-2xl">
              We audit your website’s AI visibility and show exactly what to fix so your brand appears in ChatGPT, Gemini, and Perplexity answers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/audit" className="px-6 py-3 bg-primary text-text-on-primary font-semibold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5">
              Request free AI visibility audit
            </Link>

            {/*
            <button className="px-6 py-3 bg-surface text-text font-semibold rounded-xl border border-border hover:bg-surface-alt transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <span className="flex items-center gap-2">
                <span>▶</span> Watch demo
              </span>
            </button>
            */}
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-2">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-text-muted">
                <span className="text-lg">{bullet.icon}</span>
                <span className="text-sm">{bullet.text}</span>
              </div>
            ))}
          </div>

          {/* Preview centered below */}
          {/*<div className="w-full max-w-4xl">
            <DemoPreview />
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
