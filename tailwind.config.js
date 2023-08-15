/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-static-color": "#FFF9DE",
        "header-moving-color": "#2A2F4F",
        "card-color": "#D8D9DA",
      },
      fontFamily: {
        montez: ["Montez"],
        bungee: ["Bungee Shade"],
      },
    },
  },
  plugins: [],
};
