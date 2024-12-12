// Tabs component story
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";
import { useTabState } from "../../hooks";

const metata: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default metata;

type Story = StoryObj<typeof Tabs>;

export const Tab: Story = {
  args: {
    defaultValue: "One",
    border: true,
    direction: "horizontal",
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"One"}>One</TabsTrigger>
          <TabsTrigger value={"Two"}>Two</TabsTrigger>
        </TabsList>
        <TabsContent value={"One"}>
          <div>One</div>
        </TabsContent>
        <TabsContent value={"Two"}>Two</TabsContent>
      </>
    ),
  },
};

const tabsData = [
  { value: "overview", label: "Overview", content: "This is the overview content." },
  { value: "details", label: "Details", content: "Detailed information goes here." },
  { value: "reviews", label: "Reviews", content: "User reviews are displayed here." },
];

export const FittedTab: Story = {
  args: {
    defaultValue: "overview",
    border: true,
    direction: "horizontal",
    isFitted: true,
    children: (
      <>
        <TabsList>
          {tabsData.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </>
    ),
  },
};

export const DissableTab: Story = {
  args: {
    defaultValue: "One",
    border: true,
    direction: "horizontal",
    isFitted: true,
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"One"}>One</TabsTrigger>
          <TabsTrigger value={"Two"} disabled>
            Two
          </TabsTrigger>
          <TabsTrigger value={"Three"}>Three</TabsTrigger>
        </TabsList>
        <TabsContent value={"One"}>One</TabsContent>
        <TabsContent value={"Two"}>Two</TabsContent>
        <TabsContent value={"Three"}>Three</TabsContent>
      </>
    ),
  },
};

export const WithoutBorder: Story = {
  args: {
    defaultValue: "One",
    border: false,
    direction: "horizontal",
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"One"}>One</TabsTrigger>
          <TabsTrigger value={"Two"}>Two</TabsTrigger>
        </TabsList>
        <TabsContent value={"One"}>
          <div>One</div>
        </TabsContent>
        <TabsContent value={"Two"}>Two</TabsContent>
      </>
    ),
  },
};

export const verticalTabs: Story = {
  args: {
    defaultValue: "Tab1",
    border: true,
    isFitted: false,
    direction: "vertical",
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"Tab1"}>react</TabsTrigger>
          <TabsTrigger value={"Tab2"}>Vue</TabsTrigger>
          <TabsTrigger value={"Tab3"}>Typescript</TabsTrigger>
          <TabsTrigger value={"Tab4"}>Tab4</TabsTrigger>
          <TabsTrigger value={"Tab5"}>Tab5</TabsTrigger>
        </TabsList>
        <TabsContent value={"Tab1"}>
          <div>Hello world from Tab 1</div>
        </TabsContent>
        <TabsContent value={"Tab2"}>Tab 2 content</TabsContent>
        <TabsContent value={"Tab3"}>Tab 3 content</TabsContent>
        <TabsContent value={"Tab4"}>Tab 4 content</TabsContent>
        <TabsContent value={"Tab5"}>Tab 5 content</TabsContent>
      </>
    ),
  },
};

// example
export const LargeTab: Story = {
  args: {
    defaultValue: "Tab1",
    border: true,
    isFitted: false,
    direction: "vertical",
    children: (
      <>
        <TabsList>
          <TabsTrigger value={"Tab1"}>npm</TabsTrigger>
          <TabsTrigger value={"Tab2"}>Script Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="Tab1">
          <code>
            $ npm i --save logrocket // Code: import LogRocket from &apos;logrocket&apos;
            LogRocket.init(&apos;app/id&apos;);
          </code>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, atque delectus
            voluptatibus accusamus laboriosam cupiditate consequuntur quae deleniti nemo esse quam,
            eligendi officia adipisci ratione vero quaerat aperiam earum? Temporibus mollitia
            necessitatibus aperiam facere ipsa nulla, non quia, cum totam corporis, cumque voluptate
            iure illum! Quidem itaque rerum non recusandae, aliquam in consectetur fugiat eveniet a
            vero repellat iste quas sint nisi dolorum tenetur vel ullam fugit consequuntur, dolore
            quisquam aspernatur ratione? Sint, beatae consectetur! Quos quae a quas consequuntur
            optio reiciendis alias eligendi autem repellendus dignissimos, quaerat ad, beatae velit
            repudiandae ullam veniam possimus? Ex omnis rerum fugit soluta!
          </div>
          <h1 className="text-3xl">Tilte 2</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum quae ut tenetur
            qui corporis consequuntur mollitia. Fugiat enim distinctio, optio, delectus quidem
            accusantium officiis est illum quasi ducimus eum aliquam magni provident, fuga doloribus
            quia minus ipsam laboriosam impedit molestias a rem modi in. Corporis doloribus
            laboriosam eos similique dolorem quos tempora nemo quam, non beatae qui hic, dolores
            quae dolorum possimus ex facere repudiandae aspernatur quibusdam, quidem deserunt odit.
            Quas quia earum dignissimos at fugit aperiam quisquam doloremque eos et deleniti non,
            velit commodi esse debitis deserunt adipisci in ab eius voluptatem fuga. Fuga tempore
            quia, quidem natus, veniam, omnis quos id quae sequi aut ducimus vitae dolor
            perferendis? Fugit esse ea exercitationem id at nulla neque deserunt similique,
            voluptatum voluptate blanditiis voluptatibus eligendi minima consequatur quas
            reprehenderit facere odio, tempore, dolore explicabo dolores perspiciatis officia?
            Minima excepturi temporibus veniam, deserunt tenetur, aspernatur nulla perferendis esse,
            ducimus praesentium quisquam corrupti beatae illo ut quaerat aut quibusdam nostrum!
            Neque esse reiciendis odit rem accusamus ullam officia voluptatum debitis eos! Officia
            laborum placeat aliquam ipsam adipisci recusandae nulla laboriosam quis sit aspernatur
            quia eaque, exercitationem error hic. Esse sapiente, modi delectus, quis voluptatibus
            incidunt voluptas iste, odio ad numquam sit?
          </div>
        </TabsContent>
        <TabsContent value="Tab2">
          <code>(// Add to your HTML:)</code>
        </TabsContent>
      </>
    ),
  },
};
