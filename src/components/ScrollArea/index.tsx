import { ComponentProps, forwardRef } from "react";

import { cn } from "@/utils";
import { scrollAreaStyles } from "./index.style";

type ScrollAreaProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical" | "both";
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, orientation = "vertical", className, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(scrollAreaStyles({ orientation, className }))}>
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";
