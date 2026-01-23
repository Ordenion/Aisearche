module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
        },
        lilac: 'var(--color-lilac)',
        
        // Neutrals
        'page-bg': 'var(--color-page-bg)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          alt: 'var(--color-surface-alt)',
        },
        border: 'var(--color-border)',
        
        // Text
        text: {
          DEFAULT: 'var(--color-text)',
          heading: 'var(--color-text-heading)',
          muted: 'var(--color-text-muted)',
          faint: 'var(--color-text-faint)',
          'on-primary': 'var(--color-text-on-primary)',
        },
        link: {
          DEFAULT: 'var(--color-link)',
          hover: 'var(--color-link-hover)',
        },

        // Legacy
        background: 'var(--color-bg)',
        card: 'var(--color-card)',
        accent: 'var(--color-accent)',
        page: 'var(--color-page)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-hover)',
        'glow': 'var(--glow-accent)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-premium': 'var(--gradient-premium)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    }
  },
  plugins: []
};
