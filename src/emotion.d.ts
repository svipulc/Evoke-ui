// emotion.d.ts
import "@emotion/react";
import { CustomTheme } from "./evoke-theme-config";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
