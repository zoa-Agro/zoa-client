/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        white: '#ffffff', // Set white as the background color
      },
    },
  },
  plugins: [require("daisyui")],
}

