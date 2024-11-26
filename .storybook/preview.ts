import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    darkMode: {
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      // Add theme for light mode & dark mode
      themes: {
        // light: {},
        // dark: {},
      },
      // defaultTheme: "dark",
      Provider: ThemeProvider,
    }),
  ],
};
export default preview;
