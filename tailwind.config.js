/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url('./src/assets/background.png')"
      }
    },
  },
  plugins: [],
}

