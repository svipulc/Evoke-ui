import { cn } from "@/utils";
import { ComponentProps } from "react";
import {
  dividerChildrenStyle,
  dividerStyles,
  getTextAlignClass,
  getVariantClass,
} from "./index.style";
import { VariantProps } from "class-variance-authority";

type verticalTextAlign = "top" | "center" | "bottom";
type horizontalTextAlign = "left" | "center" | "right";

export type DividerBaseProps = ComponentProps<"div"> &
  VariantProps<typeof dividerStyles> &
  VariantProps<typeof dividerChildrenStyle> & {
    variant?: "fullWidth" | "inset" | "middle";
    children?: unknown;
  };

export type HorizontalDividerProps = DividerBaseProps & {
  alignment: "horizontal";
  textAlign?: horizontalTextAlign;
};

export type VerticalDividerProps = DividerBaseProps & {
  alignment: "vertical";
  textAlign?: verticalTextAlign;
};

export type DividerProps = HorizontalDividerProps | VerticalDividerProps;

export const Divider: React.FC<DividerProps> = ({
  children,
  className,
  alignment = "horizontal",
  variant = "fullWidth",
  textAlign = "center",
  type,
}) => {
  let border_postion = "";
  if (alignment === "horizontal") {
    border_postion = "border-t";
  } else {
    border_postion = "border-l";
  }
  return (
    <div
      className={cn(
        `${border_postion} bg-gray-300 inline-block`,
        dividerStyles({ alignment, type }),
        getVariantClass(alignment, variant),
        className
      )}
    >
      {children && (
        <span className={cn(dividerChildrenStyle(), getTextAlignClass(alignment, textAlign))}>
          {children}
        </span>
      )}
    </div>
  );
};
