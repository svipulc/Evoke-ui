// Avatar component story

import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: {
    size: "sm",
    src: "https://mui.com/static/images/avatar/2.jpg",
  },
};

export const ProfileWithChildren: Story = {
  args: {
    size: "sm",
    children: (
      <Avatar.Image
        src="https://mui.com/static/images/avatar/1.jpg"
        size={"sm"}
      />
    ),
  },
};

export const ProfileWithName: Story = {
  args: {
    size: "sm",
    src: "Kashyap Patel",
  },
};
