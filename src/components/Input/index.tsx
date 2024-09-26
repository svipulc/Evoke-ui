import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { iconStyle, inputStyle, inputWrapperStyle } from "./index.style";

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyle> & {
    name: string;
    type: string;
    label?: string;
    helperText?: string;
    error?: boolean;
    errorMessage?: string;
    required?: boolean;
  };

export const Input = ({
  children,
  name,
  type,
  label,
  helperText,
  error = false,
  errorMessage = "Invalid input",
  required = false,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sm text-gray-600 dark:text-gray-50/80"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="flex flex-col gap-1 relative">
        <div className={cn(inputWrapperStyle())}>
          {children && <span className={cn(iconStyle())}>{children}</span>}
          <input
            id={name}
            name={name}
            type={type}
            {...props}
            className={cn(inputStyle({ type, error }))}
            required={required}
          />
        </div>
        {error && (
          <span className="text-sm text-red-600 dark:text-red-400 ">
            {errorMessage}
          </span>
        )}
        {helperText && !error && (
          <span className="text-sm text-gray-500 dark:text-gray-50/60 ">
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
};
