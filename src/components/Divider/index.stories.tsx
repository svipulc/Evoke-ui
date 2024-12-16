import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, AvatarImage } from "../Avatar";
import { Card } from "../Card";
import { Divider } from "../Divider/index";

const meta: Meta<typeof Divider> = {
  title: "Layouts/Divider",
  component: Divider,
  argTypes: {
    // variant: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["fullWidth", "inset", "middle"],
    //   description: "Controls the width and positioning of the divider",
    // },
    // alignment: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["horizontal", "vertical"],
    //   description: "Sets the orientation of the divider",
    // },
    type: {
      control: {
        type: "select",
      },
      options: ["solid", "dashed", "dotted"],
      description: "Specifies the style of the divider",
      table: {},
    },
    // textAlign: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["left", "right", "top", "bottom", "center"],
    //   description: "Aligns text inside the divider",
    // },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const HorizontalDivider: Story = {
  args: {
    alignment: "horizontal",
  },
};

export const VerticalDivider: Story = {
  args: {
    alignment: "vertical",
  },

  render: args => {
    return (
      <>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage fallback="KP" />
          </Avatar>
          <Divider {...args} />
          <Avatar>
            <AvatarImage fallback="VP" />
          </Avatar>
        </div>
      </>
    );
  },
};

export const DividerWithText: Story = {
  args: {
    alignment: "horizontal",
    children: "center",
  },
};

export const TextAlignDivider: Story = {
  render: args => (
    <div className="flex flex-1 gap-8 h-[30vh]">
      <Divider alignment="vertical" textAlign={"start"}>
        start
      </Divider>
      <Divider alignment="vertical" textAlign={"center"}>
        center
      </Divider>
      <Divider alignment="vertical" textAlign={"end"}>
        end
      </Divider>
    </div>
  ),
};

export const TypeDivider: Story = {
  args: {
    alignment: "horizontal",
    textAlign: "center",
  },
  render: args => (
    <>
      <div className="">
        <div className="p-8">Solid</div>
        <Divider type={"solid"} />
        <div className="p-8">Dotted</div>
        <Divider type="dotted" />
        <div className="p-8">Dashed</div>
        <Divider type={"dashed"} />
        <div className="p-8">Last item</div>
      </div>
    </>
  ),
};

export const UsingDividerInCard: Story = {
  args: {
    alignment: "horizontal",
    type: "solid",
    textAlign: "center",
  },
  render: args => (
    <>
      <Card className="md:w-96 dark:bg-dark-primary dark:text-white dark:border-none">
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
