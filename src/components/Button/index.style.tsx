import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { css } from "@emotion/react";
import { ButtonColor } from ".";
import { responsiveCss } from "@/utils";

const baseStyle = (theme: EvokeTheme, color: ButtonColor) =>
  css({
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.xsmall,
    borderRadius: theme.borderRadius.small,
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSizes.base,
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 2px ${theme.colors.neutral.background}, 0 0 0 4px ${theme.colors.variants[`${color}`].main}`,
    },
    "&:hover": {
      opacity: 0.9,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  });

export const sizeStyle = (theme: EvokeTheme) => ({
  xs: css({
    fontSize: theme.typography.fontSizes.xsmall,
    padding: `${theme.spacing.none} ${theme.spacing.xsmall}`,
    height: theme.size["8"],
  }),
  sm: css({
    fontSize: theme.typography.fontSizes.small,
    padding: `${theme.spacing.none} ${theme.spacing.small}`,
    height: theme.size["9"],
  }),
  md: css({
    fontSize: theme.typography.fontSizes.base,
    padding: `${theme.spacing.none} ${theme.spacing.medium}`,
    height: theme.size["10"],
  }),
  lg: css({
    fontSize: theme.typography.fontSizes.base,
    padding: `${theme.spacing.none} ${theme.spacing.large}`,
    height: theme.size["11"],
  }),
  xl: css({
    fontSize: theme.typography.fontSizes.base,
    padding: `${theme.spacing.none} ${theme.spacing.large}`,
    height: theme.size["12"],
  }),
  icon: css({
    padding: `${theme.spacing.small} ${theme.spacing.small}`,
    height: theme.size["10"],
  }),
});

export const variantStyle = (theme: EvokeTheme, color: ButtonColor) => ({
  solid: css({
    backgroundColor: theme.colors.variants[`${color}`].main,
    color: theme.colors.variants[`${color}`].contrastText || theme.colors.common.white,
    "&:hover": {
      background: theme.colors.variants[`${color}`].main,
    },
  }),
  outline: css({
    backgroundColor: "transparent",
    color: theme.colors.variants[`${color}`].main,
    border: `${theme.size["px"]} solid ${theme.colors.variants[`${color}`].main}`,
    "&:hover": {
      backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.light,
    },
  }),
  ghost: css({
    backgroundColor: "transparent",
    color: theme.colors.variants[`${color}`].main,
    "&:hover": {
      backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.light,
    },
  }),
  link: css({
    background: "none",
    color: theme.colors.variants[`${color}`].main,
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: theme.size["0.5"],
    },
  }),
  surface: css({
    backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.light,
    color: theme.colors.variants[`${color}`].main,
    border: `${theme.size["px"]} solid ${theme.colors.variants[`${color}`].main}`,
    "&:hover": {
      backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.mediumLight,
    },
  }),
  subtle: css({
    backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.light,
    color: theme.colors.variants[`${color}`].main,
    "&:hover": {
      backgroundColor: theme.colors.variants[`${color}`].main + theme.opacity.mediumLight,
    },
  }),
});

const colorStyle = (themes: EvokeTheme, color: ButtonColor) =>
  css({
    backgroundColor: themes.colors.variants[`${color}`].main,
    color: themes.colors.variants[`${color}`].main || themes.colors.common.white,
  });

export const buttonStyles = (
  theme: EvokeTheme,
  variant: ResponsiveValue<keyof ReturnType<typeof variantStyle>>,
  size: ResponsiveValue<keyof ReturnType<typeof sizeStyle>>,
  color: ButtonColor
) => {
  return css([
    baseStyle(theme, color),
    responsiveCss(theme, size, val => sizeStyle(theme)[val]),
    colorStyle(theme, color),
    responsiveCss(theme, variant, val => variantStyle(theme, color)[val]),
  ]);
};
