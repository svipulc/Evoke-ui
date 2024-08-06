import { createContext, useContext } from "react";

export const TabsContext = createContext<{
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}>({});

export const useTabs = () => {
  return useContext(TabsContext);
};
