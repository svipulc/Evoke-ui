/** @jsxImportSource @emotion/react */
import { GridContext, GridContextProvider } from "@/context/Grid";
import { ResponsiveValue, SpacingObject } from "@/theme/theme.type";
import { CSSObject, SerializedStyles } from "@emotion/react";
import React, { ComponentProps, useContext, useMemo } from "react";
import { gridBaseStyle, gridItemResponsiveStyle, gridResponsiveStyle } from "./index.style";

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Props for the Grid component.
 */
export type GridProps = ComponentProps<"div"> & {
  columns?: ResponsiveValue<GridSize>;
  rows?: ResponsiveValue<GridSize>;
  spacing?: ResponsiveValue<keyof SpacingObject>;
  rowSpacing?: ResponsiveValue<keyof SpacingObject>;
  columnSpacing?: ResponsiveValue<keyof SpacingObject>;
  css?: SerializedStyles | CSSObject;
};

/**
 * Props for the GridItem component.
 */
export type GridItemProps = ComponentProps<"div"> & {
  columnSpan?: ResponsiveValue<GridSize>;
  rowSpan?: ResponsiveValue<GridSize>;
  columnOffset?: ResponsiveValue<GridSize | 13>;
  rowOffset?: ResponsiveValue<GridSize | 13>;
  css?: SerializedStyles | CSSObject;
};

/**
 * Grid component for creating responsive grid layouts.
 */
export const Grid: React.FC<GridProps> & {
  GridItem: React.FC<GridItemProps>;
} = ({
  children,
  columns = 12,
  rows = 1,
  spacing = "none",
  rowSpacing,
  columnSpacing,
  className,
  css,
  ...props
}) => {
  // Use useMemo to avoid recalculating styles on each render unless props change
  const responsiveStyle = useMemo(
    () => gridResponsiveStyle({ columns, rows, spacing, rowSpacing, columnSpacing }),
    [columns, rows, spacing, rowSpacing, columnSpacing]
  );

  return (
    <GridContextProvider>
      <div
        aria-label="grid"
        role="group"
        css={[gridBaseStyle, responsiveStyle, css]}
        className={className}
        {...props}
      >
        {children}
      </div>
    </GridContextProvider>
  );
};

/**
 * GridItem component for creating responsive grid items
 */
const GridItem: React.FC<GridItemProps> = ({
  children,
  columnSpan,
  rowSpan,
  columnOffset,
  rowOffset,
  className,
  css,
  ...props
}) => {
  // Check if the component is used inside Grid
  const isInsideGrid = useContext(GridContext);

  // Use useMemo to avoid recalculating styles on each render unless props change
  const responsiveItemStyle = useMemo(
    () => gridItemResponsiveStyle({ columnSpan, rowSpan, columnOffset, rowOffset }),
    [columnSpan, rowSpan, columnOffset, rowOffset]
  );

  // If not inside Grid, log an error and return null
  if (!isInsideGrid) {
    console.error("GridItem must be used within a Grid component.");
    return null; // or throw an error depending on your preference
  }

  return (
    <div aria-label="grid-item" css={[responsiveItemStyle, css]} className={className} {...props}>
      {children}
    </div>
  );
};

// Assign GridItem to Grid component
Grid.GridItem = GridItem;
