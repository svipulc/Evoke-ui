// Tooltip.stories.tsx
// import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";
import { Button } from "../Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    backgroudColor: "bg-primary",
    textColor: "text-silverSteel",
    text: "This is a top tooltip",
    children: <Button>Hover Me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    text: "This is a bottom tooltip",
    children: <Button>Hover Me</Button>,
  },
};

export const Right: Story = {
  args: {
    position: "right",
    text: "This is a right tooltip",
    children: <Button>Hover Me</Button>,
  },
};

export const Left: Story = {
  args: {
    position: "left",
    text: "This is a left tooltip",
    children: <Button>Hover Me</Button>,
  },
};
