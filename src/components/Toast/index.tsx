import { useState, useEffect } from "react";
import { cn } from "../../utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { toastStyle } from "./index.style";
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

export type ToastProps = ComponentProps<"div"> &
  VariantProps<typeof toastStyle> & {
    title?: string;
    message: string;
    onClose?: () => void;
    autoClose?: boolean;
  };

const icons = {
  success: <FaCheckCircle />,
  error: <FaTimesCircle />,
  warning: <FaExclamationCircle />,
  info: <FaInfoCircle />,
};

export const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type = "info",
  onClose,
  autoClose = true,
  position = "topRight",
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div className={cn(toastStyle({ type, position }))} {...props}>
      <div className="flex gap-2 align-middle">
        <div className="mt-[0.4rem] w-4 h-4">{type && icons[type]}</div>
        <div>
          <p className="flex justify-start">
            {title && <strong className="text-lg font-semibold mb-1">{title}</strong>}
          </p>
          <p>{message}</p>
        </div>
      </div>
      {!autoClose && (
        <button
          className="absolute top-0 right-2 text-xl font-bold cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </button>
      )}
    </div>
  );
};
