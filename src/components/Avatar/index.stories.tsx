// Avatar component story

import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from ".";
import testImg from "../../../public/assets/test.jpg";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
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
    size: "lg",
    children: (
      <AvatarImage
        src="https://mui.com/static/images/avatar/2.jpg"
        size={"lg"}
        alt="Vishal Patel"
        className="border-secondary border-4"
      />
    ),
  },
};

export const ProfileWithoutSource: Story = {
  args: {
    size: "lg",
    children: (
      <AvatarImage
        src=""
        size={"sm"}
        alt=""
        fallback={<AvatarFallback size={"sm"} alt="Alternative Text" />}
      />
    ),
  },
};

export const ProfileWithFallback: Story = {
  args: {
    size: "lg",
    children: <AvatarFallback size={"sm"} alt="Custom Fallback" />,
  },
};

export const ProfileUsingPath: Story = {
  args: {
    size: "sm",
    children: <AvatarImage src={testImg} size={"sm"} />,
  },
};
