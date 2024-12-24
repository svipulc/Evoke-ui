/** @jsxImportSource @emotion/react */
import { TabsContext } from "@/context";
import { useTabs, useTabState } from "@/hooks";
import { ComponentProps, MouseEvent, useRef } from "react";
import { tabsContentStyles, tabsListStyles, tabsStyles, tabsTriggerStyles } from "./index.styles";
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";
import { ResponsiveValue } from "@/theme/theme.type";

// Types
type Direction = "horizontal" | "vertical";

type TabsProps = ComponentProps<"div"> & {
  children?: React.ReactNode;
  defaultValue: string;
  isFitted?: ResponsiveValue<boolean>;
  activeTab?: string;
  onTabChange?: (value: string) => void;
  direction?: Direction;
  css?: SerializedStyles | CSSObject;
};

type TabListProps = ComponentProps<"div"> & {
  css?: SerializedStyles | CSSObject;
};

type TabTriggerProps = ComponentProps<"button"> & {
  value: string;
  disabled?: boolean;
  css?: SerializedStyles | CSSObject;
};
type TabContentProps = ComponentProps<"div"> & {
  value: string;
  css?: SerializedStyles | CSSObject;
};

// Tabs Component
export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultValue,
  isFitted = false,
  activeTab: controlledActiveTab,
  onTabChange,
  direction = "horizontal",
  className,
  css,
  ...props
}) => {
  const theme = useEvokeTheme();
  const { activeTab, setActiveTab } = useTabState(defaultValue, controlledActiveTab, onTabChange);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, defaultValue, isFitted, direction }}>
      <div
        aria-label="Tabs"
        css={[tabsStyles({ theme, direction }), css]}
        className={className}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabsList Component
export const TabsList: React.FC<TabListProps> = ({ children, className, css, ...props }) => {
  const theme = useEvokeTheme();
  const { direction = "horizontal" } = useTabs();
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={listRef}
      css={[tabsListStyles({ theme, direction }), css]}
      className={className}
      role="tablist"
      aria-label="Tabs List"
      aria-orientation={direction}
      {...props}
    >
      {children}
    </div>
  );
};

// TabsTrigger Component
export const TabsTrigger: React.FC<TabTriggerProps> = ({
  children,
  value,
  disabled = false,
  className,
  onClick,
  css,
  ...props
}) => {
  const theme = useEvokeTheme();
  const {
    activeTab,
    setActiveTab,
    defaultValue,
    isFitted = true,
    direction = "horizontal",
  } = useTabs();
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

  // Accessibility: Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" && direction === "horizontal") {
      focusNextTab(e.currentTarget);
    } else if (e.key === "ArrowLeft" && direction === "horizontal") {
      focusPrevTab(e.currentTarget);
    } else if (e.key === "ArrowDown" && direction === "vertical") {
      focusNextTab(e.currentTarget);
    } else if (e.key === "ArrowUp" && direction === "vertical") {
      focusPrevTab(e.currentTarget);
    }
  };

  const focusNextTab = (currentTab: HTMLElement) => {
    const allTabs = Array.from(
      currentTab.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]') || []
    );
    const currentIndex = allTabs.indexOf(currentTab);
    const nextTab = allTabs[(currentIndex + 1) % allTabs.length];
    nextTab?.focus();
  };

  const focusPrevTab = (currentTab: HTMLElement) => {
    const allTabs = Array.from(
      currentTab.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]') || []
    );
    const currentIndex = allTabs.indexOf(currentTab);
    const prevTab = allTabs[(currentIndex - 1 + allTabs.length) % allTabs.length];
    prevTab?.focus();
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      css={[
        tabsTriggerStyles({
          theme,
          active: isActive,
          disabled: isDisabled,
          isFitted,
          direction,
        }),
        css,
      ]}
      disabled={isDisabled}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {children}
    </button>
  );
};

// TabsContent Component
export const TabsContent: React.FC<TabContentProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const theme = useEvokeTheme();
  const { activeTab, direction = "horizontal" } = useTabs();
  const isActive = activeTab === value;
  return (
    <>
      {isActive && (
        <div
          role="tabpanel"
          css={tabsContentStyles({ theme, direction })}
          hidden={!isActive}
          aria-labelledby={`tab-${value}`}
          {...props}
        >
          {children}
        </div>
      )}
    </>
  );
};
