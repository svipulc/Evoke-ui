import { cn } from "@/utils";
import { ComponentProps } from "react";
import { scrollAreaStyles } from "./index.style";

type ScrollAreaProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical" | "both";
};

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  orientation = "vertical",
  className,
}) => {
  return <div className={cn(scrollAreaStyles({ orientation, className }))}>{children}</div>;
};
