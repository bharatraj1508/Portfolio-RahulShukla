/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-static-color": "#93BFCF",
        "header-moving-color": "#6096B4",
      },
      fontFamily: {
        montez: ["Montez"],
      },
    },
  },
  plugins: [],
};
