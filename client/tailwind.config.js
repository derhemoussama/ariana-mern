/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a1897a",
        secondary: "#F5E5DF",
        customcolor: 'rgb(245,229,223)',
      },
      fontFamily: {
        skeina: ['Skeina', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};
