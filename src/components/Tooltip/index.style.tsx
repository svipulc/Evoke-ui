import { cva } from "class-variance-authority";

export const tooltipParentStyle = cva("group relative inline-block");

export const tooltipStyle = cva("base-tooltip-class", {
  variants: {
    showTooltip: {
      show: "invisible group-hover:visible opacity-0 group-hover:opacity-100 transition p-1 rounded absolute whitespace-nowrap",
      hide: "hidden",
    },
    position: {
      top: "left-1/2 transform -translate-x-1/2 bottom-[calc(100%+5px)]",
      bottom: "left-1/2 transform -translate-x-1/2 top-[calc(100%+5px)]",
      left: "top-1/2 transform -translate-y-1/2 right-[calc(100%+5px)]",
      right: "top-1/2 transform -translate-y-1/2 left-[calc(100%+5px)]",
    },
  },
  defaultVariants: {
    showTooltip: "show",
    position: "top",
  },
});
