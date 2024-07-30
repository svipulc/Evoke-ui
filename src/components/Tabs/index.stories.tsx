// Tabs component story

import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./index";

const metata: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default metata;

type Story = StoryObj<typeof Tabs>;

export const Tab: Story = {
  args: {
    defaultValue: "Tab1",
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"Tab1"}>Tab1</TabsTrigger>
          <TabsTrigger value={"Tab2"}>Tab2</TabsTrigger>
          <TabsTrigger value={"Tab3"}>Tab3</TabsTrigger>
        </TabsList>
        <TabsContent value={"Tab1"}>
          <div>Hello world from Tab 1</div>
        </TabsContent>
        <TabsContent value={"Tab2"}>Tab 2 content</TabsContent>
      </>
    ),
  },
};
