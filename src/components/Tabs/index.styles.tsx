// Tabs component styles
import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";

// Tabs
export const tabsStyles = ({
  theme,
  direction,
}: {
  theme: EvokeTheme;
  direction: "horizontal" | "vertical";
}) =>
  css({
    display: "flex",
    width: theme.size.full,
    height: theme.size.full,
    borderRadius: theme.borderRadius.xlarge,
    flexDirection: direction === "horizontal" ? "column" : "row",
  });

// Tabs List
export const tabsListStyles = ({
  theme,
  isFitted,
  direction,
}: {
  theme: EvokeTheme;
  isFitted: boolean;
  direction: "horizontal" | "vertical";
}) =>
  css({
    display: isFitted ? "flex" : "block",
    borderBottom: `${theme.size["px"]} solid ${theme.colors.neutral.border}`,
    flexDirection: direction === "horizontal" ? "row" : "column",
    overflow: direction === "horizontal" ? "hidden auto" : "auto hidden",
    ...(direction === "vertical" && {
      display: "flex",
      // flex: 1,
      height: "fit-content",
      minWidth: "max-content",
      flexDirection: "column",
      width: "max-content",
      borderBottom: theme.size[0],
    }),
  });
// Tabs Trigger
export const tabsTriggerStyles = ({
  theme,
  active,
  disabled,
  isFitted,
  direction,
}: {
  theme: EvokeTheme;
  active: boolean;
  disabled: boolean;
  isFitted: boolean;
  direction: "horizontal" | "vertical";
}) =>
  css({
    boxSizing: "content-box",
    width: isFitted ? theme.size.full : theme.size.fit,
    transition: "color 0.2s, background-color 0.2s",
    border: "none",
    color: active ? theme.colors.variants.primary.main : theme.colors.neutral.text,
    "&:focus": {
      outline: "none",
    },
    "&:focus-visible": {
      boxShadow: ` inset 0 0 0 2px ${theme.colors.variants.primary.main}`,
      inset: "1px",
      borderRadius: theme.borderRadius.medium,
    },
    ...(disabled && {
      cursor: "not-allowed",
      color: theme.pallete.gray[500],
    }),
    ...(direction === "horizontal"
      ? {
          padding: theme.spacing.xsmall + " " + theme.spacing.small,
          borderBottom: active ? `2px solid ${theme.colors.variants.primary.main}` : "none",
        }
      : {
          padding: theme.spacing.small + " " + theme.spacing.xsmall,
          height: theme.size.fit,
          borderLeft: active ? `2px solid ${theme.colors.variants.primary.main}` : "none",
        }),
  });

// Tabs Content
export const tabsContentStyles = ({
  theme,
  direction,
}: {
  theme: EvokeTheme;
  direction: "horizontal" | "vertical";
}) =>
  css({
    width: theme.size.full,
    height: theme.size.full,
    overflow: direction === "vertical" ? "auto" : "hidden",
    color: theme.colors.neutral.text,
    ...(direction === "horizontal"
      ? {
          paddingTop: theme.spacing.medium,
        }
      : {
          paddingLeft: theme.spacing.medium,
        }),
  });
