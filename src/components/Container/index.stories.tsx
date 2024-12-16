import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./index";
import { Skeleton } from "../Skeleton";

const meta: Meta<typeof Container> = {
  title: "Layouts/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    maxWidth: {
      options: ["full", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-sky-300 w-full h-[200px]"></div>,
  },
};

export const MaxWidth: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Container {...args} maxWidth="sm">
          <div className="bg-sky-300 w-full h-[50px] text-center">container-sm</div>
        </Container>
        <Container {...args} maxWidth="md">
          <div className="bg-indigo-300 w-full h-[50px] text-center">container-md</div>
        </Container>
        <Container {...args} maxWidth="lg">
          <div className="bg-red-300 w-full h-[50px] text-center">container-lg</div>
        </Container>
        <Container {...args} maxWidth="xl">
          <div className="bg-green-300 w-full h-[50px] text-center">container-xl</div>
        </Container>
        <Container {...args} maxWidth="2xl">
          <div className="bg-yellow-300 w-full h-[50px] text-center">container-2xl</div>
        </Container>
      </>
    );
  },
};

export const NavContainer: Story = {
  args: {
    maxWidth: "2xl",
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Container {...args}>
        <nav className="bg-primary/10 p-4 dark:bg-dark-primary dark:text-dark-secondary text-primary">
          <div className="flex justify-between items-center">
            <div className=" text-lg">Brand</div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              {isOpen ? (
                <FaTimes className=" cursor-pointer" size={24} onClick={() => setIsOpen(false)} />
              ) : (
                <FaBars className=" cursor-pointer" size={24} onClick={() => setIsOpen(true)} />
              )}
            </div>

            {/* Navigation Links */}
            <ul className={`flex-col md:flex-row md:flex ${isOpen ? "flex" : "hidden"} md:flex`}>
              <li className=" p-2">
                <a href="#home">Home</a>
              </li>
              <li className=" p-2">
                <a href="#about">About</a>
              </li>
              <li className=" p-2">
                <a href="#services">Services</a>
              </li>
              <li className=" p-2">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    );
  },
};

export const LoginContainer: Story = {
  render: ({ ...args }) => (
    <Container {...args} className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md dark:bg-dark-primary dark:text-white dark:border-none">
        <Card.Header>
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </Card.Header>
        <Card.Content>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-transparent  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary dark:text-dark-secondary">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex gap-4 w-full justify-between">
              <Button variant={"solid"} size="md" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </Card.Content>
        <Card.Footer>
          <p className="text-sm  text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-primary dark:text-dark-secondary">
              Sign up
            </a>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  ),
};

export const PostCotainer: Story = {
  render: () => {
    return (
      <Container className="p-2" maxWidth="sm">
        <div className="flex gap-2 items-center">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width="40px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </div>
        <div className="p-2">
          <Skeleton width="100%" height="200px" />
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width="40px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </div>
        <div className="p-2">
          <Skeleton width="100%" height="200px" />
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width="40px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </div>
        <div className="p-2">
          <Skeleton width="100%" height="200px" />
        </div>
        <div className="flex gap-2 items-center">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width="40px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </div>
        <div className="p-2">
          <Skeleton width="100%" height="200px" />
        </div>
      </Container>
    );
  },
};
