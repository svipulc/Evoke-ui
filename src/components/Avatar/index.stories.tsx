// Avatar component story

import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage } from ".";
import myImage from "../../../public/assets/test.jpg";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  args: {
    alt: "image2",
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
    size: "lg",
    children: (
      <AvatarImage
        src="https://mui.com/static/images/avatar/1.jpg"
        size={"lg"}
      />
    ),
  },
};

export const ProfileWithPath: Story = {
  args: {
    size: "md",
    src: myImage,
  },
};

export const ProfileWithName: Story = {
  args: {
    size: "sm",
    src: "Kashyap Patel",
  },
};
