// Tabs Component

import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, useState } from "react";
import { TabsContext, useTabs } from "./TabsContext";
import { tabsContentStyles, tabsStyles } from "./index.styles";

// Tabs

type CustomeTabsProps = {
  children?: React.ReactNode;
  defaultValue: string;
};

type TabsProps = ComponentProps<"div"> &
  CustomeTabsProps &
  VariantProps<typeof tabsStyles>;

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn(tabsStyles(), className, "tabs")} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList

type TabListProps = ComponentProps<"div">;

export const TabsList: React.FC<TabListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("tabs-list flex gap-4", className)} {...props}>
      {children}
    </div>
  );
};

// TabTrigger

type TabTriggerProps = ComponentProps<"button"> & {
  value: string;
};

export const TabsTrigger: React.FC<TabTriggerProps> = ({
  children,
  value,
  className,
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;
  const handleClick = () => {
    console.log(value);
    setActiveTab?.(value);
  };
  return (
    <button
      onClick={handleClick}
      className={cn(
        `tab-trigger p-2 hover:bg-silverSteel/10 text-md ${isActive ? "text-primary dark:text-white border-b-secondary border-b-4 " : "dark:text-silverSteel "}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// TabContent

type TabContentProps = ComponentProps<"div"> & {
  value: string;
};

export const TabsContent: React.FC<TabContentProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const { activeTab } = useTabs();
  return (
    <>
      {activeTab === value && (
        <div
          className={cn("tabs-content", tabsContentStyles(), className)}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
};
