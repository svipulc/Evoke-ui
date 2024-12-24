import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from ".";
import { FaUser } from "react-icons/fa";
import { Stack } from "../index";
import { shapeStyle, sizeStyle } from "./index.style";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: { type: "inline-radio" },
      table: {
        category: "Avatar",
        type: {
          summary: "xs | sm | md | lg | xl | 2xl | 3xl",
        },
        defaultValue: {
          summary: "md",
        },
      },
    },
    shape: {
      options: ["circular", "square"],
      control: { type: "inline-radio" },
      table: {
        category: "Avatar",
        type: {
          summary: "circular | square",
        },
        defaultValue: {
          summary: "circular",
        },
      },
    },
    children: {
      table: {
        category: "Avatar",
        type: {
          summary: "ReactNode",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    className: {
      table: {
        category: "Avatar",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
    css: {
      descriptioncription: "CSS styles to be applied to the Avatar component.",
      table: {
        category: "Avatar",
        type: {
          summary: "CSSProperties",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <AvatarImage
        src="https://mui.com/static/images/avatar/2.jpg"
        alt="Vishal Patel"
        fallback="VP"
      />
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack align={"center"} spacing={"small"}>
      {["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].map(size => (
        <Stack key={size} direction={"column"} align={"center"} spacing={"small"}>
          <Avatar key={size} size={size as keyof ReturnType<typeof sizeStyle>}>
            <AvatarImage src="https://mui.com/static/images/avatar/2.jpg" alt="Vishal Patel" />
          </Avatar>
          <span style={{ fontSize: "small" }}>{size}</span>
        </Stack>
      ))}
    </Stack>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Stack align={"center"} spacing={"small"}>
      {[
        { shape: "circular", label: "Circular" },
        { shape: "square", label: "Square" },
      ].map(({ shape, label }) => (
        <Stack key={shape} direction={"column"} align={"center"} spacing={"small"}>
          <Avatar shape={shape as keyof ReturnType<typeof shapeStyle>}>
            <AvatarImage src="https://mui.com/static/images/avatar/2.jpg" alt={label} />
          </Avatar>
          <span style={{ fontSize: "small" }}>{label}</span>
        </Stack>
      ))}
    </Stack>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    children: (
      <AvatarImage
        src="https://mui.com/static/images/avatar/3.jpg"
        alt="Styled Avatar"
        css={{ border: "2px solid green" }}
      />
    ),
  },
};

export const FallbackContent: Story = {
  render: () => (
    <Stack align={"center"} spacing={"small"}>
      <Avatar size="lg">
        <AvatarImage src="assets/test.jpg" alt="Fallback Example" fallback="FE" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="" alt="Fallback with Initials" />
      </Avatar>
    </Stack>
  ),
};

export const InvalidUrl: Story = {
  args: {
    size: "lg",
    children: <AvatarImage src="https://example.com/nonexistent.jpg" alt="Invalid Image URL" />,
  },
};

export const WithoutSource: Story = {
  args: {
    size: "md",
    children: <AvatarImage src="" alt="No Source" />,
  },
};

export const MultipleAvatars: Story = {
  render: () => (
    <Stack align={"center"} spacing={"small"}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Avatar key={index} size={{ xs: "xs", sm: "lg" }}>
          <AvatarImage
            src={`https://mui.com/static/images/avatar/${index + 1}.jpg`}
            alt={`Avatar ${index + 1}`}
          />
        </Avatar>
      ))}
    </Stack>
  ),
};
