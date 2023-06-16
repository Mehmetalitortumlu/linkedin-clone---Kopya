/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#0a66c2"
        },
        oranges: "#915907"
      }
    },
  },
  plugins: [],
}