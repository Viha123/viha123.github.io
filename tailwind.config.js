/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#EAE3CC",
          150: "#F1EDD5"
        }
      },
    },
  },
  plugins: [],
}