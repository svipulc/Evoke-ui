import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

export const containerWidthStyle = () => ({
  full: css({
    maxWidth: "100%",
  }),
  sm: css({
    maxWidth: "40vw",
  }),
  md: css({
    maxWidth: "50vw",
  }),
  lg: css({
    maxWidth: "60vw",
  }),
  xl: css({
    maxWidth: "70vw",
  }),
  "2xl": css({
    maxWidth: "85vw",
  }),
});

export const baseStyle = (theme: EvokeTheme) =>
  css({
    marginLeft: "auto",
    marginRight: "auto",
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      maxWidth: "100vw",
    },
  });

export const containerStyle = (
  maxWidth: keyof ReturnType<typeof containerWidthStyle>,
  theme: EvokeTheme
) => css([baseStyle(theme), containerWidthStyle()[maxWidth]]);
