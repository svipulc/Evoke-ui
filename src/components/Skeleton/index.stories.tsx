import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from ".";

const meta: Meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["circular", "rectangular", "text"],
      control: { type: "select" },
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Circular: Story = {
  args: {
    variant: "circular",
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

const UserProfileSkeleton = () => (
  <div className="flex gap-2 items-center">
    <Skeleton variant="circular" width="40px" height="40px" />
    <div className="flex flex-col gap-2 justify-center">
      <Skeleton variant="text" width="150px" />
      <Skeleton variant="text" width="100px" />
    </div>
  </div>
);

const ActionIconsSkeleton = () => (
  <div className="flex gap-2 justify-end items-center">
    <Skeleton width="40px" height="40px" />
    <Skeleton width="40px" height="40px" />
  </div>
);

export const Example1: Story = {
  argTypes: {
    variant: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },
  },
  render: () => (
    <div className="w-[500px] grid grid-cols-2 bg-gray-100 dark:bg-gray-800 p-4">
      <UserProfileSkeleton />
      <ActionIconsSkeleton />
    </div>
  ),
};

export const Example2: Story = {
  argTypes: {
    variant: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },
  },
  render: () => (
    <div className="w-[600px] bg-gray-100 dark:bg-gray-800 p-4 space-y-2">
      <UserProfileSkeleton />
      <Skeleton variant="rectangular" height="200px" />
    </div>
  ),
};
