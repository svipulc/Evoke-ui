/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { ComponentProps } from "react";
import { positionStyle, tooltipParentStyle, tooltipStyle } from "./index.style";
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import { ResponsiveValue } from "@/theme/theme.type";

export type TooltipProps = ComponentProps<"div"> & {
  content: string;
  children: ReactNode;
  position?: ResponsiveValue<keyof ReturnType<typeof positionStyle>>;
  css?: SerializedStyles | CSSObject;
};

export const Tooltip: React.FC<TooltipProps> = ({
  position = "top",
  content,
  className,
  children,
  css,
  ...props
}) => {
  const theme = useEvokeTheme();
  // state for tooltip visibility
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div
      css={tooltipParentStyle}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      {...props}
    >
      {children}
      <span
        id="tooltip"
        role="tooltip"
        aria-hidden={!isVisible}
        css={[tooltipStyle(theme, position), css]}
        className={`tooltip ${className}`}
      >
        {content}
      </span>
    </div>
  );
};
