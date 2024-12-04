// Avatar component style

import { cva } from "class-variance-authority";

// Avatar
export const avatarStyles = cva(
  [
    // css style
    "w-full",
    "h-full",
    "flex justify-center items-center",
  ],
  {
    variants: {
      size: {
        //size
        sm: "w-12 h-12 text-sm",
        md: "w-14 h-14 text-md",
        lg: "w-16 h-16 text-lg",
      },
    },
    defaultVariants: {
      // default variants
      size: "md",
    },
  }
);

// Avatar Image
export const avatarImageStyle = cva([
  // css style
  "w-full",
  "h-full",
  "rounded-full",
  "object-cover",
  "ring-2 ring-light-secondary dark:ring-dark-secondary",
]);

// Avatar Fallback
export const avatarFallbackStyle = cva([
  // css style
  "w-full",
  "h-full",
  "rounded-full",
  "bg-light-silverSteel dark:bg-dark-silverSteel",
  "flex justify-center items-center",
  "text-light-primary dark:text-dark-primary",
]);
