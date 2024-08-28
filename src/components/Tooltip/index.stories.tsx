import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./index";
import { Button } from "../Button";
import { IoMdHome } from "react-icons/io";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const DefaultTooltip: Story = {
  args: {
    position: "topStart",
    content: "Home",
    children: (
      <Button>
        <IoMdHome />
      </Button>
    ),
  },
};
