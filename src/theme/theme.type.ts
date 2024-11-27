// Utility Types
type ExtraProperty<T> = Record<string, T>;
type NoneField = { none: number | string };
export type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

// Theme-Related Types
type Units = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type BreakpointValue = "xs" | "sm" | "md" | "lg" | "xl";
type ZIndexValue = "default" | "low" | "medium" | "high" | "higher" | "highest" | "auto";

type ColorVariants = "main" | "light" | "dark";
type CommonColors = { white: string; black: string };
type NeutralColors = Record<string, string>; // Allows flexibility for neutral color keys
type ColorCategories = "success" | "danger" | "warning" | "info";
type ThematicColors = Record<ColorVariants, string>;

export type ColorsObject = {
  common: CommonColors;
  neutral: NeutralColors;
  variants: Record<ColorCategories, ThematicColors> & ExtraProperty<ThematicColors>;
};
export type PalleteObject = Record<
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "gray"
  | "orange"
  | "teal"
  | "cyan"
  | "pink"
  | "indigo",
  {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
>;

type TypographySizes = Record<Exclude<Units, "xxsmall"> | "base", string>;
type TypographyWeights = Record<
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black",
  number
>;
type TypographyLineHeight = Record<
  "none" | "tight" | "snug" | "normal" | "relaxed" | "loose",
  number
>;
type TypographyLetterSpacing = Record<
  "tighter" | "tight" | "normal" | "wide" | "wider" | "widest",
  string
>;

export type TypographyObject = {
  fontFamily: string;
  fontSizes: TypographySizes;
  fontWeight: TypographyWeights;
  lineHeight: TypographyLineHeight;
  letterSpacing: TypographyLetterSpacing;
};

export type OpacityScale =
  | "none"
  | "extraLight"
  | "light"
  | "mediumLight"
  | "medium"
  | "mediumDark"
  | "dark"
  | "extraDark"
  | "full";

// Component-Specific Types
export type SpacingObject = NoneField & Record<Exclude<Units, "full">, string>;
export type BorderRadiusObject = NoneField & Record<Exclude<Units, "xxsmall"> | "full", string>;
export type ShadowsObject = NoneField &
  Record<Exclude<Units, "xxsmall" | "xsmall" | "xxlarge" | "full">, string>;
export type BreakpointsObject = Record<BreakpointValue, string>;
export type ZIndexObject = Record<ZIndexValue, string | number>;
export type OpacityObject = Record<OpacityScale, string>;

// Base Theme
export interface EvokeTheme {
  colors: ColorsObject;
  spacing: SpacingObject;
  pallete: PalleteObject;
  borderRadius: BorderRadiusObject;
  shadows: ShadowsObject;
  breakpoints: BreakpointsObject;
  typography: TypographyObject;
  zIndex: ZIndexObject;
  opacity: OpacityObject;

}

// Theme Creation Utility
export type CreateTheme = <CustomTheme extends DeepPartial<EvokeTheme>>(
  customTheme: CustomTheme
) => EvokeTheme & CustomTheme;
