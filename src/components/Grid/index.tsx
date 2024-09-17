import { cn, ResponsiveValue, resolveResponsiveProps } from "@/utils";
import { ComponentProps, createContext, useContext } from "react";
import { gridItemStyles, gridStyles } from "./index.style";

/**
 * Props for the Grid component.
 */
export type GridProps = ComponentProps<"div"> & {
  columns?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  rows?: ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  spacing?: ResponsiveValue<"none" | "small" | "medium" | "large">;
  rowSpacing?: ResponsiveValue<"none" | "small" | "medium" | "large">;
  columnSpacing?: ResponsiveValue<"none" | "small" | "medium" | "large">;
};

/**
 * Props for the GridItem component.
 */
export type GridItemProps = ComponentProps<"div"> & {
  columnSpan?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  rowSpan?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  columnOffset?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13>;
  rowOffset?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13>;
};

/**
 * Context to ensure GridItem is used inside Grid
 */
const GridContext = createContext<boolean | null>(null);

/**
 * Grid component for creating responsive grid layouts.
 */
export const Grid: React.FC<GridProps> & GridItemProps = ({
  children,
  columns = 0,
  rows = 0,
  spacing = "small",
  rowSpacing = "none",
  columnSpacing = "none",
  className,
  ...props
}) => {
  const responsiveColumns = resolveResponsiveProps(gridStyles, columns, "columns");
  const responsiveRows = resolveResponsiveProps(gridStyles, rows, "rows");
  const responsiveSpacing = resolveResponsiveProps(gridStyles, spacing, "spacing");
  const responsiveRowSpacing = resolveResponsiveProps(gridStyles, rowSpacing, "rowSpacing");
  const responsiveColumnSpacing = resolveResponsiveProps(
    gridStyles,
    columnSpacing,
    "columnSpacing"
  );

  return (
    <GridContext.Provider value={true}>
      <div
        className={cn(
          responsiveColumns,
          responsiveRows,
          responsiveSpacing,
          responsiveRowSpacing,
          responsiveColumnSpacing,
          className
        )}
        {...props}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};
/**
 * GridItem component for creating responsive grid items
 */
export const GridItem: React.FC<GridItemProps> = ({
  children,
  columnSpan = 0,
  rowSpan = 0,
  columnOffset = 0,
  rowOffset = 0,
  className,
  ...props
}) => {
  // Check if the component is used inside Grid
  const isInsideGrid = useContext(GridContext);

  if (!isInsideGrid) {
    console.error("GridItem must be used within a Grid component.");
    return null; // or throw an error depending on your preference
  }

  const responsiveColumnSpan = resolveResponsiveProps(gridItemStyles, columnSpan, "columnSpan");
  const responsiveRowSpan = resolveResponsiveProps(gridItemStyles, rowSpan, "rowSpan");
  const responsiveColumnOffset = resolveResponsiveProps(
    gridItemStyles,
    columnOffset,
    "columnOffset"
  );
  const responsiveRowOffset = resolveResponsiveProps(gridItemStyles, rowOffset, "rowOffset");

  return (
    <div
      className={cn(
        responsiveColumnSpan,
        responsiveRowSpan,
        responsiveColumnOffset,
        responsiveRowOffset,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
