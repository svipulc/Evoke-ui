import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast } from ".";
import CenterDecorator from "./CenterDecorator";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [CenterDecorator],
  argTypes: {
    position: {
      options: ["topRight", "topLeft", "bottomRight", "bottomLeft"],
      control: {
        type: "select",
      },
      defaultValue: "topRight",
    },
    type: {
      options: ["success", "error", "warning", "info"],
      control: {
        type: "select",
      },
      defaultValue: "info",
    },
    title: {
      control: "text",
      defaultValue: "Default Title",
    },
    message: {
      control: "text",
      defaultValue: "This is a toast message.",
    },
    autoClose: {
      control: "boolean",
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessToast: Story = {
  args: {
    position: "topRight",
    type: "success",
    title: "Success!",
    message: "FFFFf gvdsbn Operation successful!",
    autoClose: true,
  },
  decorators: [CenterDecorator],
  render: args => {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
      setShowToast(true);
      if (args.autoClose) {
        setTimeout(() => setShowToast(false), 5000);
      }
    };

    return (
      <>
        <button onClick={handleClick} className="px-4 py-2 bg-green-500 text-white rounded-md">
          Show Success Toast
        </button>
        {showToast && <Toast {...args} />}
      </>
    );
  },
};

export const ErrorToast: Story = {
  args: {
    position: "topRight",
    type: "error",
    title: "Error!",
    message: "An error occurred.",
    autoClose: true,
  },
  decorators: [CenterDecorator],
  render: args => {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
      setShowToast(true);
      if (args.autoClose) {
        setTimeout(() => setShowToast(false), 5000);
      }
    };

    return (
      <>
        <button onClick={handleClick} className="px-4 py-2 bg-red-500 text-white rounded-md">
          Show Error Toast
        </button>
        {showToast && <Toast {...args} />}
      </>
    );
  },
};

export const WarningToast: Story = {
  args: {
    position: "topRight",
    type: "warning",
    title: "Warning!",
    message: "Please be cautious.",
    autoClose: true,
  },
  decorators: [CenterDecorator],
  render: args => {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
      setShowToast(true);
      if (args.autoClose) {
        setTimeout(() => setShowToast(false), 5000);
      }
    };

    return (
      <>
        <button onClick={handleClick} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
          Show Warning Toast
        </button>
        {showToast && <Toast {...args} />}
      </>
    );
  },
};

export const InfoToast: Story = {
  args: {
    position: "topRight",
    type: "info",
    title: "Information!",
    message: "This is an informational message.",
    autoClose: true,
  },
  decorators: [CenterDecorator],
  render: args => {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
      setShowToast(true);
      if (args.autoClose) {
        setTimeout(() => setShowToast(false), 5000);
      }
    };

    return (
      <>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Show Info Toast
        </button>
        {showToast && <Toast {...args} />}
      </>
    );
  },
};
