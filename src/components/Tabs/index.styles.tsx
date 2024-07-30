// Tabs component styles

import { cva } from "class-variance-authority";

// Tabs
export const tabsStyles = cva(
  [
    // css style
    "w-full",
    "h-full",
    "p-2",
  ],
  {
    variants: {
      variant: {
        // variant style
      },
      size: {
        // size
      },
    },
    compoundVariants: [
      // compound variant style
    ],
    defaultVariants: {
      // default variant style
    },
  }
);

// Tabs Content
export const tabsContentStyles = cva(
  [
    // css style
    "w-full",
    "h-full",
    "p-2",
    "mt-2",
  ],
  {
    variants: {
      variant: {
        // variant style
      },
      size: {
        // size
      },
    },
    compoundVariants: [
      // compound variant style
    ],
    defaultVariants: {
      // default variant style
    },
  }
);
