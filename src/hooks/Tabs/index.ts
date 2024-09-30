import { TabsContext } from "@/context/Tabs";
import { useContext, useEffect, useState } from "react";

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};

export const useTabState = (
  defaultValue: string,
  controlledActiveTab?: string,
  onTabChange?: (value: string) => void
) => {
  const [activeTab, setActiveTab] = useState(controlledActiveTab || defaultValue);

  useEffect(() => {
    if (controlledActiveTab !== undefined) {
      setActiveTab(controlledActiveTab);
    }
  }, [controlledActiveTab]);

  const handleTabChange = (value: string) => {
    if (controlledActiveTab === undefined) {
      setActiveTab(value);
    }
    onTabChange?.(value);
  };

  return { activeTab, setActiveTab: handleTabChange };
};
