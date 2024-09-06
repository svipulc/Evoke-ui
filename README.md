# @social-media/evoke-ui <!-- change this -->

## Introduction

Evoke UI is a modern, flexible, and highly customizable component library built with TypeScript and Vite. It is designed to help developers create beautiful, responsive, and accessible user interfaces with minimal effort.

### Key Features

- **Highly Customizable**: Easily theme and style components to match your project's design system.
- **TypeScript Support**: Built with TypeScript for a better development experience and type safety.
- **Responsive Design**: Components are designed to work seamlessly across different screen sizes.
- **Accessible**: Built with accessibility in mind to ensure your app is usable by everyone.
- **Lightweight**: Optimized for performance with minimal footprint.
- **Dark Mode**: Also supports dark mode

### Installation

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
import "@social-media/evoke-ui/dist/styles.css"; // Import default styles

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
git clone https://github.com/svipulc/evoke-ui.git
cd @social-media/evoke-ui
npm install
npm start
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Vite](https://vitejs.dev/) - The web framework used
- [Storybook](https://storybook.js.org/) - A tool for building UI components and pages in isolation
