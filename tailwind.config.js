/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid': "url('./src/assets/background.png')",
        'grid-sm': "url('./src/assets/background_sm.png')"
      }
    },
  },
  plugins: [],
}

