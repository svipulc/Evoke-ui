import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Stack } from ".";
const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    // layout: "full-screen",
  },
  argTypes: {
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: { type: "select" },
    },
    spacing: {
      options: ["small", "medium", "large", "none"],
      control: { type: "select" },
    },
    align: {
      options: ["start", "center", "end", "stretch", "baseline"],
      control: { type: "select" },
    },
    justify: {
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
      control: { type: "select" },
    },
    wrap: {
      options: ["wrap", "nowrap", "wrap-reverse"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StackRow: Story = {
  args: {
    direction: "row",
    spacing: "large",
    className: "border border-2 rounded-md h-48",
    children: (
      <>
        <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
        <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
        <div className="bg-gray-500 text-white p-4 rounded">Item 4</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Item 5</div>
        <div className="bg-purple-500 text-white p-4 rounded">Item 6</div>
      </>
    ),

    align: "start",
    justify: "start",
  },
};

export const StackColumn: Story = {
  args: {
    direction: "column",
    spacing: "small",
    className: "border border-2 rounded-md",
    children: (
      <>
        <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
        <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
      </>
    ),
  },
};
