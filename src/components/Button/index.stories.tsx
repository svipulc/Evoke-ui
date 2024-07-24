import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { FaSearch } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";

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

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
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
    children: "Button",
    asChild: true,
  },
};

export const Icon: Story = {
  args: {
    variant: "secondary",
    children: <FaSearch />,
    size: "icon",
  },
};

export const SearchButton: Story = {
  args: {
    variant: "primary",
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
