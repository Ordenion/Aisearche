module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)'
      }
    }
  },
  plugins: []
};
