import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { responsiveCss } from "@/utils";
import { css } from "@emotion/react";

export const positionStyle = (theme: EvokeTheme) => ({
  top: css({
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: theme.spacing.xsmall,
  }),
  bottom: css({
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: theme.spacing.xsmall,
  }),
  left: css({
    top: "50%",
    right: "100%",
    transform: "translateY(-50%)",
    marginRight: theme.spacing.xsmall,
  }),
  right: css({
    top: "50%",
    left: "100%",
    transform: "translateY(-50%)",
    marginLeft: theme.spacing.xsmall,
  }),
  topStart: css({
    bottom: "100%",
    left: "0%",
    transform: "translateX(0%)",
    marginBottom: theme.spacing.xsmall,
  }),
  topEnd: css({
    bottom: "100%",
    right: "0%",
    transform: "translateX(0%)",
    marginBottom: theme.spacing.xsmall,
  }),
  bottomStart: css({
    top: "100%",
    left: "0%",
    transform: "translateX(0%)",
    marginTop: theme.spacing.xsmall,
  }),
  bottomEnd: css({
    top: "100%",
    right: "0%",
    transform: "translateX(0%)",
    marginTop: theme.spacing.xsmall,
  }),
  leftStart: css({
    top: "0%",
    right: "100%",
    transform: "translateY(0%)",
    marginRight: theme.spacing.xsmall,
  }),
  leftEnd: css({
    bottom: "0%",
    right: "100%",
    transform: "translateY(0%)",
    marginRight: theme.spacing.xsmall,
  }),
  rightStart: css({
    top: "0%",
    left: "100%",
    transform: "translateY(0%)",
    marginLeft: theme.spacing.xsmall,
  }),
  rightEnd: css({
    bottom: "0%",
    left: "100%",
    transform: "translateY(0%)",
    marginLeft: theme.spacing.xsmall,
  }),
});

export const baseStyle = (theme: EvokeTheme) =>
  css({
    position: "absolute",
    visibility: "hidden",
    opacity: 0,
    zIndex: theme.zIndex.higher,
    transition: "opacity 0.3s",
    transitionDelay: "1s",
    whiteSpace: "normal",
    wordBreak: "break-word",
    maxWidth: "200px",
    width: "max-content",
    padding: `${theme.spacing.xxsmall} ${theme.spacing.xsmall}`,
    borderRadius: theme.borderRadius.small,
    backgroundColor: theme.colors.common.black,
    color: theme.colors.common.white,
    fontSize: theme.typography.fontSizes.xsmall,
  });

export const tooltipParentStyle = css({
  position: "relative",
  display: "inline-block",
  // tooltip should be visible when hovered (mouse accessibility)
  "&:hover .tooltip": {
    visibility: "visible",
    opacity: 1,
  },
  // tooltip should be visible when focused (keyboard accessibility)
  "&:focus-within .tooltip": {
    visibility: "visible",
    opacity: 1,
  },
});

export const tooltipStyle = (
  theme: EvokeTheme,
  position: ResponsiveValue<keyof ReturnType<typeof positionStyle>>
) => {
  return css([baseStyle(theme), responsiveCss(theme, position, val => positionStyle(theme)[val])]);
};
