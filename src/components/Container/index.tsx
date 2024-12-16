/** @jsxImportSource @emotion/react */
import { ComponentProps } from "react";
import { containerStyle, containerWidthStyle } from "./index.style";
import { CSSObject, SerializedStyles } from "@emotion/react";
import { useEvokeTheme } from "@/hooks/theme";

export type ContainerProps = ComponentProps<"div"> & {
  maxWidth?: keyof ReturnType<typeof containerWidthStyle>;
  css?: SerializedStyles | CSSObject;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "md",
  className,
  css,
  ...props
}) => {
  const theme = useEvokeTheme();
  return (
    <div css={[containerStyle(maxWidth, theme), css]} className={className} {...props}>
      {children}
    </div>
  );
};
