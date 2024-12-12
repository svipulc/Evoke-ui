/** @jsxImportSource @emotion/react */
import { ComponentProps } from "react";
import { skeletonStyle } from "./index.style";
import { useEvokeTheme } from "@/hooks/theme";
import { CSSObject, SerializedStyles } from "@emotion/react";

export type SkeletonVariants = "circular" | "rectangular" | "text";

type SkeletonProps = ComponentProps<"div"> & {
  variant?: SkeletonVariants;
  width?: string;
  height?: string;
  css?: SerializedStyles | CSSObject;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangular",
  width,
  height,
  className,
  css,
  ...props
}) => {
  const theme = useEvokeTheme();
  return (
    <div
      aria-label="skeleton"
      role="status"
      css={[skeletonStyle(theme, variant, width, height), css]}
      className={className}
      aria-hidden={true}
      {...props}
    ></div>
  );
};
