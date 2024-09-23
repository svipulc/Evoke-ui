import { cn } from "@/utils";
import { ComponentProps } from "react";
import {
  DividerChildrenStyle,
  DividerStyles,
  getTextAlignClass,
  getVariantClass,
} from "./index.style";
import { VariantProps } from "class-variance-authority";

export type DividerProps = ComponentProps<"div"> &
  VariantProps<typeof DividerStyles> &
  VariantProps<typeof DividerChildrenStyle> & {
    children?: unknown;
    Alignment?: "horizontal" | "vertical";
    variant?: "fullWidth" | "inset" | "middle";
    textAlign?: "center" | "left" | "right";
  };

export const Divider: React.FC<DividerProps> = ({
  children,
  className,
  Alignment = "horizontal",
  variant = "fullWidth",
  textAlign = "center",
  type,
}) => {
  let border_postion = "";
  if (Alignment === "horizontal") {
    border_postion = "border-t";
  } else {
    border_postion = "border-l";
  }
  return (
    <div
      className={cn(
        `${border_postion} bg-gray-300 inline-block`,
        DividerStyles({ Alignment, type }),
        getVariantClass(Alignment, variant),
        className
      )}
    >
      {children && (
        <span className={cn(DividerChildrenStyle(), getTextAlignClass(Alignment, textAlign))}>
          {children}
        </span>
      )}
    </div>
  );
};
