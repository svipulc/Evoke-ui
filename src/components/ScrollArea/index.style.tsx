import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

// Base styles for scroll area
const scrollAreaBase = (theme: EvokeTheme) =>
  css({
    width: theme.size.full,
    height: theme.size.full,
    overflow: "hidden",
    position: "relative",
    border: `${theme.size[0.5]} solid transparent`,
    scrollbarGutter: "stable both-edges",
  });

// Scrollbar styles
const scrollbarStyles = (theme: EvokeTheme) =>
  css({
    "&::-webkit-scrollbar": {
      width: theme.size[2],
      height: theme.size[2],
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: theme.colors.neutral.border,
      borderRadius: theme.borderRadius.medium,
    },
  });

// Orientation variant styles
const orientationVariants = (theme: EvokeTheme) => ({
  vertical: css({
    overflowY: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflowY: "hidden",
      "&:hover": {
        overflowY: "auto",
      },
    },
  }),
  horizontal: css({
    overflowX: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflowX: "hidden",
      "&:hover": {
        overflowX: "auto",
      },
    },
  }),
  both: css({
    overflow: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflow: "hidden",
      "&:hover": {
        overflow: "auto",
      },
    },
  }),
});

// Function to get the appropriate styles based on the orientation
export const scrollAreaStyles = (
  theme: EvokeTheme,
  orientation: "vertical" | "horizontal" | "both"
) => {
  return css([
    scrollAreaBase(theme),
    scrollbarStyles(theme),
    orientationVariants(theme)[orientation],
  ]);
};
