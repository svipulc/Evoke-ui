/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from "@storybook/react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Button } from ".";
import { css } from "@emotion/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["solid", "outline", "surface", "subtle", "ghost", "link"],
      control: { type: "select" },
      description: "Defines the visual style of the button.",
      table: {
        type: { summary: "solid | outline | surface | subtle | ghost | link" },
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "icon"],
      control: { type: "select" },
      description: "Specifies the size of the button.",
      table: {
        type: { summary: "xs | sm | md | lg | xl | icon" },
        defaultValue: { summary: "md" },
      },
    },
    color: {
      options: ["primary", "secondary", "success", "warning", "info", "error"],
      control: { type: "select" },
      description: "Sets the color theme of the button.",
      table: {
        type: { summary: "primary | secondary | success | warning | info | error" },
        defaultValue: { summary: "primary" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disables the button if set to true.",

      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content displayed inside the button.",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Renders the button as a child element, such as a link.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        <Button size="xs">Button (xs)</Button>
        <Button size="sm">Button (sm)</Button>
        <Button size="md">Button (md)</Button>
        <Button size="lg">Button (lg)</Button>
        <Button size="xl">Button (xl)</Button>
      </div>
    );
  },
};

export const Variant: Story = {
  render: () => {
    return (
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="surface">Surface</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link" asChild>
          <a href="https://github.com">Link</a>
        </Button>
      </div>
    );
  },
};

export const Disable: Story = {
  render: () => {
    return (
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        <Button variant="solid" disabled>
          Solid
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
        <Button variant="surface" disabled>
          Surface
        </Button>
        <Button variant="subtle" disabled>
          Subtle
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
      </div>
    );
  },
};

export const Icon: Story = {
  render: () => {
    return (
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        <Button>
          <FaSearch /> Search
        </Button>
        <Button variant="outline">
          Send <FaArrowRight />
        </Button>
        <Button variant="outline" size="icon">
          <FaSearch
            css={css`
              width: 1rem;
              height: 1rem;
            `}
          />
        </Button>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        {["primary", "secondary", "success", "warning", "info", "error"].map(
          (color: any, index) => (
            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
              `}
              key={index}
            >
              <Button variant={"solid"} color={color}>
                Button
              </Button>
              <Button variant={"outline"} color={color}>
                Button
              </Button>
              <Button variant={"surface"} color={color}>
                Button
              </Button>
              <Button variant={"subtle"} color={color}>
                Button
              </Button>
              <Button variant={"ghost"} color={color}>
                Button
              </Button>
            </div>
          )
        )}
      </div>
    );
  },
};
