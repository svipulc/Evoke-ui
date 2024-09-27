export type SpacingOptions =
  | "none"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "huge";

export type BreakPointOptions = "xs" | "sm" | "md" | "lg" | "xl";

export type ResponsiveValue<T> = T | { [key in BreakPointOptions]?: T };

export type GridColumnCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridRowCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const spacing: Record<SpacingOptions, string> = {
  none: "0px",
  tiny: "0.25rem", // 4px
  small: "0.5rem", // 8px
  medium: "1rem", // 16px
  large: "1.5rem", // 24px
  xlarge: "2rem", // 32px
  xxlarge: "2.5rem", // 40px
  huge: "3rem", // 48px
};

export const breakpoints: Record<BreakPointOptions, string> = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};
