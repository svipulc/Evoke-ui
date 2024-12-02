import { CustomTheme } from "@/evoke-theme-config";
import { css } from "@emotion/react";

// Base styles for scroll area
const scrollAreaBase = css({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  border: "solid 3px transparent",
  scrollbarGutter: "stable both-edges",
});

// Scrollbar styles
const scrollbarStyles = (theme: CustomTheme) =>
  css({
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
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
const orientationVariants = (theme: CustomTheme) => ({
  vertical: css({
    overflowY: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflowY: "hidden",
      "&:hover": {
        overflowY: "scroll",
      },
    },
  }),
  horizontal: css({
    overflowX: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflowX: "hidden",
      "&:hover": {
        overflowX: "scroll",
      },
    },
  }),
  both: css({
    overflow: "auto",
    [`@media(min-width: ${theme.breakpoints.sm})`]: {
      overflow: "hidden",
      "&:hover": {
        overflow: "scroll",
      },
    },
  }),
});

// Function to get the appropriate styles based on the orientation
export const scrollAreaStyles = (
  theme: CustomTheme,
  orientation: "vertical" | "horizontal" | "both"
) => {
  return css([scrollAreaBase, scrollbarStyles(theme), orientationVariants(theme)[orientation]]);
};
