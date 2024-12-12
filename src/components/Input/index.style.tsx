import { EvokeTheme } from "@/theme/theme.type";
import { css } from "@emotion/react";
import { IconPosition } from ".";

export const componentContainerStyle = (theme: EvokeTheme) =>
  css({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xxsmall,
  });

export const labelStyle = (theme: EvokeTheme) =>
  css({
    color: theme.colors.neutral.text,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: theme.typography.fontWeight.medium,
  });

export const inputWrapperStyle = (theme: EvokeTheme, error: boolean, disabled: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    borderRadius: theme.borderRadius.medium,
    backgroundColor: "transparent",
    height: theme.size[10],
    textAlign: "left",
    color: theme.colors.neutral.text,
    border: `${theme.size["px"]} solid ${theme.colors.neutral.border}`,
    ":hover": {
      borderColor: theme.colors.variants.primary.main,
    },
    ":focus-within": {
      borderWidth: theme.size[0.5],
      borderColor: theme.colors.variants.primary.main,
    },
    "&:autofill": {
      backgroundColor: "transparent",
    },
    ...(error && {
      border: `${theme.size["px"]} solid ${theme.colors.variants.error.main}`,
      ":focus-within": {
        borderWidth: theme.size[0.5],
        borderColor: theme.colors.variants.error.main,
      },
      ":hover": {
        borderColor: theme.colors.variants.error.main,
      },
    }),
    ...(disabled && {
      cursor: "not-allowed",
      "&:hover": {
        borderColor: theme.colors.neutral.border,
      },
    }),
  });

export const inputStyle = (theme: EvokeTheme) =>
  css({
    width: "100%",
    padding: `${theme.spacing.none} ${theme.spacing.small}`,
    fontSize: theme.typography.fontSizes.small,
    color: theme.colors.neutral.text,
    backgroundColor: "transparent",
    "::file-selector-button": {
      backgroundColor: "transparent",
      border: theme.size[0],
      fontSize: theme.typography.fontSizes.small,
      fontWeight: theme.typography.fontWeight.medium,
      color: theme.colors.variants.primary.main,
    },
    "::placeholder": {
      color: theme.colors.neutral.text + theme.opacity.mediumDark,
    },
    ":focus": {
      outline: "none", // Equivalent to "focus:outline-none"
    },
    "&[disabled]": {
      cursor: "not-allowed",
      opacity: 0.6,
      "&:hover": {
        borderderColor: theme.colors.neutral.border,
      },
    },
    "&:autofill": {
      boxShadow: "0 0 0px 1000px transparent inset",
    },
  });

export const errorMessageStyle = (theme: EvokeTheme) =>
  css({
    color: theme.colors.variants.error.main,
    fontSize: theme.typography.fontSizes.small,
  });

export const helperTextStyle = (theme: EvokeTheme) =>
  css({
    color: theme.colors.neutral.text + theme.opacity.mediumDark,
    fontSize: theme.typography.fontSizes.small,
  });

export const iconStyle = (theme: EvokeTheme, iconPosition: IconPosition) =>
  css({
    width: "fit-content",
    color: theme.colors.neutral.text + theme.opacity.mediumDark,
    ...(iconPosition === "left" && { paddingInlineStart: theme.spacing.small }),
    ...(iconPosition === "right" && { paddingInlineEnd: theme.spacing.small }),
  });
