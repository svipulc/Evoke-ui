import merge from "lodash.merge";
import { pallete } from "./pallete";
import {
  BorderRadiusObject,
  BreakpointsObject,
  ColorsObject,
  DeepPartial,
  EvokeTheme,
  OpacityObject,
  ShadowsObject,
  SpacingObject,
  TypographyObject,
  ZIndexObject,
} from "./theme.type";

const spacing: SpacingObject = {
  none: 0,
  xxsmall: "0.25rem", // 4px / 16 = 0.25rem
  xsmall: "0.5rem", // 8px / 16 = 0.5rem
  small: "0.75rem", // 12px / 16 = 0.75rem
  medium: "1rem", // 16px / 16 = 1rem
  large: "1.5rem", // 24px / 16 = 1.5rem
  xlarge: "2rem", // 32px / 16 = 2rem
  xxlarge: "4rem", // 64px / 16 = 4rem
};

const size = {
  // Absolute Sizes (rem-based for scalability)
  px: "1px", // 1px
  0: "0", // 0px
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  4.5: "1.125rem", // 18px
  5: "1.25rem", // 20px
  5.5: "1.375rem", // 22px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  7.5: "1.875rem", // 30px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  9.5: "2.375rem", // 38px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  15: "3.75rem", // 60px
  16: "4rem", // 64px
  18: "4.5rem", // 72px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  48: "12rem", // 192px
  56: "14rem", // 224px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px

  // Relative Sizes
  full: "100%", // Full width/height
  half: "50%", // Half width/height
  third: "33.333%", // One-third
  quarter: "25%", // One-fourth
  max: "max-content", // Content-based size
  min: "min-content", // Content-based size
  fit: "fit-content", // Shrinks to fit content

  // Viewport-Based Sizes
  screenW: "100vw", // Full viewport width
  screenH: "100vh", // Full viewport height

  // Container Sizes
  "container.sm": "640px",
  "container.md": "768px",
  "container.lg": "1024px",
  "container.xl": "1280px",
  "container.2xl": "1536px",
};

const colors: ColorsObject = {
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  neutral: {
    border: pallete.gray["300"],
    background: pallete.gray["100"],
    text: pallete.gray["900"],
    foreground: pallete.gray["800"],
    shadow: pallete.gray["400"],
  },
  variants: {
    primary: {
      main: pallete.indigo["700"],
      contrastText: "#ffffff",
    },
    secondary: {
      main: pallete.gray["700"],
      contrastText: "#ffffff",
    },
    success: {
      main: pallete.green["800"],
      contrastText: "#ffffff",
    },
    error: {
      main: pallete.red["700"],
      contrastText: "#ffffff",
    },
    warning: {
      main: pallete.yellow["800"],
      contrastText: "#ffffff",
    },
    info: {
      main: pallete.blue["700"],
      contrastText: "#ffffff",
    },
  },
};

const borderRadius: BorderRadiusObject = {
  none: 0,
  xsmall: "0.125rem", // 2px
  small: "0.25rem", // 4px
  medium: "0.375rem", // 6px
  large: "0.5rem", // 20px
  xlarge: "0.75rem", // 24px
  xxlarge: "1rem", // 32px
  full: "9999px",
};

const shadows: ShadowsObject = {
  none: "none",
  small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xlarge: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

const breakpoints: BreakpointsObject = {
  xs: "0",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

const typography: TypographyObject = {
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

const zIndex: ZIndexObject = {
  default: 0,
  low: 10,
  medium: 20,
  high: 30,
  higher: 40,
  highest: 50,
  auto: "auto",
};

const opacity: OpacityObject = {
  none: "00", // 0% opacity (completely transparent)
  extraLight: "0D", // ~5% opacity
  light: "1A", // ~10% opacity
  mediumLight: "33", // ~20% opacity
  medium: "4D", // ~30% opacity
  mediumDark: "80", // ~50% opacity
  dark: "B3", // ~70% opacity
  extraDark: "E6", // ~90% opacity
  full: "FF", // 100% opacity (completely opaque)
};

export const defaultTheme: EvokeTheme = {
  colors,
  pallete,
  breakpoints,
  typography,
  borderRadius,
  shadows,
  spacing,
  size,
  zIndex,
  opacity,
};

export const createTheme = <CustomTheme extends DeepPartial<EvokeTheme>>(
  customTheme: CustomTheme = {} as CustomTheme
): EvokeTheme & CustomTheme => {
  const mergedTheme = merge({}, defaultTheme, customTheme);
  return mergedTheme as EvokeTheme & CustomTheme;
};
