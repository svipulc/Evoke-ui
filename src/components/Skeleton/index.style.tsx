import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";
import { SkeletonVariants } from ".";

export const baseStyle = (theme: EvokeTheme) =>
  css({
    animation: "pulse 2s ease-in-out infinite",
    backgroundColor: theme.colors.neutral.border + theme.opacity.extraDark,
  });

const variantStyle = (theme: EvokeTheme, width?: string, height?: string) => ({
  circular: css({
    borderRadius: theme.borderRadius.full,
    height: height || theme.size["12"],
    width: width || theme.size["12"],
  }),
  rectangular: css({
    borderRadius: theme.borderRadius.medium,
    height: height || theme.size["12"],
    width: width || theme.size.full,
  }),
  text: css({
    borderRadius: theme.borderRadius.medium,
    height: height || theme.size["2"],
    width: width || theme.size.full,
  }),
});

export const skeletonStyle = (
  theme: EvokeTheme,
  variant: SkeletonVariants,
  width?: string,
  height?: string
) => {
  return css([baseStyle(theme), variantStyle(theme, width, height)[variant], width, height]);
};
