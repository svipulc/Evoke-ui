import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

export const typeStyle = () => ({
  solid: css({
    "::after": {
      borderStyle: "solid",
    },
  }),
  dashed: css({
    "::after": {
      borderStyle: "dashed",
    },
  }),
  dotted: css({
    "::after": {
      borderStyle: "dotted",
    },
  }),
});

export const baseStyle = (theme: EvokeTheme, alignment: "horizontal" | "vertical") =>
  css({
    position: "relative",
    backgroundColor: "inherit",
    "::after": {
      content: '""',
      display: "block",
      ...(alignment === "vertical"
        ? {
            borderLeft: `${theme.size["px"]} solid ${theme.colors.neutral.border}`,
            height: "100%",
            width: theme.size["0.5"],
            flex: "col",
          }
        : {
            width: "100%",
            height: theme.size.px,
            borderTop: `${theme.size["px"]} solid ${theme.colors.neutral.border}`,
          }),
    },
  });

export const dividerStyle = (
  theme: EvokeTheme,
  alignment: "horizontal" | "vertical",
  type: keyof ReturnType<typeof typeStyle>
) => {
  return css([baseStyle(theme, alignment), typeStyle()[type]]);
};

// Children styling with text alignment
export const dividerChildrenStyle = (
  theme: EvokeTheme,
  alignment: "horizontal" | "vertical",
  textAlign: "start" | "center" | "end"
) =>
  css({
    position: "absolute",
    backgroundColor: theme.colors.neutral.border,
    borderRadius: theme.borderRadius.medium,
    padding: `0 ${theme.spacing.xsmall}`,
    fontSize: theme.typography.fontSizes.small,
    whiteSpace: "nowrap",
    ...(alignment === "horizontal"
      ? {
          top: "50%",
          transform: "translateY(-50%)",
          ...(textAlign === "start"
            ? { left: theme.spacing.none }
            : textAlign === "end"
              ? { right: theme.spacing.none }
              : { left: "50%", transform: "translate(-50%, -50%)" }),
        }
      : {
          left: "50%",
          transform: "translateX(-50%)",
          ...(textAlign === "start"
            ? { top: theme.spacing.none }
            : textAlign === "end"
              ? { bottom: theme.spacing.none }
              : { top: "50%", transform: "translate(-50%, -50%)" }),
        }),
  });
