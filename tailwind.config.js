/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'propellaco-purple': '#48295B',
        'propellaco-sunray': '#E5C15C',
        'propellaco-black': '#000000',
        'propellaco-white': '#FFFFFF',
      },
      fontFamily: {
        'aquawax': ['Aquawax', 'sans-serif'],
        'candara': ['Candara', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'medium': '500',
        'black': '900',
      },
    },
  },
  plugins: [],
}
