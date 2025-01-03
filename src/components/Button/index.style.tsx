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
    "justify-center",
    "gap-3",
    "focus-visible:ring-2",
    "focus-visible:ring-light-secondary",
    "focus-visible:dark:ring-secondary",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-light-primary",
    "focus-visible:dark:ring-offset-primary",
    "focus-visble-:inset-2",
  ],
  {
    variants: {
      variant: {
        solid:
          " dark:bg-secondary dark:hover:bg-secondary/90 dark:active:ring-2 dark:active:ring-secondary/50 dark:text-primary bg-light-secondary hover:bg-light-secondary/90 active:ring-2 active:ring-primary/50 text-light-primary",
        outline:
          "dark:border-secondary dark:text-secondary dark:hover:bg-secondary/10 dark:active:ring-2 dark:active:ring-secondary/50 border-light-secondary bg-transparent hover:bg-light-secondary/10 active:ring-2 active:ring-light-secondary/50 border-2 text-light-secondary",
        ghost:
          "dark:text-secondary dark:hover:bg-secondary/10 dark:active:ring-2 dark:active:ring-secondary/50 transition-colors duration-300 hover:bg-light-secondary/10 active:ring-2 active:ring-light-secondary/50 text-light-secondary",
        link: "text-light-secondary dark:text-secondary bg-transparent underline-offset-4 hover:underline cursor-pointer",
        destructive: "bg-red-600 hover:bg-red-700/90 active:ring-2 active:ring-red-300 text-white",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "h-11 px-6 py-3 text-lg",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);
