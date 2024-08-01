import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
    "gap-3",
  ],
  {
    variants: {
      variant: {
        solid:
          "dark:bg-secondary dark:hover:bg-secondary/90 dark:text-primary bg-primary hover:bg-primary/90  text-white",
        outline:
          "dark:border-secondary dark:text-secondary dark:hover:bg-secondary/10 border-primary bg-transparent hover:bg-primary/10 border-2",
        ghost:
          "dark:text-secondary dark:hover:bg-secondary/10 transition-colors duration-300  hover:bg-primary/10",
        link: "dark:text-secondary bg-transparent underline-offset-4 hover:underline cursor-pointer",
        destructive: "bg-red-600 hover:bg-red-700/90 text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);
