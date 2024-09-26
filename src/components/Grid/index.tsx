/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ComponentProps, useContext, useMemo } from "react";
import { gridItemResponsiveStyle, gridResponsiveStyle } from "./index.style";
import { GridColumnCount, GridRowCount, ResponsiveValue } from "@/theme";
import { SpacingOptions } from "@/theme";
import { GridContext, GridContextProvider } from "@/context/Grid";

/**
 * Props for the Grid component.
 */
export type GridProps = ComponentProps<"div"> & {
  columns?: ResponsiveValue<GridColumnCount>;
  rows?: ResponsiveValue<GridRowCount>;
  spacing?: ResponsiveValue<SpacingOptions>;
  rowSpacing?: ResponsiveValue<SpacingOptions>;
  columnSpacing?: ResponsiveValue<SpacingOptions>;
};

/**
 * Props for the GridItem component.
 */
export type GridItemProps = ComponentProps<"div"> & {
  columnSpan?: ResponsiveValue<GridColumnCount>;
  rowSpan?: ResponsiveValue<GridRowCount>;
  columnOffset?: ResponsiveValue<GridColumnCount | 13>;
  rowOffset?: ResponsiveValue<GridRowCount | 13>;
};

/**
 * Grid component for creating responsive grid layouts.
 */
export const Grid: React.FC<GridProps> & {
  GridItem: React.FC<GridItemProps>;
} = ({ children, columns, rows, spacing, rowSpacing, columnSpacing, className, ...props }) => {
  // Use useMemo to avoid recalculating styles on each render unless props change
  const responsiveStyle = useMemo(
    () => gridResponsiveStyle({ columns, rows, spacing, rowSpacing, columnSpacing }),
    [columns, rows, spacing, rowSpacing, columnSpacing]
  );

  return (
    <GridContextProvider>
      <div
        css={css`
          display: grid;
          ${responsiveStyle};
        `}
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
    <div
      css={css`
        ${responsiveItemStyle};
      `}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

// Assign GridItem to Grid component
Grid.GridItem = GridItem;
