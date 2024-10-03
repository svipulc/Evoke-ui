import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from ".";
import { people } from "@/data";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const VerticalScrolling: Story = {
  args: {
    orientation: "vertical",
    className:
      "h-[350px] bg-white dark:bg-primary dark:highlight-white/5 shadow-lg rounded-xl flex flex-col divide-y dark:divide-secondary/10",
    children: people.map(person => (
      <div key={person.id} className="flex items-center gap-4 p-4">
        <img className="w-12 h-12 rounded-full" src={person.image} alt={person.name} />
        <div className="flex flex-col">
          <strong className="text-primary text-sm font-medium dark:text-white">
            {person.name}
          </strong>
          <span className="text-gray-500 text-sm font-medium dark:text-secondary/70">
            {person.role}
          </span>
        </div>
      </div>
    )),
  },
};

export const HorizontalScrolling: Story = {
  args: {
    orientation: "horizontal",
    className:
      "flex w-[500px] h-[150px] bg-white dark:bg-primary dark:highlight-white/5 shadow-lg rounded-xl ",
    children: people.map(person => (
      <div key={person.id} className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-16 rounded-full" src={person.image} alt={person.name} />
          <strong className="text-primary text-xs font-medium dark:text-white">
            {person.name}
          </strong>
        </div>
      </div>
    )),
  },
};