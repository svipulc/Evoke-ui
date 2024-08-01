import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { buttonStyles } from "./index.style";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? "span" : "button";
  return (
    <Component
      aria-label={asChild ? undefined : "Button"}
      className={cn(buttonStyles({ variant, size, className }))}
      {...props}
    />
  );
};
