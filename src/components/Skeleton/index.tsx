import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { skeletonStyle } from "./index.style";

type SkeletonProps = ComponentProps<"div"> &
  VariantProps<typeof skeletonStyle> & {
    variant?: "circular" | "rectangular" | "text";
    width?: string;
    height?: string;
  };

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangular",
  width,
  height,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(skeletonStyle({ variant }), className)}
      style={{ width, height }}
      aria-hidden={true}
      {...props}
    ></div>
  );
};
