import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { stackStyle } from "./index.style";

export type StackProps = ComponentProps<"div"> & VariantProps<typeof stackStyle>;

export const Stack: React.FC<StackProps> = ({
  children,
  direction,
  spacing,
  align,
  justify,
  wrap,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(stackStyle({ direction, spacing, align, justify, wrap }), className)}
      {...props}
    >
      {children}
    </div>
  );
};
