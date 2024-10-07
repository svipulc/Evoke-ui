import React from "react";
import { Grid } from ".";
import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof Grid> = {
  title: "Layouts/Grid",
  component: Grid,
  argTypes: {
    columns: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: { type: "select" },
    },
    rows: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: { type: "select" },
    },
    spacing: {
      options: ["none", "tiny", "small", "medium", "large", "xlarge", "xxlarge", "huge"],
      control: { type: "inline-radio" },
    },
    rowSpacing: {
      options: ["none", "tiny", "small", "medium", "large", "xlarge", "xxlarge", "huge"],
      control: { type: "inline-radio" },
    },
    columnSpacing: {
      options: ["none", "tiny", "small", "medium", "large", "xlarge", "xxlarge", "huge"],
      control: { type: "inline-radio" },
    },
  },
  decorators: [
    Story => (
      <div className="text-center text-white font-bold">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const GridBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center items-center bg-primary p-8 h-full rounded-lg">
    {children}
  </div>
);

/**
 * Default Story for the Grid component.
 * Demonstrates basic grid setup with 4 columns and 3 rows.
 */
export const Default: Story = {
  args: {
    columns: 4,
    rows: 3,
    spacing: "small",
    children: (
      <>
        <GridBox>1</GridBox>
        <GridBox>2</GridBox>
        <GridBox>3</GridBox>
        <GridBox>4</GridBox>
        <GridBox>5</GridBox>
        <GridBox>6</GridBox>
        <GridBox>7</GridBox>
      </>
    ),
  },
};

/**
 * Responsive Grid Story.
 * Demonstrates responsiveness of columns at different breakpoints.
 */
export const ResponsiveGrid: Story = {
  args: {
    columns: { sm: 2, md: 4, lg: 6, xl: 8 },
    spacing: "large",
    children: (
      <>
        <GridBox>1</GridBox>
        <GridBox>2</GridBox>
        <GridBox>3</GridBox>
        <GridBox>4</GridBox>
        <GridBox>5</GridBox>
        <GridBox>6</GridBox>
        <GridBox>7</GridBox>
      </>
    ),
  },
};

/**
 * Grid with Grid.GridItem.
 * Demonstrates the use of Grid.GridItem with columnSpan to span across multiple columns.
 */
export const GridAndGridItem: Story = {
  args: {
    columns: 10,
    spacing: "small",
    children: (
      <>
        <Grid.GridItem>
          <GridBox>col-span-1</GridBox>
        </Grid.GridItem>
        <Grid.GridItem columnSpan={2}>
          <GridBox>col-span-2</GridBox>
        </Grid.GridItem>
        <Grid.GridItem columnSpan={3}>
          <GridBox>col-span-3</GridBox>
        </Grid.GridItem>
      </>
    ),
  },
};

/**
 * Grid with Offset.
 * Demonstrates the use of columnOffset to adjust the position of grid items within the grid.
 */
export const ColumnOffset: Story = {
  args: {
    columns: 12,
    spacing: "small",
    children: (
      <>
        <Grid.GridItem columnOffset={3}>
          <GridBox>col-offset-3</GridBox>
        </Grid.GridItem>
        <Grid.GridItem columnOffset={5}>
          <GridBox>col-offset-5</GridBox>
        </Grid.GridItem>
        <Grid.GridItem columnOffset={7}>
          <GridBox>col-offset-7</GridBox>
        </Grid.GridItem>
      </>
    ),
  },
};

/**
 * Grid with Rows.
 * Demonstrates rowSpan and columnSpan usage in a grid.
 */
export const RowAndColumnSpan: Story = {
  args: {
    rows: 4,
    columns: 12,
    spacing: "medium",
    children: (
      <>
        <Grid.GridItem rowSpan={4} columnSpan={4}>
          <GridBox>col-span-2 row-span-4 </GridBox>
        </Grid.GridItem>
        <Grid.GridItem rowSpan={2} columnSpan={2}>
          <GridBox>col-span-2 row-span-2</GridBox>
        </Grid.GridItem>
        <Grid.GridItem rowSpan={2} columnSpan={2}>
          <GridBox>col-span-2 row-span-2</GridBox>
        </Grid.GridItem>
        <Grid.GridItem rowSpan={2} columnSpan={2}>
          <GridBox>col-span-2 row-span-2</GridBox>
        </Grid.GridItem>
        <Grid.GridItem rowSpan={1} columnSpan={2}>
          <GridBox>col-span-2 row-span-1</GridBox>
        </Grid.GridItem>
        <Grid.GridItem rowSpan={1} columnSpan={2}>
          <GridBox>col-span-2 row-span-1</GridBox>
        </Grid.GridItem>
        <Grid.GridItem columnSpan={8} rowSpan={2}>
          <GridBox>col-span-8 row-span-2</GridBox>
        </Grid.GridItem>
      </>
    ),
  },
};

/**
 * Grid with Row and Column Spacing.
 * Demonstrates row and column spacing alongside other grid properties.
 */
export const RowAndColumnSpacing: Story = {
  args: {
    columns: 4,
    rows: 3,
    rowSpacing: "large",
    columnSpacing: "medium",
    children: (
      <>
        <GridBox>1</GridBox>
        <GridBox>2</GridBox>
        <GridBox>3</GridBox>
        <GridBox>4</GridBox>
        <GridBox>5</GridBox>
        <GridBox>6</GridBox>
        <GridBox>7</GridBox>
      </>
    ),
  },
};
