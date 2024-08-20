import type { Meta, StoryObj } from "@storybook/react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoChatbubbleEllipsesOutline, IoChatbubbleEllipsesSharp, IoHeart } from "react-icons/io5";
import Card from ".";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    className: "md:w-96 dark:bg-primary dark:text-white dark:border-none",
    children: (
      <>
        <Card.Header>
          <h4 className="text-2xl font-semibold">Card Title</h4>
        </Card.Header>
        <Card.Content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </Card.Content>
        <Card.Footer>This is footer</Card.Footer>
      </>
    ),
  },
};

export const HeaderOnly: Story = {
  render: args => (
    <Card {...args} className="dark:bg-primary dark:text-white dark:border-none">
      <Card.Header>This card only has a header</Card.Header>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: args => (
    <Card {...args} className="dark:bg-primary dark:text-white dark:border-none">
      <Card.Content>This card only has content</Card.Content>
    </Card>
  ),
};

export const FooterOnly: Story = {
  render: args => (
    <Card {...args} className="dark:bg-primary dark:text-white dark:border-none">
      <Card.Footer>This card only has a footer</Card.Footer>
    </Card>
  ),
};

export const CardPost: Story = {
  args: {
    className: "md:w-96 dark:bg-primary dark:text-white dark:border-none",
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
            <p className="text-sm text-slate-600 dark:text-silverSteel">
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
          <div className="flex items-center gap-3">
            <IoMdHeartEmpty size={30} />
            <IoChatbubbleEllipsesOutline size={30} />
          </div>
          <div className="flex gap-2 items-center mt-2">
            <IoHeart size={15} className="fill-primary dark:fill-secondary" />
            <span>35 Likes</span>
          </div>
          <p className="text-wrap">
            As the sun dips below the horizon, it reminds us that endings can be beautiful too. 🌇
          </p>
        </Card.Footer>
      </>
    ),
  },
};

export const RegisterCard: Story = {
  args: {
    className: "md:w-96 dark:bg-primary dark:text-white dark:border-none",
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
        <Card.Footer>
          <div className="flex items-center justify-center gap-2">
            <span className="text-slate-600 dark:text-white/50">Already have an account?</span>
            <span className="text-primary underline-offset-1 underline dark:text-white">Login</span>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const LoginCard: Story = {
  args: {
    className: "md:w-96 dark:bg-primary dark:text-white dark:border-none",
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
        <Card.Footer>
          <div className="flex items-center justify-center gap-2">
            <span className="text-slate-600 dark:text-white/50">Don&apos;t have an account?</span>
            <span className="text-primary underline-offset-1 underline dark:text-white">
              Register
            </span>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const ModelCard: Story = {
  args: {
    className: "md:w-[35rem] dark:bg-primary dark:text-white dark:border-none",
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
    className: "md:w-96 h-24 dark:bg-primary dark:text-white dark:border-none",
    children: (
      <>
        <Card.Content className="flex pt-4 items-center justify-between gap-4">
          <div className="flex gap-2 items-center h-full">
            <img
              className="w-11 h-11 rounded-full ring-1 ring-secondary"
              src="https://mui.com/static/images/avatar/2.jpg"
              alt="profile"
            />
            <div className="flex flex-col">
              <h6>Username</h6>
              <p className="text-sm text-slate-600 dark:text-silverSteel">Lorem ipsum...</p>
            </div>
          </div>
          <div>
            <IoChatbubbleEllipsesSharp size={30} className="dark:fill-silverSteel fill-primary" />
          </div>
        </Card.Content>
      </>
    ),
  },
};
