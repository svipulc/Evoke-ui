/** @jsxImportSource @emotion/react */
import {
  AlignType,
  Direction,
  JustifyType,
  ResponsiveValue,
  SpacingOptions,
  WrapType,
} from "@/theme";
import { css } from "@emotion/react";
import { ComponentProps, useMemo } from "react";
import { stackResponsiveStyle } from "./index.style";

export type StackProps = ComponentProps<"div"> & {
  spacing?: ResponsiveValue<SpacingOptions>;
  direction?: ResponsiveValue<Direction>;
  align?: ResponsiveValue<AlignType>;
  justify?: ResponsiveValue<JustifyType>;
  wrap?: ResponsiveValue<WrapType>;
};

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  direction,
  align,
  justify,
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
      css={css`
        display: flex;
        ${responsiveStyle}
      `}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};
