import { createTheme } from "./theme/theme";

export type CustomTheme = typeof lightTheme;

export const lightTheme = createTheme({
  colors: {
    variants: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#3366CC",
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
    variants: {
      primary: {
        main: "#24293C",
      },
      secondary: {
        main: "#AACCFF",
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
