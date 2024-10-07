import { SpacingOptions, breakpoints, spacing } from "@/theme";
import { css } from "@emotion/react";
import { StackProps } from ".";

// Function to generate responsive stack styles
export const stackResponsiveStyle = (
  input: Pick<StackProps, "spacing" | "direction" | "align" | "justify" | "wrap">
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
              ${field === "spacing" && `gap: ${spacing[val as SpacingOptions]};`}
              ${field === "direction" && `flex-direction: ${val};`}
              ${field === "align" && `align-items: ${val};`}
              ${field === "justify" && `justify-content: ${val};`}
              ${field === "wrap" && `flex-wrap: ${val};`}
            }
          `;
        });
      } else {
        // Handle non-responsive values
        res = css`
          ${res}
          ${field === "spacing" && `gap: ${spacing[value as SpacingOptions]};`}
          ${field === "direction" && `flex-direction: ${value};`}
          ${field === "align" && `align-items: ${value};`}
          ${field === "justify" && `justify-content: ${value};`}
          ${field === "wrap" && `flex-wrap: ${value};`}
        `;
      }
    }
  });

  return res;
};
