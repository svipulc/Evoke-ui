import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipsesSharp, IoHeart } from "react-icons/io5";
import { Card } from ".";
import { Button } from "../Button";
import { Avatar, AvatarImage, Stack } from "../index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["elevated", "outline", "subtle"],
      control: { type: "inline-radio" },
      table: {
        type: {
          summary: "elevated | outline | subtle",
        },
        defaultValue: {
          summary: "elevated",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const CardExample = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="product-image"
        className="h-64 w-full object-cover rounded-t-md"
      />
      <Card.Content>
        <h3 className="text-lg font-semibold">Living room Sofa</h3>
        <p className="text-gray-500">
          This sofa is perfect for modern tropical spaces, baroque inspired spaces.
        </p>
        <p className="text-xl font-semibold">$450</p>
      </Card.Content>
      <Card.Footer>
        <Button>Buy Now</Button>
        <Button variant="ghost">Add to Cart</Button>
      </Card.Footer>
    </>
  );
};

export const Default: Story = {
  args: {
    children: <CardExample />,
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <Card variant="subtle">
          <CardExample />
        </Card>
        <Card variant="outline">
          <CardExample />
        </Card>
        <Card variant="elevated">
          <CardExample />
        </Card>
      </div>
    );
  },
};

export const Horizontal: Story = {
  args: {
    children: (
      <div className="flex">
        <div>
          <img
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="product-image"
            className="w-64 h-full rounded-s-md object-cover"
          />
        </div>
        <div>
          <Card.Content>
            <h3 className="font-semibold text-lg">The perfect latte</h3>
            <p>
              Caffè latte is a coffee beverage of Italian origin made with espresso and steamed
              milk.
            </p>
          </Card.Content>
          <Card.Footer>
            <Button>Buy Now</Button>
            <Button variant="ghost">Add to Cart</Button>
          </Card.Footer>
        </div>
      </div>
    ),
  },
};

export const CardPost: Story = {
  args: {
    css: {
      width: "450px",
    },
    children: (
      <>
        <Card.Header className="flex items-center gap-2">
          <img
            className="w-11 h-11 rounded-full ring-2 ring-secondary"
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="profile"
          />
          <div className="flex flex-col">
            <h6>Username</h6>
            <p className="text-sm text-slate-600 dark:text-dark-silverSteel">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </Card.Header>
        <Card.Content className="px-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
            alt="post"
          />
        </Card.Content>
        <Card.Footer className="my-card-footer">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <IoMdHeartEmpty size={30} />
              <IoChatbubbleEllipsesOutline size={30} />
            </div>
            <div className="flex gap-2 items-center mt-2">
              <IoHeart size={15} className="fill-primary dark:fill-dark-secondary" />
              <span>35 Likes</span>
            </div>
            <p className="text-wrap">
              As the sun dips below the horizon, it reminds us that endings can be beautiful too. 🌇
            </p>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const RegisterCard: Story = {
  args: {
    css: {
      width: "400px",
    },
    children: (
      <>
        <Card.Header>
          <h4 className="text-2xl font-semibold">Register</h4>
        </Card.Header>
        <Card.Content>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Enter your confirm password"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
            </div>
            <Button variant="solid" size="md" className="flex justify-center">
              Register
            </Button>
          </form>
        </Card.Content>
      </>
    ),
  },
};

export const LoginCard: Story = {
  args: {
    css: {
      width: "450px",
    },
    variant: "outline",
    children: (
      <>
        <Card.Header>
          <h4 className="text-2xl font-semibold">Login</h4>
        </Card.Header>
        <Card.Content>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent"
              />
            </div>
            <Button variant="solid" size="md" className="flex justify-center">
              Login
            </Button>
          </form>
        </Card.Content>
      </>
    ),
  },
};

export const ModelCard: Story = {
  args: {
    className: "md:w-[35rem] border shadow-lg dark:border-none",
    children: (
      <>
        <Card.Header>
          <h4 className="text-2xl font-semibold">Edit Profile</h4>
        </Card.Header>
        <Card.Content>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-2">
              <label htmlFor="profile_img" className="md:w-1/4">
                Profile Image
              </label>
              <input
                type="file"
                id="profile_img"
                accept=".png, .jpg, .jpeg"
                placeholder="Select your profile image"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent md:w-3/4 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-2">
              <label htmlFor="email" className="md:w-1/4">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent md:w-3/4 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-2">
              <label htmlFor="password" className="md:w-1/4">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-gray-300 rounded-md p-2 bg-transparent md:w-3/4 w-full"
              />
            </div>
          </form>
        </Card.Content>
        <Card.Footer>
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
            <Button variant="outline" size="sm" className="flex justify-center md:w-20 w-full">
              Cancel
            </Button>
            <Button
              variant="solid"
              size="md"
              className="flex justify-center first-letter md:w-20 w-full"
            >
              Save
            </Button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const FriendsCard: Story = {
  args: {
    css: {
      width: "350px",
    },
    children: (
      <Card.Content>
        <Stack align={"center"} justify="space-between">
          <Stack align={"center"}>
            <Avatar>
              <AvatarImage src="https://mui.com/static/images/avatar/2.jpg" alt="profile" />
            </Avatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Username</p>
              <p style={{ color: "gray" }}>Lorem ipsum...</p>
            </div>
          </Stack>
          <div>
            <IoChatbubbleEllipsesSharp
              size={30}
              className="dark:fill-dark-silverSteel fill-primary"
            />
          </div>
        </Stack>
      </Card.Content>
    ),
  },
};
