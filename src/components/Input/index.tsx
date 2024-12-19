/** @jsxImportSource @emotion/react */
import { ComponentProps } from "react";
import {
  componentContainerStyle,
  errorMessageStyle,
  helperTextStyle,
  iconStyle,
  inputStyle,
  inputWrapperStyle,
  labelStyle,
} from "./index.style";
import { useEvokeTheme } from "@/hooks/theme";
import { SerializedStyles, CSSObject } from "@emotion/react";
import { EvokeTheme } from "@/theme/theme.type";

export type IconPosition = "left" | "right";

type InputProps = ComponentProps<"input"> & {
  name: string;
  type: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  css?: SerializedStyles | CSSObject;
};

const renderIcon = (theme: EvokeTheme, icon: React.ReactNode, position: IconPosition) => {
  return icon ? (
    <span aria-label="input-icon" css={iconStyle(theme, position)}>
      {icon}
    </span>
  ) : null;
};

export const Input = ({
  name,
  type,
  label,
  helperText,
  error = false,
  errorMessage = "Invalid input",
  required = false,
  iconPosition = "right",
  icon,
  className,
  css,
  disabled = false,
  ...props
}: InputProps) => {
  const theme = useEvokeTheme();
  return (
    <div css={componentContainerStyle(theme)} aria-label="input-container">
      {/* Label */}
      {label && (
        <label aria-label={label} htmlFor={name} css={labelStyle(theme)}>
          {label}
          {required && <span css={{ color: theme.colors.variants.error.main }}> *</span>}
        </label>
      )}
      {/* Input */}
      <div aria-label="input-with-icon" css={inputWrapperStyle(theme, error, disabled)}>
        {iconPosition === "left" && renderIcon(theme, icon, iconPosition)}
        <input
          aria-label="input-field"
          aria-labelledby={label}
          id={name}
          name={name}
          type={type}
          css={inputStyle(theme)}
          required={required}
          disabled={disabled}
          {...props}
        />
        {iconPosition === "right" && renderIcon(theme, icon, iconPosition)}
      </div>
      {/* Error Message if error is true */}
      {error && (
        <span aria-label="input-validation-error-message" css={errorMessageStyle(theme)}>
          {errorMessage}
        </span>
      )}
      {/* Helper Text if helperText is provided and error is false */}
      {helperText && !error && (
        <span aria-label="input-helper-text" css={helperTextStyle(theme)}>
          {helperText}
        </span>
      )}
    </div>
  );
};
