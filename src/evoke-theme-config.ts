import { createTheme } from "./theme/theme";

export type CustomTheme = typeof lightTheme;

export const lightTheme = createTheme({
  colors: {
    neutral: {
      text: "#000000",
      background: "#ffffff",
      border: "#d3d6db",
    },
    variants: {
      primary: {
        main: "#3366CC",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#FFFFFF",
        contrastText: "#000000",
      },
      levender: {
        main: "#D4BFFF",
      },
      silverSteel: {
        main: "#6b7280",
      },
      modalColor: {
        main: "#F4F4F9",
      },
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    neutral: {
      text: "#ffffff",
      background: "#24293C",
      border: "#4e5560",
    },
    variants: {
      primary: {
        main: "#AACCFF",
        contrastText: "#24293C",
      },
      secondary: {
        main: "#24293C",
        contrastText: "#ffffff",
      },
      levender: {
        main: "#E6E6FA",
      },
      silverSteel: {
        main: "#A7A9AA",
      },
      modalColor: {
        main: "#0F0E21",
      },
    },
  },
});
