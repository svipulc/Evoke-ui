# @social-media/evoke-ui

<!-- ![dasdas](/public/Logo.svg) -->

  <img alt="Shows a black logo in light color mode and a white one in dark color mode." src="./public/Logo.svg" style=" display: block; background-color: white; border-radius: 0.2rem; padding:5 20; width: 200px; height:; margin:10 auto">

Evoke UI is a modern, flexible, and highly customizable component library built with TypeScript and Vite. It is designed to help developers create beautiful, responsive, and accessible user interfaces with minimal effort.

### Key Features

- **TypeScript Support**: Built with TypeScript for a better development experience and type safety.
- **Responsive Design**: Components are designed to work seamlessly across different screen sizes.
- **Accessible**: Built with accessibility in mind ––to ensure your app is usable by everyone.
- **Lightweight**: Optimized for performance with minimal footprint.
- **Dark Mode**: Supports dark mode out of the box.

### Insatallation

To install Evoke UI, you can use npm or yarn:

```bash
npm install @social-media/evoke-ui
```

or

```bash
yarn add @social-media/evoke-ui
```

## Getting Started

### Basic Setup

After installing Evoke UI, you need to set up your project to use the components:

```js
import React from "react";
import { Button } from "@social-media/evoke-ui";
import "@social-media/evoke-ui/dist/evoke-ui.css"; // Import default styles

const App = () => (
  <div>
    <Button variant="solid">Hello World</Button>
  </div>
);

export default App;
```

## Components Available

### **Buttons**

- **Button** - A versatile button component with multiple variants and sizes (e.g., solid, outline, link).

### Forms

- **Input** - A customizable input field for user data entry, supporting various types (text, password, email, etc.).

### Layout

- **Card** - A card component for displaying content in a structured and visually appealing way.
- **Modal** - A dialog component for displaying content in an overlay above the main content.
- **Tabs** - A component for organizing content into tabs, with support for horizontal and vertical orientations.
- **Scroll Area** - A scrollable container component with customizable scroll behavior.
- **Grid** - A grid component for creating responsive layouts with rows and columns.
- **Stack** - A stack component for arranging elements in a vertical or horizontal stack.
- **Container** - A container component for organizing content within a fixed width or fluid layout.
- **Box** - A flexible container component for custom layout and styling.
- **Divider** - A divider component for separating content with a horizontal or vertical line.

### Media

- **Avatar** - An avatar component for displaying user profiles or icons.

### Feedback

- **Toast** - A toast component for temporary notifications that appear and disappear automatically.
- **Tooltip** - A tooltip component for displaying additional information on hover or focus.
- **Progress** - A progress bar component for visualizing the completion of tasks or processes.

### Utilities

- **Skeleton** - A Skeleton component is display a skeleton while content is fetching

## Contribution Guide

### Contributing to the Library

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b branch-name).
3. Make your changes and commit them (npm run commit).
4. Push to the branch (git push origin branch-name).
5. Open a pull request.

### Development Setup

To set up a development environment:

```bash
git clone https://github.com/yourusername/evoke-ui.git
cd @social-media/evoke-ui
npm install
npm start
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Vite](https://vitejs.dev/) - The web framework used
- [Storybook](https://storybook.js.org/) - A tool for building UI components and pages in isolation
