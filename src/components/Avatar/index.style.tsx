import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { responsiveCss } from "@/utils";
import { css } from "@emotion/react";

const baseStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const shapeStyle = (theme: EvokeTheme) => ({
  circular: css({
    borderRadius: theme.borderRadius.full,
  }),
  square: css({
    borderRadius: theme.borderRadius.medium,
  }),
});

export const sizeStyle = (theme: EvokeTheme) => ({
  xs: css({
    width: theme.size["8"],
    height: theme.size["8"],
  }),
  sm: css({
    width: theme.size["9"],
    height: theme.size["9"],
  }),
  md: css({
    width: theme.size["10"],
    height: theme.size["10"],
  }),
  lg: css({
    width: theme.size["11"],
    height: theme.size["11"],
  }),
  xl: css({
    width: theme.size["12"],
    height: theme.size["12"],
  }),
  "2xl": css({
    width: theme.size["14"],
    height: theme.size["14"],
  }),
  "3xl": css({
    width: theme.size["16"],
    height: theme.size["16"],
  }),
});

export const avatarStyles = (
  theme: EvokeTheme,
  size: ResponsiveValue<keyof ReturnType<typeof sizeStyle>>,
  shape: ResponsiveValue<keyof ReturnType<typeof shapeStyle>>
) => {
  return css([
    baseStyle,
    responsiveCss(theme, size, val => sizeStyle(theme)[val]),
    responsiveCss(theme, shape, val => shapeStyle(theme)[val]),
  ]);
};

export const avatarImageStyle = (theme: EvokeTheme) =>
  css({
    width: theme.size.full,
    height: theme.size.full,
    borderRadius: "inherit",
    objectFit: "cover",
    objectPosition: "center",
    overflow: "hidden",
  });

export const avatarFallbackStyle = (theme: EvokeTheme) =>
  css({
    width: theme.size.full,
    height: theme.size.full,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.neutral.border,
    borderRadius: "inherit",
    color: theme.colors.neutral.foreground,
  });
