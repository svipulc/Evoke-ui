import { FaEye, FaEyeSlash, FaMailBulk, FaSearch } from "react-icons/fa";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ width: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {
    type: "text",
    placeholder: "Enter your email",
  },
};

export const Label: Story = {
  args: {
    ...Usage.args,
    label: "Email",
  },
};

export const Required: Story = {
  args: {
    ...Label.args,
    required: true,
  },
};

export const HelperText: Story = {
  args: {
    ...Label.args,
    helperText: "Must be at least 8 characters long",
  },
};

export const Disable: Story = {
  args: {
    type: "email",
    disabled: true,
    placeholder: "Ex. jhondoe@gmail.com",
  },
};

export const Error: Story = {
  args: {
    ...HelperText.args,
    error: true,
    errorMessage: "Invalid email",
  },
};

export const IconOrElement: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Input
          name="search"
          type="text"
          placeholder="Search"
          icon={<FaSearch />}
          iconPosition="left"
        />
        <Input
          name="url"
          type="text"
          placeholder="Enter URL"
          icon={<span>https://</span>}
          iconPosition="left"
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          icon={<FaMailBulk />}
          iconPosition="right"
        />
      </div>
    );
  },
};

export const FileInput: Story = {
  args: {
    type: "file",
    placeholder: "Upload file",
  },
};

export const Password: Story = {
  args: {
    required: true,
  },

  render: args => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <Input
        name="password"
        placeholder={"enter your password"}
        type={showPassword ? "text" : "password"}
        icon={
          showPassword ? (
            <FaEyeSlash onClick={togglePasswordVisibility} />
          ) : (
            <FaEye onClick={togglePasswordVisibility} />
          )
        }
        iconPosition={args.iconPosition}
      />
    );
  },
};
