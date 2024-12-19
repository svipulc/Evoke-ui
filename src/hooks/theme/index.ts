import { defaultTheme } from "@/index";
import { useTheme } from "@emotion/react";

export const useEvokeTheme = () => {
  const theme = useTheme();
  if (Object.entries(theme).length === 0) return defaultTheme;
  return theme;
};
