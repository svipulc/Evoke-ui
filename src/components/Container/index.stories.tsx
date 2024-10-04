import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./index";

const meta: Meta<typeof Container> = {
  title: "Layouts/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    maxWidth: {
      options: ["full", "sm", "md", "lg", "xl", "2xl", "auto"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavContainer: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Container {...args}>
        <nav className="bg-primary/10 p-4 dark:bg-primary dark:text-secondary text-primary">
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
      <Card className="w-full max-w-md dark:bg-primary dark:text-white dark:border-none">
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
                <a href="#" className="font-medium text-primary dark:text-secondary">
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
            <a href="#" className="font-medium text-primary dark:text-secondary">
              Sign up
            </a>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  ),
};
