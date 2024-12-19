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
import { SerializedStyles } from "@emotion/react";
import { CSSObject } from "storybook/internal/theming";

export type StackProps = ComponentProps<"div"> & {
  spacing?: ResponsiveValue<keyof SpacingObject>;
  direction?: ResponsiveValue<FlexDirectionValues>;
  align?: ResponsiveValue<AlignItemsValues>;
  justify?: ResponsiveValue<JustifyContentValues>;
  wrap?: ResponsiveValue<FlexWrapValues>;
  css?: SerializedStyles | CSSObject;
};

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  direction = "row",
  align = "start",
  justify = "start",
  spacing,
  wrap,
  css,
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
      css={[baseStyle, responsiveStyle, css]}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
