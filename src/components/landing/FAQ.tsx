import React, { useState } from 'react';
import { faqs } from '../../data/mockData';

const FAQ = () => {
  const [openId, setOpenId] = useState(null as number | null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-text">
            Everything you need to know to get started.
          </p>
        </div>

        <div className="bg-surface rounded-2xl border border-border shadow-card overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`${index !== 0 ? 'border-t border-border' : ''}`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-alt transition-colors"
              >
                <span className="font-medium text-text-heading pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-surface-alt flex items-center justify-center text-text-muted transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openId === faq.id ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
