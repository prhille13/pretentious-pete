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
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a18',
          light: '#2e2e2b',
          muted: '#6b6b65',
          faint: '#9e9e98',
        },
        paper: {
          DEFAULT: '#faf9f6',
          warm: '#f0ede6',
        },
        rule: '#d4d0c8',
        red: '#c0392b',
        gold: '#b8860b',
        slate: '#2c3e50',
      },
    },
  },
  plugins: [],
};
