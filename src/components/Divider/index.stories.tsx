import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../Divider/index";
import { Card } from "../Card";
import { TiHome } from "react-icons/ti";
import { BsChatSquareText } from "react-icons/bs";

const meta: Meta<typeof Divider> = {
  title: "Layouts/Divider",
  component: Divider,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["fullWidth", "inset", "middle"],
      description: "Controls the width and positioning of the divider",
    },
    Alignment: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
      description: "Sets the orientation of the divider",
    },
    type: {
      control: {
        type: "select",
      },
      options: ["solid", "dashed", "dotted"],
      description: "Specifies the style of the divider",
    },
    textAlign: {
      control: {
        type: "select",
      },
      options: ["left", "right", "top", "bottom", "center"],
      description: "Aligns text inside the divider",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const HorizontalDivider: Story = {
  args: {
    Alignment: "horizontal",
    variant: "fullWidth",
    textAlign: "center",
    children: "Horizontal Divider",
  },
};

export const VerticalDivider: Story = {
  args: {
    Alignment: "vertical",
    variant: "fullWidth",
    type: "dotted",
    textAlign: "center",
    children: "Vertical Divider",
  },

  render: args => {
    return (
      <>
        <div className="h-[20vh] w-[20vh] flex">
          <Divider {...args} className="" />
        </div>
      </>
    );
  },
};

export const VerticalDividerExample: Story = {
  args: {
    Alignment: "vertical",
    variant: "inset",
  },
  render: args => (
    <>
      <div className="h-[10vh] w-[10vh] border-[2px] flex justify-center items-center">
        <div className="p-2">
          <TiHome />
        </div>
        <Divider {...args} className="my-2" />
        <div className="p-2">
          <BsChatSquareText />
        </div>
      </div>
    </>
  ),
};

export const VariantDivider: Story = {
  args: {
    variant: "fullWidth",
    Alignment: "horizontal",
    type: "solid",
  },
  render: args => (
    <>
      <div className="border-[3px]  flex flex-col items-center">
        <div className="p-2">Full Width Variant below</div>
        <Divider {...args} />
        <div className="p-2">Middle Width Variant below</div>
        <Divider {...args} variant={"middle"} />
        <div className="p-2">Inset Width Variant below</div>
        <Divider {...args} variant={"inset"} />
        <div className="p-2">Last item</div>
      </div>
    </>
  ),
};

export const TextDivider: Story = {
  args: {
    variant: "fullWidth",
    Alignment: "horizontal",
    type: "solid",
    textAlign: "center",
  },
  render: args => (
    <>
      <div className="border-[3px]  flex flex-col items-center">
        <div className="p-8">Text center below</div>
        <Divider {...args} textAlign={"center"}>
          Text
        </Divider>
        <div className="p-8">Text left below</div>
        <Divider {...args} Alignment="horizontal" textAlign={"left"}>
          Text
        </Divider>
        <div className="p-8">Text right below</div>
        <Divider {...args} Alignment="horizontal" textAlign={"right"}>
          Text
        </Divider>
        <div className="p-8">Last item</div>
      </div>
      <div className="border-[3px] h-[20vh] flex justify-between">
        <div className="p-8">Text Top</div>
        <Divider {...args} Alignment="vertical" textAlign={"top"}>
          Text
        </Divider>
        <div className="p-8">Text center</div>
        <Divider {...args} Alignment="vertical" textAlign={"center"}>
          Text
        </Divider>
        <div className="p-8">Text bottom</div>
        <Divider {...args} Alignment="vertical" textAlign={"bottom"}>
          Text
        </Divider>
        <div className="p-8">Last item</div>
      </div>
    </>
  ),
};

export const TypeDivider: Story = {
  args: {
    variant: "middle",
    Alignment: "horizontal",
    type: "dotted",
    textAlign: "center",
  },
  render: args => (
    <>
      <div className="border-[3px]  flex flex-col items-center">
        <div className="p-8">Solid</div>
        <Divider {...args} type={"solid"} />
        <div className="p-8">Dotted</div>
        <Divider {...args} type={"dotted"} className="border-red-600" />
        <div className="p-8">Dashed</div>
        <Divider {...args} type={"dashed"} className="border-green-600" />
        <div className="p-8">Last item</div>
      </div>
    </>
  ),
};

export const UsingDividerInCard: Story = {
  args: {
    variant: "fullWidth",
    Alignment: "horizontal",
    type: "solid",
    textAlign: "center",
  },
  render: args => (
    <>
      <Card className="md:w-96 dark:bg-primary dark:text-white dark:border-none">
        <React.Fragment key=".0">
          <Card.Header>
            <h4 className="text-2xl font-semibold">Card Title</h4>
          </Card.Header>
          <Divider {...args} />
          <Card.Content>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </p>
          </Card.Content>
          <Divider {...args} />
          <Card.Footer>
            <p className="p-4">This is footer</p>
          </Card.Footer>
        </React.Fragment>
      </Card>
    </>
  ),
};
