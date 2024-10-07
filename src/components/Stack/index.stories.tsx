import { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import { Stack } from ".";

const meta: Meta<typeof Stack> = {
  title: "Layouts/Stack",
  component: Stack,
  parameters: {
    // layout: "centered",
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

export const Default: Story = {
  args: {
    spacing: { xs: "small", md: "large", xl: "xxlarge" },
    direction: { xs: "column", md: "row" },
    justify: { xs: "start", md: "center", xl: "end" },
    align: { xs: "start", md: "center", xl: "end" },
    wrap: { xs: "nowrap", md: "wrap" },
    className: "",
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
  },
};
