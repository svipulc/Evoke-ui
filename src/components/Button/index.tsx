import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
    "gap-3",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/90 text-white",
        secondary: "bg-secondary text-primary hover:bg-secondary/90 ",
        outline:
          "text-secondary border-secondary bg-transparent hover:bg-secondary hover:text-primary border-2",
        ghost: "text-primary transition-colors duration-300",
        link: "text-primary bg-transparent hover:text-primary/90 underline-offset-4 hover:underline cursor-pointer",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export const Button = ({
  variant,
  size,
  className,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    />
  );
};
