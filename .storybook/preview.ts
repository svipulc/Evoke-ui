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

  // decorators: [
  //   withThemeFromJSXProvider({
  //     themes: {
  //       light: lightTheme,
  //       dark: darkTheme,
  //     },
  //     defaultTheme: "light",
  //     Provider: ThemeProvider,
  //   }),
  // ],
};
export default preview;
