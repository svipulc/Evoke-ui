import { cva } from "class-variance-authority";

export const stackStyle = cva(["flex", "w-full", "p-2"], {
  variants: {
    direction: {
      row: ["flex-row", "sm:flex-col", "md:flex-row"],
      column: ["flex-col", "sm:flex-row", "md:flex-col"],
      "row-reverse": ["flex-row-reverse", "sm:flex-col-reverse", "md:flex-row-reverse"],
      "column-reverse": ["flex-col-reverse", "sm:flex-row-reverse", "md:flex-col-reverse"],
    },
    spacing: {
      none: "gap-0",
      small: ["gap-1", "sm:gap-2", "md:gap-3"],
      medium: ["gap-2", "sm:gap-4", "md:gap-6"],
      large: ["gap-3", "sm:gap-6", "md:gap-8"],
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    direction: "column",
    spacing: "medium",
    align: "start",
    justify: "start",
    wrap: "wrap",
  },
});
