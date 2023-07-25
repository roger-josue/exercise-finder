/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-secondary': '#2a2a2a',
        primary: '#EF6622',
        secondary: '#4C8076',
        auxiliar: '#2F4858',
        extra: '#41537C',
        'bold-text': '#DFE0DF',
        text: '#DFE0DFCC'
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        serif: ['var(--font-roboto-serif)'],
      }
    },
  },
  plugins: [],
}
