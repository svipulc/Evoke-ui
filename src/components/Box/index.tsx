/** @jsxImportSource @emotion/react */
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import React, { ComponentProps, ElementType } from "react";
import {
  borderRadiusStyle,
  borderStyle,
  boxShadowStyle,
  boxStyle,
  paddingStyle,
} from "./index.style";
import { ResponsiveValue } from "@/theme/theme.type";

export type BoxProps<T extends ElementType = "div"> = ComponentProps<T> & {
  padding?: ResponsiveValue<keyof ReturnType<typeof paddingStyle>>;
  border?: keyof ReturnType<typeof borderStyle>;
  borderRadius?: keyof ReturnType<typeof borderRadiusStyle>;
  boxShadow?: keyof ReturnType<typeof boxShadowStyle>;
  as?: T;
  children?: React.ReactNode;
  css?: SerializedStyles | CSSObject;
};

export const Box = <T extends ElementType = "div">({
  as: Component = "div",
  padding = "medium",
  border = "none",
  borderRadius = "none",
  boxShadow = "none",
  children,
  css,
  className,
  ...props
}: BoxProps<T>) => {
  const theme = useEvokeTheme();
  return (
    <Component
      css={[boxStyle(theme, padding, border, borderRadius, boxShadow), css]}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
