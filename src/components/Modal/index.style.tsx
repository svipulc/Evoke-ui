/** @jsxImportSource @emotion/react */
import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { responsiveCss } from "@/utils";
import { css } from "@emotion/react";

type Size = "sm" | "md" | "lg" | "full";

export const modalOverlayStyles = (theme: EvokeTheme) =>
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

const modalSizeVariants = (theme: EvokeTheme) => ({
  sm: css({
    width: "32rem",
    maxHeight: `calc(100vh - ${theme.spacing.xxlarge})`,
    height: "auto",
  }),
  md: css({
    width: "48rem",
    maxHeight: `calc(100vh - ${theme.spacing.xxlarge})`,
    height: "auto",
  }),
  lg: css({
    width: "72rem",
    maxHeight: `calc(100vh - ${theme.spacing.xxlarge})`,
    height: "auto",
  }),
  full: css({
    height: "100%",
    maxHeight: "100%",
    width: "100%",
    margin: theme.spacing.none,
    borderRadius: theme.borderRadius.none,
  }),
});

const modalBodyBaseStyles = (theme: EvokeTheme) =>
  css({
    backgroundColor: theme.colors.variants.modalColor.main,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.large,
    transition: "transform 300ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing.medium,
  });

export const modalBodyStyles = (theme: EvokeTheme, size: ResponsiveValue<Size>) => {
  return css([
    modalBodyBaseStyles(theme),
    responsiveCss(theme, size, val => modalSizeVariants(theme)[val]),
  ]);
};

export const modalHeaderStyles = (theme: EvokeTheme) =>
  css({
    padding: theme.spacing.medium,
    paddingBottom: theme.spacing.none,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderStartEndRadius: `${theme.borderRadius.medium}`,
    borderStartStartRadius: `${theme.borderRadius.medium}`,
  });

export const modalContentStyles = (theme: EvokeTheme) =>
  css({
    padding: theme.spacing.medium,
    overflowY: "auto",
    // maxHeight: size === "full" ? "100%" : `calc(100vh - ${theme.spacing.xxlarge})`, // TODO: fix this
  });

export const modalFooterStyles = (theme: EvokeTheme) =>
  css({
    padding: theme.spacing.medium,
    paddingTop: theme.spacing.none,
    borderEndStartRadius: `${theme.borderRadius.medium}`,
    borderEndEndRadius: `${theme.borderRadius.medium}`,
  });
