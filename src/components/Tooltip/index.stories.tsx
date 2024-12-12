import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";
import { Button } from "../Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "topStart",
        "topEnd",
        "bottomStart",
        "bottomEnd",
        "leftStart",
        "leftEnd",
        "rightStart",
        "rightEnd",
      ],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary:
            "top|bottom|left|right|topStart|topEnd|bottomStart|bottomEnd|leftStart|leftEnd|rightStart|rightEnd",
        },
        defaultValue: { summary: "top" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Usage: Story = {
  args: {
    content: "This is a tooltip content",
    className: "p-6",
    children: (
      <Button variant="subtle" aria-describedby="tooltip">
        Hover me
      </Button>
    ),
  },
};

export const Position: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Tooltip content="This is tooltip content" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="right">
          <Button>Right</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="topStart">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="topEnd">
          <Button>Top End</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="bottomStart">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="bottomEnd">
          <Button>Bottom End</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="leftStart">
          <Button>Left Start</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="leftEnd">
          <Button>Left End</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="rightStart">
          <Button>Right Start</Button>
        </Tooltip>
        <Tooltip content="This is tooltip content" position="rightEnd">
          <Button>Right End</Button>
        </Tooltip>
      </div>
    );
  },
};
