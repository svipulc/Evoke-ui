# @social-media/evoke-ui

## Introduction

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
import { Button } from "evoke-ui";
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

- **[Button](docs/button.md)** - A versatile button component with multiple variants and sizes (e.g., solid, outline, link).

### Forms

- **[Input](docs/input.md)** - A customizable input field for user data entry, supporting various types (text, password, email, etc.).

### Layout

- **[Card](docs/card.md)** - A card component for displaying content in a structured and visually appealing way.
- **[Modal](docs/modal.md)** - A dialog component for displaying content in an overlay above the main content.
- **[Tabs](docs/scroll-)** - A component for organizing content into tabs, with support for horizontal and vertical orientations.
- **[Scroll Area](docs/scroll-)** - A scrollable container component with customizable scroll behavior.

### Media

- **[Avatar](docs/avatar.md)** - An avatar component for displaying user profiles or icons.

### Feedback

- **[Toast](docs/toast.md)** - A toast component for temporary notifications that appear and disappear automatically.
- **[Tooltip](docs/tooltip.md)** - A tooltip component for displaying additional information on hover or focus.
- **[Progress](docs/progress.md)** - A progress bar component for visualizing the completion of tasks or processes.

### Utilities

- **[Skeleton](docs/skeleton.md)** - A Skeleton component is display a skeleton while content is fetching

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
