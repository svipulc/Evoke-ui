import type { Preview } from "@storybook/react";
import "../src/index.css";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";

import { lightTheme, darkTheme } from "../src/evoke-theme-config";
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
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
    }),
  ],
};
export default preview;
