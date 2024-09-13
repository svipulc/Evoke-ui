import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "./index";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultContainer: Story = {
  render: () => {
    return (
      <Container>
        <div>Hello World</div>
      </Container>
    );
  },
};

export const Default: Story = {
  render: args => (
    <Container {...args} className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <Card.Header>
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </Card.Header>
        <Card.Content>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
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
          <p className="text-sm text-gray-600 text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  ),
};
