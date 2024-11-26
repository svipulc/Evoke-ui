import merge from "lodash.merge";
import { pallete } from "./pallete";
import {
  BorderRadiusObject,
  BreakpointsObject,
  ColorsObject,
  DeepPartial,
  EvokeTheme,
  ShadowsObject,
  SpacingObject,
  TypographyObject,
  ZIndexObject,
} from "./theme.type";

export const spacing: SpacingObject = {
  none: 0,
  xxsmall: "4px", // Base spacing * 1
  xsmall: "8px", // Base spacing * 2
  small: "12px", // Base spacing * 3
  medium: "16px", // Base spacing * 4
  large: "24px", // Base spacing * 6
  xlarge: "32px", // Base spacing * 8
  xxlarge: "64px", // Base spacing * 16
};

export const colors: ColorsObject = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  neutral: {
    background: pallete.gray["0"], // "#f8f9fa"
    foreground: pallete.gray["100"], // "#f1f3f5"
    border: pallete.gray["400"], // "#ced4da"
    text: pallete.gray["600"], // "#868e96"
    shadow: pallete.gray["900"], // "#212529"
  },
  variants: {
    primary: {
      main: pallete.blue["600"], // "#228be6"
      light: pallete.blue["400"], // "#4dabf7"
      dark: pallete.blue["800"], // "#1971c2"
    },
    secondary: {
      main: pallete.gray["600"], // "#868e96"
      light: pallete.gray["400"], // "#ced4da"
      dark: pallete.gray["800"], // "#343a40"
    },
    success: {
      main: pallete.green["600"], // "#40c057"
      light: pallete.green["400"], // "#69db7c"
      dark: pallete.green["800"], // "#2f9e44"
    },
    danger: {
      main: pallete.red["600"], // "#fa5252"
      light: pallete.red["400"], // "#ff8787"
      dark: pallete.red["800"], // "#e03131"
    },
    warning: {
      main: pallete.yellow["600"], // "#fab005"
      light: pallete.yellow["400"], // "#ffd43b"
      dark: pallete.yellow["800"], // "#f08c00"
    },
    info: {
      main: pallete.cyan["600"], // "#15aabf"
      light: pallete.cyan["400"], // "#3bc9db"
      dark: pallete.cyan["800"], // "#0c8599"
    },
    custom: {
      main: pallete.red["600"], // "#fa5252"
      light: pallete.red["400"], // "#ff8787"
      dark: pallete.red["800"], // "#e03131"
    },
  },
};

export const borderRadius: BorderRadiusObject = {
  none: 0,
  xsmall: "0.125rem", // 2px
  small: "0.25rem", // 4px
  medium: "0.375rem", // 6px
  large: "0.5rem", // 20px
  xlarge: "0.75rem", // 24px
  xxlarge: "1rem", // 32px
  full: "9999px",
};

export const shadows: ShadowsObject = {
  none: "none",
  small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xlarge: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

export const breakpoints: BreakpointsObject = {
  xs: "0",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

export const typography: TypographyObject = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSizes: {
    xsmall: "0.75rem", // 12px
    small: "0.875rem", // 14px
    base: "1rem", // 16px
    medium: "1.125rem", // 18px
    large: "1.25rem", // 20px
    xlarge: "1.5rem", // 24px
    xxlarge: "2rem", // 32px
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export const zIndex: ZIndexObject = {
  default: 0,
  low: 10,
  medium: 20,
  high: 30,
  higher: 40,
  highest: 50,
  auto: "auto",
};

export const defaultTheme: EvokeTheme = {
  colors,
  pallete,
  breakpoints,
  typography,
  borderRadius,
  shadows,
  spacing,
  zIndex,
};

export const createTheme = <CustomTheme extends DeepPartial<EvokeTheme>>(
  customTheme: CustomTheme = {} as CustomTheme
): EvokeTheme & CustomTheme => {
  const mergedTheme = merge({}, defaultTheme, customTheme);
  return mergedTheme as EvokeTheme & CustomTheme;
};
