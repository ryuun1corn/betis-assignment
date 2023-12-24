/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#D9D9D9",
        blue1: "#1A2B5D",
        black1: "#373737"
      },
      fontFamily: {
        "dancingScript": ["Dancing Script", "cursive"],
        "poppins": ['Poppins', "sans-serif"]
      },
    },
    
  },
  plugins: [],
}

