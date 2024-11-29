/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/evoke-theme-config";
import { css } from "@emotion/react";

type Size = "sm" | "md" | "lg" | "full";

export const modalOverlayStyles = (theme: CustomTheme) =>
  css({
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.common.black + theme.opacity.mediumDark,
    transition: "opacity 300ms ease-in-out",
    zIndex: theme.zIndex.highest,
    width: "100%",
  });

export const modalBodyBaseStyles = (theme: CustomTheme, size: Size) =>
  css({
    backgroundColor: theme.colors.variants.modalColor.main,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.large,
    transition: "transform 300ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing.medium,
    maxHeight: "100%",
    height: "auto",
    ...{
      sm: { width: "32rem" },
      md: { width: "48rem" },
      lg: { width: "72rem" },
      full: {
        height: "100%",
        width: "100%",
        margin: theme.spacing.none,
        borderRadius: theme.borderRadius.none,
      },
    }[size],

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      margin: size === "full" ? theme.spacing.none : theme.spacing.small,
    },
  });

export const modalHeaderStyles = (theme: CustomTheme) =>
  css({
    padding: theme.spacing.medium,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderStartEndRadius: `${theme.borderRadius.medium}`,
    borderStartStartRadius: `${theme.borderRadius.medium}`,

    [`@media (max-width: ${theme.breakpoints.md})`]: {
      padding: theme.spacing.small,
    },
  });

export const modalContentStyles = (theme: CustomTheme, size: Size) =>
  css({
    padding: theme.spacing.medium,
    overflowY: "auto",
    maxHeight: size === "full" ? "100%" : `calc(100vh - ${theme.spacing.xxlarge})`,
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      padding: theme.spacing.small,
    },
  });

export const modalFooterStyles = (theme: CustomTheme) =>
  css({
    padding: theme.spacing.medium,
    borderEndStartRadius: `${theme.borderRadius.medium}`,
    borderEndEndRadius: `${theme.borderRadius.medium}`,
  });
