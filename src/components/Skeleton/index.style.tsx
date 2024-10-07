import { cva } from "class-variance-authority";

export const skeletonStyle = cva(["animate-pulse", "bg-primary/30", "dark:bg-secondary/30"], {
  variants: {
    variant: {
      circular: "rounded-full h-10 w-10",
      rectangular: "rounded-sm w-full min-h-4",
      text: "text-base rounded-lg h-2 w-full",
    },
  },
  defaultVariants: {
    variant: "circular",
  },
});
