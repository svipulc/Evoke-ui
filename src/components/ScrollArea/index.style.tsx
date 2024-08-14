import { cva } from "class-variance-authority";

export const scrollAreaStyles = cva(
  ["w-full", "h-full", "overflow-hidden", "scrollbar-container", "relative"],
  {
    variants: {
      orientation: {
        vertical: "hover:overflow-y-scroll",
        horizontal: "hover:overflow-x-scroll",
        both: "hover:overflow-auto",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);
