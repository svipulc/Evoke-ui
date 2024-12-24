import { ResponsiveValue } from "@/theme/theme.type";
import React, { ComponentProps, createContext } from "react";

export type ModalContextProps = ComponentProps<"div"> & {
  showCloseButton?: boolean;
  size: ResponsiveValue<"sm" | "md" | "lg" | "full">;
  onClose: () => void;
};

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalContextProvider: React.FC<ModalContextProps> = ({
  children,
  onClose = () => {},
  size = "md",
  showCloseButton = true,
}) => {
  return (
    <ModalContext.Provider value={{ onClose, size, showCloseButton }}>
      {children}
    </ModalContext.Provider>
  );
};
