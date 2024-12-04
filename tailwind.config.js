/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    extend: {
      colors: {
        light: {
          primary: "#FFFFFF",
          secondary: "#3366CC",
          lavender: "#D4BFFF",
          silverSteel: "#6b7280",
          modalColor: "#F4F4F9",
        },
        dark: {
          primary: "#24293C",
          secondary: "#AACCFF",
          lavender: "#E6E6FA",
          silverSteel: "#A7A9AA",
          modalColor: "#0F0E21",
        },
      },
    },
  },
  plugins: [],
};
