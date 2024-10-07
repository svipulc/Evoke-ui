import { cva } from "class-variance-authority";
export const containerStyle = cva(["container", "mx-auto"], {
  variants: {
    maxWidth: {
      full: ["max-w-full"],
      auto: ["w-auto"],
      sm: ["max-w-screen-sm"],
      md: ["max-w-screen-md"],
      lg: ["max-w-screen-lg"],
      xl: ["max-w-screen-xl"],
      "2xl": ["max-w-screen-2xl"],
    },
  },
  defaultVariants: {
    maxWidth: "auto",
  },
});
