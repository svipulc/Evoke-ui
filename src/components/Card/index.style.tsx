import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

const baseStyle = (theme: EvokeTheme) =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.colors.neutral.text,
    width: theme.size.full,
    borderRadius: theme.borderRadius.medium,
  });

export const variantStyle = (theme: EvokeTheme) => ({
  subtle: css({
    backgroundColor: theme.colors.neutral.border + theme.opacity.mediumDark,
  }),
  outline: css({
    backgroundColor: theme.colors.neutral.background,
    border: `${theme.size["px"]} solid  ${theme.colors.neutral.border}`,
  }),
  elevated: css({
    backgroundColor: theme.colors.neutral.background,
    boxShadow: theme.shadows.medium,
  }),
});

// Card Style
export const cardStyle = (theme: any, variant: keyof ReturnType<typeof variantStyle>) => {
  return css([baseStyle(theme), variantStyle(theme)[variant]]);
};

// Card Header Style
export const cardHeaderStyle = (theme: EvokeTheme) =>
  css({
    width: theme.size.full,
    padding: theme.spacing.large,
    paddingBottom: theme.spacing.none,
  });

// Card Content Style
export const cardContentStyle = (theme: EvokeTheme) =>
  css({
    display: "flex",
    gap: theme.spacing.small,
    flexDirection: "column",
    flexGrow: 1,
    width: theme.size.full,
    padding: theme.spacing.large,
  });

// Card Footer Style
export const cardFooterStyle = (theme: EvokeTheme) =>
  css({
    width: theme.size.full,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing.small,
    padding: theme.spacing.large,
    paddingTop: theme.spacing.none,
  });
