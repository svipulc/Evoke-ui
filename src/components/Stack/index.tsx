/** @jsxImportSource @emotion/react */
import {
  AlignItemsValues,
  FlexDirectionValues,
  FlexWrapValues,
  JustifyContentValues,
  ResponsiveValue,
  SpacingObject,
} from "@/theme/theme.type";
import { ComponentProps, useMemo } from "react";
import { baseStyle, stackResponsiveStyle } from "./index.style";

export type StackProps = ComponentProps<"div"> & {
  spacing?: ResponsiveValue<SpacingObject>;
  direction?: ResponsiveValue<FlexDirectionValues>;
  align?: ResponsiveValue<AlignItemsValues>;
  justify?: ResponsiveValue<JustifyContentValues>;
  wrap?: ResponsiveValue<FlexWrapValues>;
};

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  direction = "row",
  align = "start",
  justify = "start",
  spacing,
  wrap,
  ...props
}) => {
  const responsiveStyle = useMemo(
    () => stackResponsiveStyle({ spacing, direction, align, justify, wrap }),
    [spacing, direction, align, justify, wrap]
  );

  return (
    <div
      aria-label="stack"
      role="group"
      css={[baseStyle, responsiveStyle]}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
