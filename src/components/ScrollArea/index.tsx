/** @jsxImportSource @emotion/react */
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import { ComponentProps, forwardRef } from "react";
import { scrollAreaStyles } from "./index.style";

type ScrollAreaProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical" | "both";
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ css, children, orientation = "vertical", className, ...props }, ref) => {
    const theme = useEvokeTheme();

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
