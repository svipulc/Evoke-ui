import { defaultTheme } from "@/theme/theme";
import { css } from "@emotion/react";
import { StackProps } from ".";
import { BreakpointsObject, EvokeTheme } from "@/theme/theme.type";

// Helper Function to get the style
const getStyle = (field: string, value: any) => {
  const { spacing } = defaultTheme;
  switch (field) {
    case "spacing":
      return `gap: ${spacing[value as keyof typeof spacing]};`;
    case "direction":
      return `flex-direction: ${value};`;
    case "align":
      return `align-items: ${value};`;
    case "justify":
      return `justify-content: ${value};`;
    case "wrap":
      return `flex-wrap: ${value};`;
    default:
      return "";
  }
};

// Function to generate responsive stack styles
export const stackResponsiveStyle = (
  input: Pick<StackProps, "spacing" | "direction" | "align" | "justify" | "wrap">
) => {
  const { breakpoints } = defaultTheme;
  // Initialize an empty css object
  let res = css``;

  Object.entries(input).forEach(([field, value]) => {
    if (value !== undefined) {
      // Handle responsive object values
      if (typeof value === "object") {
        Object.entries(value).forEach(([breakpoint, val]) => {
          const minWidth = breakpoints[breakpoint as keyof BreakpointsObject];
          res = css`
            ${res}
            @media (min-width: ${minWidth}) {
              ${getStyle(field, val)}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${getStyle(field, value)}
        `;
      }
    }
  });
  return res;
};

export const baseStyle = (theme: EvokeTheme) =>
  css({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.small,
  });
