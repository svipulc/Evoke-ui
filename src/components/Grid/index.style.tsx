import { css } from "@emotion/react";
import { GridItemProps, GridProps } from ".";
import { defaultTheme } from "@/index";
import { BreakpointsObject } from "@/theme/theme.type";

export const gridBaseStyle = css({
  display: "grid",
});

// Helper function to get CSS styles based on field and value
const getGridStyle = (field: string, value: any, spacing: any) => {
  switch (field) {
    case "columns":
      return `grid-template-columns: repeat(${value}, 1fr);`;
    case "rows":
      return `grid-template-rows: repeat(${value}, 1fr);`;
    case "rowSpacing":
      return `grid-row-gap: ${spacing[value as keyof typeof spacing]};`;
    case "columnSpacing":
      return `grid-column-gap: ${spacing[value as keyof typeof spacing]};`;
    case "spacing":
      return `grid-gap: ${spacing[value as keyof typeof spacing]}`;
    default:
      return "";
  }
};

// Helper function to get CSS styles for grid items based on field and value
const getGridItemStyle = (field: string, value: any) => {
  switch (field) {
    case "columnSpan":
      return `grid-column: span ${value};`;
    case "rowSpan":
      return `grid-row: span ${value};`;
    case "columnOffset":
      return `grid-column-start: ${value};`;
    case "rowOffset":
      return `grid-row-start: ${value};`;
    default:
      return "";
  }
};

// Function to generate responsive grid styles
export const gridResponsiveStyle = (
  input: Pick<GridProps, "columns" | "rows" | "spacing" | "rowSpacing" | "columnSpacing">
) => {
  const { spacing, breakpoints } = defaultTheme;
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
              ${getGridStyle(field, val, spacing)}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${getGridStyle(field, value, spacing)}
        `;
      }
    }
  });
  return res;
};

// Function to generate responsive grid item styles
export const gridItemResponsiveStyle = (
  input: Pick<GridItemProps, "columnOffset" | "columnSpan" | "rowOffset" | "rowSpan">
) => {
  // Initialize an empty css object
  let res = css``;
  const { breakpoints } = defaultTheme;

  Object.entries(input).forEach(([field, value]) => {
    if (value !== undefined) {
      // Handle responsive object values
      if (typeof value === "object") {
        Object.entries(value).forEach(([breakpoint, val]) => {
          const minWidth = breakpoints[breakpoint as keyof typeof breakpoints];

          res = css`
            ${res}
            @media (min-width: ${minWidth}) {
              ${getGridItemStyle(field, val)}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${getGridItemStyle(field, value)}
        `;
      }
    }
  });
  return res;
};
