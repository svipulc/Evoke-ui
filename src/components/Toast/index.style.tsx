import { cva } from "class-variance-authority";

export const toastStyle = cva(
  "flex flex-col items-start gap-3 px-4 py-2 rounded-md shadow-lg text-white fixed z-50 max-w-xs w-80 max-h-40 overflow-auto",
  {
    variants: {
      type: {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-blue-500",
      },
      position: {
        topRight: "top-4 right-4",
        topLeft: "top-4 left-4",
        bottomRight: "bottom-4 right-4",
        bottomLeft: "bottom-4 left-4",
      },
    },
    defaultVariants: {
      type: "info",
      position: "topRight",
    },
    compoundVariants: [
      {
        position: "topRight",
        class: "sm:top-2 sm:right-2 sm:w-80 w-64",
      },
      {
        position: "topLeft",
        class: "sm:top-2 sm:left-2 sm:w-80 w-64",
      },
      {
        position: "bottomRight",
        class: "sm:bottom-2 sm:right-2 sm:w-80 w-64",
      },
      {
        position: "bottomLeft",
        class: "sm:bottom-2 sm:left-2 sm:w-80 w-64",
      },
    ],
  }
);
