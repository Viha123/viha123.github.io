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
        },
        highlight: {
          pink: "#F472B6",     // Pink-400
          blue: "#60A5FA",     // Blue-400  
          purple: "#A78BFA",   // Purple-400
          cyan: "#22D3EE",     // Cyan-400
          green: "#86EFAC"     // Pastel green (Green-300)
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
      
      animation: {
        typewriter: 'typewriter 2s steps(24) forwards',
        caret: 'typewriter 2s steps(24) forwards, blink 1s steps(24) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },


    },
  },
  plugins: [],
}