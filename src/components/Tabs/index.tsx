// Tabs Component

import { TabsContext } from "@/context";
import { useTabs, useTabState } from "@/hooks";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, MouseEvent, useEffect, useRef, useState } from "react";
import {
  tabsContentStyles,
  tabsIndicatorStyles,
  tabsListStyles,
  tabsStyles,
  tabsTriggerStyles,
} from "./index.styles";

// Tabs

type Direction = "horizontal" | "vertical";

type CustomTabsProps = {
  children?: React.ReactNode;
  defaultValue: string;
  isFitted?: boolean;
  activeTab?: string;
  border?: boolean;
  onTabChange?: (value: string) => void;
  direction?: Direction;
};

type TabsProps = ComponentProps<"div"> & CustomTabsProps & VariantProps<typeof tabsStyles>;

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  isFitted = false,
  activeTab: controlledActiveTab,
  onTabChange,
  border = false,
  direction = "horizontal",
  className,
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabState(defaultValue, controlledActiveTab, onTabChange);

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab, defaultValue, isFitted, border, direction }}
    >
      <div className={cn(tabsStyles({ border, direction }), className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList

type TabListProps = ComponentProps<"div"> & VariantProps<typeof tabsListStyles>;

export const TabsList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  const { isFitted, direction, activeTab } = useTabs();
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = listRef.current?.querySelector('[aria-selected="true"]');
      if (activeTab) {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeTab as HTMLElement;
        setIndicatorStyle(
          direction === "horizontal"
            ? { left: `${offsetLeft}px`, width: `${offsetWidth}px` }
            : { top: `${offsetTop}px`, height: `${offsetHeight}px` }
        );
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [direction, activeTab, isFitted]);
  return (
    <div
      ref={listRef}
      className={cn(tabsListStyles({ isFitted, direction }), className)}
      role="tablist"
      aria-orientation={direction}
      {...props}
    >
      {children}
      <span className={cn(tabsIndicatorStyles({ direction }))} style={indicatorStyle} />
    </div>
  );
};

// TabTrigger

type CustomTabsTriggerProps = {
  value: string;
  disabled?: boolean;
};

type TabTriggerProps = ComponentProps<"button"> &
  CustomTabsTriggerProps &
  VariantProps<typeof tabsTriggerStyles>;

export const TabsTrigger: React.FC<TabTriggerProps> = ({
  children,
  value,
  disabled = false,
  className,
  onClick,
  ...props
}) => {
  const { activeTab, setActiveTab, defaultValue, isFitted, direction } = useTabs();
  const isActive = activeTab === value;
  const isDefault = defaultValue === value;
  const isDisabled = isDefault ? false : disabled;

  if (isDefault && disabled) {
    console.error("Default Tab cannot be disabled");
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      setActiveTab?.(value);
      if (onClick) {
        onClick(e);
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      className={cn(
        tabsTriggerStyles({ active: isActive, disabled: isDisabled, isFitted, direction }),
        className
      )}
      disabled={isDisabled}
      role="tab"
      aria-selected={isActive}
      {...props}
    >
      {children}
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
  const { activeTab, direction } = useTabs();
  const isActive = activeTab === value;
  return (
    <>
      {isActive && (
        <div
          role="tabpanel"
          id={`panel-${value}`}
          hidden={!isActive}
          className={cn(tabsContentStyles({ direction }), className)}
          {...props}
        >
          {isActive && children}
        </div>
      )}
    </>
  );
};
