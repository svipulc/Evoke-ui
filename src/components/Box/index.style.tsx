import { cva } from "class-variance-authority";

export const boxStyle = cva("w-100", {
  variants: {
    padding: {
      none: "p-0",
      small: "p-4",
      medium: "p-8",
      large: "p-16",
    },
    border: {
      none: "border-none",
      thin: "border border-gray-300",
      thick: "border-2 border-gray-500",
    },
    borderRadius: {
      none: "rounded-none",
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
    },
    boxShadow: {
      none: "shadow-none",
      small: "shadow-sm",
      medium: "shadow-md",
      large: "shadow-lg",
    },
  },
  defaultVariants: {
    padding: "small",
    border: "none",
    borderRadius: "none",
    boxShadow: "none",
  },
});
