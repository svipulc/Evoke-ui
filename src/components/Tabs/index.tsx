// Tabs Component

import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, MouseEvent, useState } from "react";
import { TabsContext, useTabs } from "./TabsContext";
import {
  tabsContentStyles,
  tabsIndicatorStyles,
  tabsListStyles,
  tabsStyles,
  tabsTriggerStyles,
} from "./index.styles";

// Tabs

type CustomTabsProps = {
  children?: React.ReactNode;
  defaultValue: string;
};

type TabsProps = ComponentProps<"div"> &
  CustomTabsProps &
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
      <div className={cn(tabsStyles(), className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList

type TabListProps = ComponentProps<"div"> & VariantProps<typeof tabsListStyles>;

export const TabsList: React.FC<TabListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(tabsListStyles(), className)} {...props}>
      {children}
    </div>
  );
};

// TabTrigger

type CustomTabsTriggerProps = {
  value: string;
};

type TabTriggerProps = ComponentProps<"button"> &
  CustomTabsTriggerProps &
  VariantProps<typeof tabsTriggerStyles>;

export const TabsTrigger: React.FC<TabTriggerProps> = ({
  children,
  value,
  className,
  onClick,
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveTab?.(value);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={cn(tabsTriggerStyles({ active: isActive }), className)}
      {...props}
    >
      {children}
      {isActive && <span className={cn(tabsIndicatorStyles())}></span>}
    </button>
  );
};

// TabContent

type CustomTabsContentProps = {
  value: string;
};

type TabContentProps = ComponentProps<"div"> & CustomTabsContentProps;

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
        <div className={cn(tabsContentStyles(), className)} {...props}>
          {children}
        </div>
      )}
    </>
  );
};
