/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a',
        zincsoft: '#a1a1aa',
        acid: '#ff7a00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        poster: '-0.06em',
      },
      boxShadow: {
        glow: '0 0 80px rgba(255, 122, 0, 0.16)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(circle at top, rgba(255,122,0,0.18), transparent 38%)',
      },
    },
  },
  plugins: [],
}
