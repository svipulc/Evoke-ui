import { cva } from "class-variance-authority";

export const tooltipParentStyle = cva("group relative inline-block");

export const tooltipStyle = cva(
  "invisible group-hover:visible opacity-0 group-hover:opacity-100 transition p-2 rounded absolute bg-gray-800 text-white text-xs break-words whitespace-normal max-w-[200px] w-max",
  {
    variants: {
      position: {
        top: "left-1/2 transform -translate-x-1/2 bottom-[calc(100%+5px)]",
        bottom: "left-1/2 transform -translate-x-1/2 top-[calc(100%+5px)]",
        left: "top-1/2 transform -translate-y-1/2 right-[calc(100%+5px)]",
        right: "top-1/2 transform -translate-y-1/2 left-[calc(100%+5px)]",
        topStart: "left-0 bottom-[calc(100%+5px)]",
        topEnd: "right-0 bottom-[calc(100%+5px)]",
        bottomStart: "left-0 top-[calc(100%+5px)]",
        bottomEnd: "right-0 top-[calc(100%+5px)]",
        leftStart: "top-0 right-[calc(100%+5px)]",
        leftEnd: "bottom-0 right-[calc(100%+5px)]",
        rightStart: "top-0 left-[calc(100%+5px)]",
        rightEnd: "bottom-0 left-[calc(100%+5px)]",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);
