/** @jsxImportSource @emotion/react */
import { ComponentProps } from "react";
import { buttonStyles } from "./index.style";
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";

export type ButtonVariant = "solid" | "outline" | "surface" | "subtle" | "ghost" | "link";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon";
export type ButtonColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  color?: ButtonColor;
  css?: SerializedStyles | CSSObject;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  className,
  css,
  asChild = false,
  color = "primary",
  ...props
}) => {
  const Component = asChild ? "span" : "button";
  const theme = useEvokeTheme();

  return (
    <Component
      aria-label={asChild ? undefined : "Button"}
      css={[buttonStyles(theme, variant, size, color), css]}
      className={className}
      {...props}
    />
  );
};
