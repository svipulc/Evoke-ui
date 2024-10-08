// Tabs component styles
import { cva } from "class-variance-authority";

// Tabs
export const tabsStyles = cva(["tabs", "w-full", "h-full", "p-2", "rounded-md"], {
  variants: {
    border: {
      true: "border border-light-silverSteel/20 dark:border-silverSteel",
      false: "border-none",
    },
    direction: {
      horizontal: "flex-col",
      vertical: "flex flex-row gap-2",
    },
  },
  defaultVariants: {
    border: false,
    direction: "horizontal",
  },
});

// Tabs List
export const tabsListStyles = cva(
  ["tabs-list", "relative", "w-full", "h-full", "selection-none", "overflow-hidden"],
  {
    variants: {
      isFitted: {
        true: "",
        false: "sm:w-auto",
      },
      direction: {
        horizontal: "flex flex-row flex-nowrap mb-2 py-2 gap-x-2  hover:overflow-x-auto",
        vertical: "flex flex-col min-w-fit sm:mr-4 px-2  hover:overflow-y-auto",
      },
    },
    defaultVariants: {
      isFitted: false,
      direction: "horizontal",
    },
  }
);

// Tabs Trigger
export const tabsTriggerStyles = cva(
  [
    "tabs-trigger",
    "p-2",
    "text-md",
    "text-nowrap",
    "rounded-md",
    "transition-colors duration-200",
    "hover:bg-light-silverSteel/10",
    "dark:hover:bg-silverSteel",
  ],
  {
    variants: {
      active: {
        true: "dark:text-white text-light-secondary hover:bg-light-secondary dark:hover:bg-secondary hover:text-light-primary dark:hover:text-primary",
        false: "text-light-silverSteel dark:text-silverSteel dark:hover:text-white",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      isFitted: {
        true: "flex-1 text-center",
        false: "",
      },
      direction: {
        horizontal: "first:ms-2 last:mr-2",
        vertical: "mb-2 first:mt-2 last:mb-0",
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
      isFitted: false,
      direction: "horizontal",
    },
  }
);

// Tabs Content
export const tabsContentStyles = cva(
  ["tabs-content", "w-full", "h-full", "p-1", "dark:text-white"],
  {
    variants: {
      direction: {
        horizontal: "",
        vertical: "mt-2 overflow-auto",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  }
);

// Tabs indicator
export const tabsIndicatorStyles = cva(
  [
    "absolute",
    "bg-light-secondary dark:bg-secondary",
    "rounded-full",
    "transition-all duration-300 ease-in-out",
    "h-[2px]",
  ],
  {
    variants: {
      direction: {
        horizontal: "bottom-0 mb-[2px] w-0",
        vertical: "right-0 w-[2px] mr-[2px]",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  }
);
