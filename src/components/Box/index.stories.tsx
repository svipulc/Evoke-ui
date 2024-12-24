import React from "react";
import { Box } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  title: "Layouts/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["div", "section", "header", "footer", "main", "summary", "aside", "nav", "article"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "div",
      description: "The HTML element to render the Box component as.",
      table: {
        type: {
          summary: "div | section | header | footer | main | summary | aside | nav | article",
        },
        defaultValue: { summary: "div" },
      },
    },
    padding: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "none",
    },
    border: {
      options: ["none", "thin", "thick"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "none",
    },
    borderRadius: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "none",
    },
    boxShadow: {
      options: ["none", "small", "medium", "large"],
      control: {
        type: "inline-radio",
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

export const Usage: Story = {
  args: {
    padding: { md: "small", lg: "medium" },
    border: { md: "thin", lg: "thick" },
    children: "This is a Box component.",
  },
};
