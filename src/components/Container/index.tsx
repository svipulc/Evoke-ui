import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { containerStyle } from "./index.style";

export type ContainerProps = ComponentProps<"div"> & VariantProps<typeof containerStyle>;

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth,
  className,
  ...props
}) => {
  return (
    <div className={cn(containerStyle({ maxWidth }), className)} {...props}>
      {children}
    </div>
  );
};
