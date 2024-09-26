import { SpacingOptions, breakpoints, spacing } from "@/theme";
import { css } from "@emotion/react";
import { GridItemProps, GridProps } from ".";

// Function to generate responsive grid styles
export const gridResponsiveStyle = (
  input: Pick<GridProps, "columns" | "rows" | "spacing" | "rowSpacing" | "columnSpacing">
) => {
  // Initialize an empty css object
  let res = css``;

  Object.entries(input).forEach(([field, value]) => {
    if (value !== undefined) {
      // Handle responsive object values
      if (typeof value === "object") {
        Object.entries(value).forEach(([breakpoint, val]) => {
          const minWidth = breakpoints[breakpoint as keyof typeof breakpoints];
          res = css`
            ${res}
            @media (min-width: ${minWidth}) {
              ${field === "columns" && `grid-template-columns: repeat(${val}, 1fr);`}
              ${field === "rows" && `grid-template-rows: repeat(${val}, 1fr);`}
                ${field === "rowSpacing" && `grid-row-gap: ${spacing[val as SpacingOptions]};`}
                ${field === "columnSpacing" &&
              `grid-column-gap: ${spacing[val as SpacingOptions]};`}
                ${field === "spacing" && `grid-gap: ${spacing[val as SpacingOptions]};`}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${field === "columns" && `grid-template-columns: repeat(${value}, 1fr);`}
            ${field === "rows" && `grid-template-rows: repeat(${value}, 1fr);`}
            ${field === "rowSpacing" && `grid-row-gap: ${spacing[value as SpacingOptions]};`}
            ${field === "columnSpacing" && `grid-column-gap: ${spacing[value as SpacingOptions]};`}
            ${field === "spacing" && `grid-gap: ${spacing[value as SpacingOptions]};`}
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

  Object.entries(input).forEach(([field, value]) => {
    if (value !== undefined) {
      // Handle responsive object values
      if (typeof value === "object") {
        Object.entries(value).forEach(([breakpoint, val]) => {
          const minWidth = breakpoints[breakpoint as keyof typeof breakpoints];

          res = css`
            ${res}
            @media (min-width: ${minWidth}) {
              ${field === "columnSpan" && `grid-column: span ${val};`}
              ${field === "rowSpan" && `grid-row: span ${val};`}
              ${field === "columnOffset" && `grid-column-start: ${val};`}
              ${field === "rowOffset" && `grid-row-start: ${val};`}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${field === "columnSpan" && `grid-column: span ${value};`}
          ${field === "rowSpan" && `grid-row: span ${value};`}
          ${field === "columnOffset" && `grid-column-start: ${value};`}
          ${field === "rowOffset" && `grid-row-start: ${value};`}
        `;
      }
    }
  });
  return res;
};
