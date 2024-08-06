// Tabs component styles

import { cva } from "class-variance-authority";

// Tabs
export const tabsStyles = cva(
  [
    // css style
    "tabs",
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

// Tabs List
export const tabsListStyles = cva(
  [
    // css style
    "tabs-list",
    "w-full",
    "inline-flex gap-4",
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

// Tabs Trigger
export const tabsTriggerStyles = cva(
  [
    // css style
    "tabs-trigger",
    "p-2",
    "text-md",
    "relative",
  ],
  {
    variants: {
      active: {
        true: "dark:text-white text-primary",
        false: "text-gray-500 dark:text-silverSteel",
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
    "tabs-content",
    "w-full",
    "h-full",
    "p-2",
    "dark:text-white",
    "min-h-10",
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

// Tabs indicator

export const tabsIndicatorStyles = cva(
  [
    // css style
    "absolute",
    "bottom-0 left-0 right-0 h-1",
    "bg-primary dark:bg-secondary",
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
