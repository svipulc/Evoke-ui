import { EvokeTheme, ResponsiveValue, SpacingObject } from "@/theme/theme.type";
import { responsiveCss } from "@/utils";
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
export const cardStyle = (theme: EvokeTheme, variant: keyof ReturnType<typeof variantStyle>) => {
  return css([baseStyle(theme), variantStyle(theme)[variant]]);
};

// Card Header Style
export const cardHeaderStyle = (theme: EvokeTheme, padding: ResponsiveValue<keyof SpacingObject>) =>
  css([
    responsiveCss(theme, padding, val =>
      css({
        padding: theme.spacing[val],
      })
    ),
    css({
      width: theme.size.full,
      paddingBottom: theme.spacing.none,
    }),
  ]);

// Card Content Style
export const cardContentStyle = (
  theme: EvokeTheme,
  padding: ResponsiveValue<keyof SpacingObject>
) =>
  css([
    responsiveCss(theme, padding, val =>
      css({
        padding: theme.spacing[val],
      })
    ),
    css({
      display: "flex",
      gap: theme.spacing.medium,
      flexDirection: "column",
      flexGrow: 1,
      width: theme.size.full,
      padding: theme.spacing.large,
    }),
  ]);

// Card Footer Style
export const cardFooterStyle = (theme: EvokeTheme, padding: ResponsiveValue<keyof SpacingObject>) =>
  css([
    responsiveCss(theme, padding, val =>
      css({
        padding: theme.spacing[val],
      })
    ),
    css({
      width: theme.size.full,
      paddingTop: theme.spacing.none,
    }),
  ]);
