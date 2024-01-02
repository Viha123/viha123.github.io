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
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      theme: {
        extend: {
          // Add custom styles here
        },
      },
    },
  },
  plugins: [],
}