import { cva } from "class-variance-authority";

export const avatarStyles = cva(
  [
    // css style
    "w-full",
    "h-full",
    "flex justify-center items-center",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
      size: "md",
    },
  }
);
export const avatarImageStyle = cva(
  [
    // css style
    "w-full",
    "h-full",
    "rounded-full",
    "object-cover",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
    },
  }
);
export const avatarFallbackStyle = cva(
  [
    // css style
    "w-full",
    "h-full",
    "rounded-full",
    "bg-silverSteel",
    "animate-pulse",
  ],
  {
    variants: {
      variant: {
        // variant styles
      },
      size: {
        //size
        sm: "w-12 h-12",
        md: "w-14 h-14",
        lg: "w-16 h-16",
      },
    },
    compoundVariants: [
      // compound variants
    ],
    defaultVariants: {
      // default variants
    },
  }
);
