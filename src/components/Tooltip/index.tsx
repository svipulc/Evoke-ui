import React, { ReactNode } from "react";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tooltipParentStyle, tooltipStyle } from "./index.style";

type TooltipProps = ComponentProps<"div"> &
  VariantProps<typeof tooltipParentStyle> & {
    text?: string;
    children: ReactNode;
    showTooltip?: boolean;
    position?: "top" | "bottom" | "left" | "right";
    backgroudColor: string;
    textColor: string;
  };

const Tooltip: React.FC<TooltipProps> = ({
  position = "top",
  showTooltip = true,
  backgroudColor,
  textColor,
  text,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <div className={cn(tooltipParentStyle({ className }))} {...props}>
        {children}
        <span
          className={cn(
            tooltipStyle({
              showTooltip: showTooltip ? "show" : "hide",
              position,
              className,
            }),
            backgroudColor,
            textColor
          )}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default Tooltip;
