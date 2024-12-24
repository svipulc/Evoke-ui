import { EvokeTheme, ResponsiveValue } from "@/theme/theme.type";
import { css } from "@emotion/react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export function responsiveCss<T>(
  theme: EvokeTheme,
  value: ResponsiveValue<T>,
  styleGetter: (value: T) => ReturnType<typeof css>
) {
  if (typeof value !== "object") {
    return styleGetter(value);
  }

  return css(
    Object.entries(value as object).map(([breakpoint, val]) => ({
      [`@media (min-width: ${theme.breakpoints[breakpoint as keyof EvokeTheme["breakpoints"]]})`]:
        styleGetter(val as T),
    }))
  );
}
