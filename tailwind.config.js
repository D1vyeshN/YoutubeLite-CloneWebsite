/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto"],
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}