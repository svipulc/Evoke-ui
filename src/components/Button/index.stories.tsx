import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { FaSearch } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: <a href="https://github.com">Click Here</a>,
    asChild: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
  },
};

export const Disable: Story = {
  args: {
    variant: "solid",
    children: "Disabled",
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    children: <FaSearch />,
    size: "icon",
  },
};

export const SearchButton: Story = {
  args: {
    variant: "solid",
    children: (
      <>
        <FaSearch />
        <span>Search</span>
      </>
    ),
    size: "md",
  },
};

export const AddFriendButton: Story = {
  args: {
    variant: "outline",
    children: (
      <>
        <BsPersonFillAdd className="h-5 w-5" />
        <span>Add Friend</span>
      </>
    ),
    size: "md",
  },
};
