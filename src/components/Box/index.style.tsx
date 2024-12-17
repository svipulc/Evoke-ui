import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

export const borderStyle = (theme: EvokeTheme) => ({
  none: css({ border: theme.size[0] }),
  thin: css({ border: `${theme.size["px"]} solid ${theme.colors.neutral.border}` }),
  thick: css({ border: `${theme.size[0.5]} solid ${theme.colors.neutral.border}` }),
});

export const paddingStyle = (theme: EvokeTheme) => ({
  none: css({ padding: theme.spacing.none }),
  small: css({ padding: theme.spacing.small }),
  medium: css({ padding: theme.spacing.medium }),
  large: css({ padding: theme.spacing.large }),
});

export const borderRadiusStyle = (theme: EvokeTheme) => ({
  none: css({ borderRadius: theme.borderRadius.none }),
  small: css({ borderRadius: theme.borderRadius.small }),
  medium: css({ borderRadius: theme.borderRadius.medium }),
  large: css({ borderRadius: theme.borderRadius.xlarge }),
});

export const boxShadowStyle = (theme: EvokeTheme) => ({
  none: css({ boxShadow: "none" }),
  small: css({ boxShadow: theme.shadows.small }),
  medium: css({ boxShadow: theme.shadows.medium }),
  large: css({ boxShadow: theme.shadows.large }),
});

export const boxStyle = (
  theme: EvokeTheme,
  padding: keyof ReturnType<typeof paddingStyle>,
  border: keyof ReturnType<typeof borderStyle>,
  borderRadius: keyof ReturnType<typeof borderRadiusStyle>,
  boxShadow: keyof ReturnType<typeof boxShadowStyle>
) => {
  return css([
    paddingStyle(theme)[padding],
    borderStyle(theme)[border],
    borderRadiusStyle(theme)[borderRadius],
    boxShadowStyle(theme)[boxShadow],
  ]);
};
