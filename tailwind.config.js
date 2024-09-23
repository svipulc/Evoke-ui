/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#24293C",
        secondary: "#AACCFF",
        lavender: "#E6E6FA",
        silverSteel: "#A7A9AA",
        modalColor: "#0F0E21",
      },
    },
  },
  plugins: [],
};
