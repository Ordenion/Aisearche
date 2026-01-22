module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        page: 'var(--color-page)',
      },
      boxShadow: {
        'card': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    }
  },
  plugins: []
};
