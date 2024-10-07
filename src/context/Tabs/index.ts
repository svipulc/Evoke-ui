import { createContext } from "react";

export const TabsContext = createContext<{
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  defaultValue: string;
  isFitted?: boolean;
  border?: boolean;
  direction?: "horizontal" | "vertical";
}>({ defaultValue: "" });
