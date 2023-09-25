/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        "sf-pro-text": ["SF Pro Text", "sans-serif"],
        "sf-pro-display": ["SF Pro Display", "sans-serif"]
      }
    },
  },
  plugins: [],
}

