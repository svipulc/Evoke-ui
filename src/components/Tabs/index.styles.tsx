// Tabs component styles
import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { responsiveCss } from "@/utils";
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
    flexDirection: direction === "horizontal" ? "column" : "row",
  });

// Tabs List
export const tabsListStyles = ({
  theme,
  direction,
}: {
  theme: EvokeTheme;
  direction: "horizontal" | "vertical";
}) =>
  css({
    display: "flex",
    borderBottom: `${theme.size["px"]} solid ${theme.colors.neutral.border}`,
    flexDirection: direction === "horizontal" ? "row" : "column",
    Width: theme.size.full,
    overflowX: "scroll",
    overflowY: "hidden",
    "::-webkit-scrollbar": {
      display: "none",
    },
    ...(direction === "vertical" && {
      height: "fit-content",
      minWidth: "max-content",
      flexDirection: "column",
      width: "max-content",
      borderBottom: theme.size[0],
      overflowY: "scroll",
      overflowX: "hidden",
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
  isFitted: ResponsiveValue<boolean>;
  direction: "horizontal" | "vertical";
}) =>
  css([
    responsiveCss(theme, isFitted, val =>
      css({
        width: val ? theme.size.full : theme.size.fit,
      })
    ),
    css({
      boxSizing: "content-box",
      transition: "color 0.2s, background-color 0.2s",
      border: "none",
      color: active ? theme.colors.variants.primary.main : theme.colors.neutral.text,
      "&:focus": {
        outline: "none",
      },
      "&:focus-visible": {
        borderRadius: `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0px 0px`,
        backgroundColor: theme.colors.variants.primary.main + theme.opacity.light,
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
      ":active": {
        backgroundColor: theme.colors.variants.primary.main + theme.opacity.light,
        transition: "background-color 0.02s",
        borderRadius: `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0px 0px`,
      },
    }),
  ]);
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
