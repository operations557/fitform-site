import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050b08',
          dark: '#081711',
          forest: '#0d2818',
          card: '#11281d',
          border: '#1f3a2a',
          gold: '#d4af37',
          'gold-light': '#f0d060',
          'gold-dim': '#a67c1a',
          'gold-muted': 'rgba(212,175,55,0.12)',
          white: '#f5f5f0',
          grey: '#9aa39d',
          success: '#22c55e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: { widest: '0.25em' },
    },
  },
  plugins: [],
};
export default config;
