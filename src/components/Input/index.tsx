import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, useState } from "react";
import { iconStyle, inputStyle, inputWrapperStyle } from "./index.style";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm text-light-silverSteel dark:text-silverSteel">
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
            type={inputType}
            {...props}
            className={cn(inputStyle({ type, error }))}
            required={required}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-silverSteel hover:text-light-secondary dark:text-silverSteel dark:hover:text-secondary"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
        {error && <span className="text-sm text-red-600 dark:text-red-400 ">{errorMessage}</span>}
        {helperText && !error && (
          <span className="text-sm text-light-silverSteel dark:text-silverSteel">{helperText}</span>
        )}
      </div>
    </div>
  );
};
