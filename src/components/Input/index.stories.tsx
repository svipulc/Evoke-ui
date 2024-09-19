import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { FaSearch } from "react-icons/fa";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const Disable: Story = {
  args: {
    type: "email",
    disabled: true,
    placeholder: "Ex. jhondoe@gmail.com",
  },
};
export const Required: Story = {
  args: {
    type: "email",
    required: true,
    placeholder: "Ex. jhondoe@gmail.com",
  },
};

export const Error: Story = {
  args: {
    type: "email",
    placeholder: "Ex. jhondoe@gmail.com",
    error: true,
  },
};

export const WithHelperText: Story = {
  args: {
    type: "password",
    placeholder: "Type your password",
    helperText: "Must be at least 8 characters long",
  },
};

export const WithLabel: Story = {
  args: {
    type: "email",
    label: "Email",
    placeholder: "Email..",
  },
};

export const WithIcon: Story = {
  args: {
    type: "text",
    placeholder: "Search...",
    children: <FaSearch />,
  },
};

export const FileInput: Story = {
  args: {
    type: "file",
    placeholder: "Upload file",
  },
};
