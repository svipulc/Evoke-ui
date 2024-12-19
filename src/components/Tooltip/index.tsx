import React, { ReactNode } from "react";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { tooltipParentStyle, tooltipStyle } from "./index.style";

export type TooltipProps = ComponentProps<"div"> &
  VariantProps<typeof tooltipParentStyle> & {
    text?: string;
    children: ReactNode;
    position?:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "topStart"
      | "topEnd"
      | "bottomStart"
      | "bottomEnd"
      | "leftStart"
      | "leftEnd"
      | "rightStart"
      | "rightEnd";
  };

export const Tooltip: React.FC<TooltipProps> = ({
  position = "top",
  content,
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
              position,
              className,
            })
          )}
        >
          {content}
        </span>
      </div>
    </>
  );
};
