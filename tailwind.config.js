/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#E6E5EA",
          200: "#817D92",
          300: "#24232C",
          400: "#18171F",
        },
        accent: {
          green: "#A4FFAF",
          red: "#F64A4A",
          orange: "#FB7C58",
          yellow: "#F8CD65",
        },
      },
      fontFamily: {
        serif: ["JetBrains Mono", "serif"],
      },
    },
  },
  plugins: [],
};
