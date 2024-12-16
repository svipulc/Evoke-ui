/** @jsxImportSource @emotion/react */
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import React from "react";
import { dividerChildrenStyle, dividerStyle, typeStyle } from "./index.style";

type DividerProps = {
  type?: keyof ReturnType<typeof typeStyle>;
  alignment?: "horizontal" | "vertical";
  textAlign?: "start" | "center" | "end";
  css?: SerializedStyles | CSSObject;
  className?: string;
  children?: React.ReactNode;
};

// Divider Component
export const Divider: React.FC<DividerProps> = ({
  type = "solid",
  alignment = "horizontal",
  textAlign = "center",
  children,
  className,
  css,
}) => {
  const theme = useEvokeTheme();
  return (
    <div
      aria-label="divider"
      role="separator"
      aria-orientation={alignment}
      css={[dividerStyle(theme, alignment, type), css]}
      className={className}
    >
      {children && <span css={dividerChildrenStyle(theme, alignment, textAlign)}>{children}</span>}
    </div>
  );
};
