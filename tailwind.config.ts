import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tengen: {
          white: '#f8f6f3',
          void: '#fefefe',
          crimson: '#b91c1c',
          blood: '#991b1b',
          scarlet: '#dc2626',
          ink: '#1c1917',
          ash: '#78716c',
          fog: '#e7e5e4',
        },
      },
      fontFamily: {
        display: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        title: ['"Inter"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        tengen: '2px 2px 0 0 rgba(185, 28, 28, 0.6)',
        panel: '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
