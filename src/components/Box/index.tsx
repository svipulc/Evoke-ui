import React, { ComponentProps, ElementType } from "react";
import { boxStyle } from "./index.style";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";

export type BoxProps<T extends ElementType = "div"> = ComponentProps<T> &
  VariantProps<typeof boxStyle> & {
    as?: T;
    children?: React.ReactNode;
  };

export const Box = <T extends ElementType = "div">({
  as: Component = "div",
  backgroundColor = "default",
  padding,
  border,
  borderRadius,
  boxShadow,
  children,
  ...props
}: BoxProps<T>) => {
  return (
    <Component
      className={cn(boxStyle({ backgroundColor, padding, border, borderRadius, boxShadow }))}
      {...props}
    >
      {children}
    </Component>
  );
};
