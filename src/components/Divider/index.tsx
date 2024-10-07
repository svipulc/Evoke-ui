import { cn } from "@/utils";
import { ComponentProps } from "react";
import {
  DividerChildrenStyle,
  DividerStyles,
  getTextAlignClass,
  getVariantClass,
} from "./index.style";
import { VariantProps } from "class-variance-authority";

type VerticalTextAlign = "top" | "center" | "bottom";
type HorizontalTextAlign = "left" | "center" | "right";

export type DividerBaseProps = ComponentProps<"div"> &
  VariantProps<typeof DividerStyles> &
  VariantProps<typeof DividerChildrenStyle> & {
    variant?: "fullWidth" | "inset" | "middle";
    children?: unknown;
  };

export type HorizontalDividerProps = DividerBaseProps & {
  Alignment: "horizontal";
  textAlign?: HorizontalTextAlign;
};

export type VerticalDividerProps = DividerBaseProps & {
  Alignment: "vertical";
  textAlign?: VerticalTextAlign;
};

export type DividerProps = HorizontalDividerProps | VerticalDividerProps;

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
