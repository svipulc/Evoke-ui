import { cva } from "class-variance-authority";

export const boxStyle = cva("flex justify-center", {
  variants: {
    backgroundColor: {
      default: "bg-transparent",
      primary: "bg-primary",
      secondary: "bg-secondary",
      lavender: "bg-lavender",
      silverSteel: "bg-silverSteel",
    },
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
    backgroundColor: "default",
    padding: "small",
    border: "thin",
    borderRadius: "small",
    boxShadow: "small",
  },
});
