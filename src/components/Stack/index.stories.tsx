/** @jsxImportSource @emotion/react */
import { Meta, StoryObj } from "@storybook/react/*";
import { Stack } from ".";

const meta: Meta<typeof Stack> = {
  title: "Layouts/Stack",
  component: Stack,
  argTypes: {
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: "row | column | row-reverse | column-reverse",
        },
        defaultValue: {
          summary: "row",
        },
      },
    },
    spacing: {
      options: ["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: "xxsmall | xsmall | small | medium | large | xlarge | xxlarge",
        },
        defaultValue: {
          summary: "medium",
        },
      },
    },
    align: {
      options: ["start", "center", "end", "stretch", "baseline"],
      control: { type: "radio" },
      table: {
        type: {
          summary: "start | center | end | stretch | baseline",
        },
        defaultValue: {
          summary: "start",
        },
      },
    },
    justify: {
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: "start | center | end | space-between | space-around | space-evenly",
        },
        defaultValue: {
          summary: "start",
        },
      },
    },
    wrap: {
      options: ["wrap", "nowrap", "wrap-reverse"],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: "wrap | nowrap | wrap-reverse",
        },
        defaultValue: {
          summary: "wrap",
        },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Box = () => {
  return (
    <div
      css={{ height: "50px", width: "70px", backgroundColor: "#1b94a180", borderRadius: "5%" }}
    ></div>
  );
};

export const Usage: Story = {
  args: {
    children: (
      <>
        <Box />
        <Box />
        <Box />
      </>
    ),
  },
};

export const VerticalStack: Story = {
  args: {
    ...Usage.args,
    direction: "column",
  },
};

export const ResponsiveDirection: Story = {
  args: {
    ...Usage.args,
    direction: { xs: "column", sm: "row" },
  },
};

export const ResponsiveValue: Story = {
  args: {
    ...Usage.args,
    spacing: { xs: "small", md: "large", xl: "xxlarge" },
    justify: { xs: "start", sm: "center", md: "end" },
  },
};
