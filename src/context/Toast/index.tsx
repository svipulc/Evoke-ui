import React, { createContext, useState, ReactNode } from "react";
import { Toast } from "@/components";

type ToastType = "success" | "error" | "warning" | "info";
type ToastPosition = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

interface Toast {
  id: number;
  message: string;
  type?: ToastType;
  title?: string;
  position?: ToastPosition;
  autoClose?: boolean;
}

type ToastContextType = {
  showToast: (
    message: string,
    type?: ToastType,
    title?: string,
    position?: ToastPosition,
    autoClose?: boolean
  ) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (
    message: string,
    type: ToastType = "info",
    title?: string,
    position?: ToastPosition,
    autoClose: boolean = true
  ) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, message, type, title, position, autoClose }]);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          position={toast.position}
          autoClose={toast.autoClose}
          onClose={() => setToasts(currentToasts => currentToasts.filter(t => t.id !== toast.id))}
        />
      ))}
    </ToastContext.Provider>
  );
};

export default ToastContext;
