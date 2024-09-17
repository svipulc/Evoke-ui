import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { VariantProps } from "class-variance-authority";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export type ResponsiveValue<T> = T | { xs?: T; sm?: T; md?: T; lg?: T; xl?: T };

/**
 * Utility to memoize resolved responsive props.
 */
export const resolveResponsiveProps = <T extends string | number, U extends (...args: any) => any>(
  styleFunction: U,
  prop: ResponsiveValue<T>,
  variantKey: keyof VariantProps<U>
): string => {
  if (typeof prop === "object") {
    return Object.entries(prop)
      .map(([breakpoint, value]) => `${breakpoint}:${styleFunction({ [variantKey]: value })}`)
      .join(" ");
  }

  return styleFunction({ [variantKey]: prop });
};
