/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EC', sand: '#E9E0D0', clay: '#A96545', moss: '#68745A',
        forest: '#283B32', bark: '#302B25', muted: '#77766A'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      boxShadow: { soft: '0 18px 55px rgba(43, 51, 40, .10)' }
    }
  },
  plugins: []
}
