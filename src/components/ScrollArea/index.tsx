/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from "react";
import { scrollAreaStyles } from "./index.style";
import { CSSObject, SerializedStyles, useTheme } from "@emotion/react";
import { CustomTheme } from "@/evoke-theme-config";

type ScrollAreaProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical" | "both";
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ css, children, orientation = "vertical", className, ...props }, ref) => {
    const theme = useTheme() as CustomTheme;

    return (
      <div
        {...props}
        ref={ref}
        css={[scrollAreaStyles(theme, orientation), css]}
        className={className}
        role="region"
      >
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";
