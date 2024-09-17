import React from "react";
import { Grid, GridItem } from ".";
import { Meta, StoryObj } from "@storybook/react/*";
import { people } from "../../data/index";

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
      options: ["none", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    rowSpacing: {
      options: ["none", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
    columnSpacing: {
      options: ["none", "small", "medium", "large"],
      control: { type: "inline-radio" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default Story for the Grid component.
 * Demonstrates basic grid setup with 4 columns and 3 rows.
 */
export const Default: Story = {
  args: {
    columns: 4,
    rows: 3,
    spacing: "small",
    children: people.map(person => (
      <div
        key={person.id}
        className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
      >
        <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
        <div className="flex flex-col">
          <strong className="text-primary text-sm font-medium dark:text-white">
            {person.name}
          </strong>
          <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
            {person.role}
          </span>
        </div>
      </div>
    )),
  },
};

/**
 * Responsive Grid Story.
 * Demonstrates responsiveness of columns at different breakpoints.
 */
export const ResponsiveGrid: Story = {
  args: {
    columns: { sm: 2, md: 4, lg: 6, xl: 8 },
    spacing: "small",
    children: people.map(person => (
      <div
        key={person.id}
        className="flex flex-col justify-center items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
      >
        <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
        <div className="flex flex-col text-center">
          <strong className="text-primary text-sm font-medium dark:text-white">
            {person.name}
          </strong>
          <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
            {person.role}
          </span>
        </div>
      </div>
    )),
  },
};

/**
 * Grid with GridItem.
 * Demonstrates the use of GridItem with columnSpan to span across multiple columns.
 */
export const WithGridItem: Story = {
  args: {
    columns: 6,
    spacing: "small",
    children: people.map(person => (
      <GridItem
        columnSpan={3}
        key={person.id}
        className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
      >
        <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
        <div className="flex flex-col">
          <strong className="text-primary text-sm font-medium dark:text-white">
            {person.name}
          </strong>
          <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
            {person.role}
          </span>
        </div>
      </GridItem>
    )),
  },
};

/**
 * Grid with Offset.
 * Demonstrates the use of columnOffset to adjust the position of grid items within the grid.
 */
export const GridItemsWithColumnOffset: Story = {
  args: {
    columns: 12,
    spacing: "small",
    children: (
      <>
        <GridItem
          columnSpan={3}
          columnOffset={{ lg: 3, xl: 2 }}
          key={people[0].id}
          className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
        >
          <img className="w-12 h-12 rounded-full" src={people[0].image} alt={people[0].name} />
          <div className="flex flex-col">
            <strong className="text-primary text-sm font-medium dark:text-white">
              {people[0].name}
            </strong>
            <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
              {people[0].role}
            </span>
          </div>
        </GridItem>
        <GridItem
          columnSpan={6}
          columnOffset={{ xl: 6 }}
          key={people[2].id}
          className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
        >
          <img className="w-12 h-12 rounded-full" src={people[2].image} alt={people[2].name} />
          <div className="flex flex-col">
            <strong className="text-primary text-sm font-medium dark:text-white">
              {people[2].name}
            </strong>
            <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
              {people[2].role}
            </span>
          </div>
        </GridItem>
      </>
    ),
  },
};

/**
 * Grid with Rows.
 * Demonstrates rowSpan and columnSpan usage in a grid.
 */
export const GridWithRows: Story = {
  args: {
    rows: 4,
    columns: 12,
    spacing: "medium",
    children: (
      <>
        {people.slice(0, 6).map((person, index) => (
          <GridItem
            key={person.id}
            columnSpan={index === 0 ? 4 : 2} // Complex logic: first item takes more columns
            rowSpan={index === 0 ? 3 : 1} // First item spans more rows
            className={`flex ${index === 0 ? "flex-col items-center justify-center" : "items-center"} gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md`}
          >
            <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
            <div className={`flex ${index === 0 ? "flex-col text-center" : "flex-col"}`}>
              <strong className="text-primary text-sm font-medium dark:text-white">
                {person.name}
              </strong>
              <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
                {person.role}
              </span>
            </div>
          </GridItem>
        ))}
      </>
    ),
  },
};

/**
 * Grid with Row and Column Spacing.
 * Demonstrates row and column spacing alongside other grid properties.
 */
export const WithRowAndColumnSpacing: Story = {
  args: {
    columns: 4,
    rows: 3,
    rowSpacing: "large",
    columnSpacing: "medium",
    children: people.map(person => (
      <GridItem
        key={person.id}
        className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-primary rounded-md"
      >
        <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
        <div className="flex flex-col">
          <strong className="text-primary text-sm font-medium dark:text-white">
            {person.name}
          </strong>
          <span className="text-gray-600 text-sm font-medium dark:text-secondary/70">
            {person.role}
          </span>
        </div>
      </GridItem>
    )),
  },
};
