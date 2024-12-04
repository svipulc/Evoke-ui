import { ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/utils";
import { iconStyle, inputStyle, inputWrapperStyle } from "./index.style";

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyle> &
  VariantProps<typeof iconStyle> & {
    name: string;
    type: string;
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    required?: boolean;
    icon?: React.ReactNode;
  };

const renderIcon = (icon: React.ReactNode, position: "left" | "right") => {
  return icon ? <span className={cn(iconStyle({ iconPosition: position }))}>{icon}</span> : null;
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
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm text-light-silverSteel dark:text-dark-silverSteel">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="flex flex-col gap-1 relative">
        <div className={cn(inputWrapperStyle())}>
          {iconPosition === "left" && renderIcon(icon, iconPosition)}
          <input
            id={name}
            name={name}
            type={type}
            {...props}
            className={cn(inputStyle({ type, error }))}
            required={required}
          />
          {iconPosition === "right" && renderIcon(icon, iconPosition)}
        </div>
        {error && <span className="text-sm text-red-600 dark:text-red-400 ">{errorMessage}</span>}
        {helperText && !error && (
          <span className="text-sm text-light-silverSteel dark:text-dark-silverSteel">
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
};
