import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../Progress/index";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Button } from "../Button";

const meta: Meta<typeof Progress> = {
  title: "Components/LinearProgress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "number" },
      description: "The progress value (percentage)",
      defaultValue: 50,
    },
    color: {
      control: { type: "color" },
      description: "The color of the progress bar",
      defaultValue: "#4caf50",
    },
    showLabel: {
      control: { type: "boolean" },
      description: "Show or hide the progress percentage label",
      defaultValue: true,
    },
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LinearProgressBar: Story = {
  args: {
    value: 75,
    color: "#2196f3",
    showLabel: true,
  },
};

export const ProgressBarWithCustomCss: Story = {
  args: {
    value: 75,
    showLabel: true,
  },

  render: args => {
    const customProgressBarStyles = css`
      border-radius: 8px;
      height: 5px;

      .progress-container {
        background-color: #e0e0e0;
        border-radius: inherit;
        height: inherit;
        overflow: hidden;
      }

      .progress-fill {
        background-color: green;
        transition: width 0.4s ease-in-out;
        border-radius: inherit;
        height: 100%;
      }

      .progress-label {
        margin-left: 10px;
        font-size: 10px;
        font-weight: bold;
      }
    `;

    return (
      <>
        <Progress {...args} className={customProgressBarStyles} />
      </>
    );
  },
};

export const MovingProgressBar: Story = {
  args: {
    value: 10,
    color: "#2196f3",
    showLabel: true,
  },
  render: args => {
    const [progress, setProgress] = useState<number>(10);

    useEffect(() => {
      const targetProgress: number = 100;

      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < targetProgress) {
            return prev + 10 > targetProgress ? targetProgress : ((prev + 10) as typeof progress);
          } else {
            return 10;
          }
        });
      }, 800);

      return () => clearInterval(interval);
    }, []);

    return <Progress {...args} value={progress} />;
  },
};

export const FileUploadWithProgressBar: Story = {
  args: {
    value: 10,
    color: "#2196f3",
    showLabel: true,
  },
  render: args => {
    const [progress, setProgress] = useState<number>(0);

    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
      if (isUploading && progress !== null && progress < 100) {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev === null) return 10;
            return prev + 10 > 100 ? 100 : ((prev + 10) as typeof progress);
          });
        }, 500);

        return () => clearInterval(interval);
      } else if (progress === 100) {
        setIsUploading(false);
      }
    }, [progress, isUploading]);

    const handleFileUpload = () => {
      setIsUploading(true);
      setProgress(10);
    };

    return (
      <div className="space-y-4">
        <Button onClick={handleFileUpload} className="w-30" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload File"}
        </Button>

        {isUploading && progress !== null && <Progress {...args} value={progress} />}
      </div>
    );
  },
};

export const PasswordChecker: Story = {
  args: {
    value: 10,
    color: "#2196f3",
    showLabel: true,
  },
  render: args => {
    const getPasswordStrength = (password: string): number => {
      let strength = 0;

      if (password.length === 0) strength += 10;
      if (password.length >= 8) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/\d/.test(password)) strength += 25;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;

      return strength;
    };

    const getColor = (strength: number): string => {
      if (strength <= 25) return "#ef4444";
      if (strength <= 50) return "#f59e0b";
      if (strength <= 75) return "#3b82f6";
      return "#22c55e";
    };

    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState<number>(10);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setStrength(getPasswordStrength(newPassword) as typeof strength);
    };

    const customProgressBarStyles = css`
      border-radius: 8px;
      height: 10px;

      .progress-container {
        background-color: #e0e0e0;
        border-radius: inherit;
        height: inherit;
        overflow: hidden;
        width: 100%;
      }
    `;

    return (
      <div className="p-4 max-w-sm mx-auto">
        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="block w-full p-2 border rounded-md mb-4"
          placeholder="Enter your password"
        />

        <Progress
          {...args}
          value={strength}
          showLabel={false}
          color={getColor(strength)}
          className={customProgressBarStyles}
        />
      </div>
    );
  },
};
