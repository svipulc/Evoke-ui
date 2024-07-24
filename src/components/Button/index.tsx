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
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary hover:bg-primary",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary border-primary bg-transparent hover:bg-primary",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary bg-transparent hover:bg-primary",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = ({
  variant,
  size,
  colorscheme,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, colorscheme, className }))}
      {...props}
    />
  );
};
