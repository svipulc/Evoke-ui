import { cva } from "class-variance-authority";

export const DividerStyles = cva("relative flex", {
  variants: {
    Alignment: {
      horizontal: "w-full max-h-[1px]",
      vertical: "flex-col h-full max-w-[1px]",
    },
    type: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
  },

  defaultVariants: {
    Alignment: "horizontal",
  },
});

export const DividerChildrenStyle = cva("absolute bg-white px-2 text-gray-500 legend-text");

export const getVariantClass = (Alignment: string, variant: string): string => {
  if (Alignment === "horizontal") {
    switch (variant) {
      case "fullWidth":
        return "w-full";
      case "inset":
        return "w-[calc(100%-32px)] ml-8";
      case "middle":
        return "mx-auto w-3/4";
      default:
        return "";
    }
  } else {
    switch (variant) {
      case "fullWidth":
        return "h-full";
      case "inset":
        return "h-[calc(100%-32px)] mt-8";
      case "middle":
        return "my-auto h-3/4";
      default:
        return "";
    }
  }
};

export const getTextAlignClass = (alignment: string, position: string): string => {
  if (alignment === "horizontal") {
    switch (position) {
      case "left":
        return "top-[-0.6rem] left-4 left";
      case "center":
        return "top-[-0.6rem] left-1/2 transform -translate-x-1/2  center";
      case "right":
        return "top-[-0.6rem] right-4 right";
      default:
        return "";
    }
  } else if (alignment === "vertical") {
    switch (position) {
      case "left":
        return "top-4 left-[-1rem] top-vertical";
      case "center":
        return "top-1/2 left-[-1rem] transform -translate-y-1/2 center-vertical";
      case "right":
        return "bottom-4 left-[-1rem] bottom-vertical";
      default:
        return "";
    }
  }
  return "";
};
