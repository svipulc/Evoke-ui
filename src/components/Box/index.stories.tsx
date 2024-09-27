import React from "react";
import { Box } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box as React.FC,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["div", "section", "header", "footer", "main", "summary", "aside", "nav", "article"],
      control: {
        type: "select",
      },
      defaultValue: "div",
    },
    backgroundColor: {
      options: ["default", "primary", "secondary", "lavender", "silverSteel"],
      control: {
        type: "select",
      },
      defaultValue: "default",
    },
    padding: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "select",
      },
      defaultValue: "none",
    },
    border: {
      options: ["none", "thin", "thick"],
      control: {
        type: "select",
      },
      defaultValue: "none",
    },
    borderRadius: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "select",
      },
      defaultValue: "none",
    },
    boxShadow: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "select",
      },
      defaultValue: "none",
    },
    children: {
      control: "text",
      defaultValue: "This is a Box component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBox: Story = {
  args: {
    as: "header",
    backgroundColor: "default",
    padding: "small",
    border: "thin",
    children: "This is the default Box component.",
    borderRadius: "none",
    boxShadow: "small",
  },
  render: args => <Box {...args} />,
};
