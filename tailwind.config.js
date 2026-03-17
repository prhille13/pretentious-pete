/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a18',
          light: '#2e2e2b',
          muted: '#6b6b65',
          faint: '#9e9e98',
        },
        paper: {
          DEFAULT: '#f7f5f0',
          warm: '#ede9e0',
          white: '#fdfcf9',
        },
        accent: {
          red: '#c0392b',
          gold: '#b8860b',
          slate: '#2c3e50',
        },
      },
      fontSize: {
        'headline': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'subhead': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
