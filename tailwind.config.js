/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth :{
        container : '1250px'
    },
    fontFamily: {
      'moderustic': ['"Moderustic"', "sans-serif"],
    },
    },
  },
  plugins: [],
}