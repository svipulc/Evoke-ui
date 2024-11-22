import React, { ComponentProps, createContext } from "react";

export type ModalContextProps = ComponentProps<"div"> & {
  scrollBehaviour?: boolean;
  showCloseButton?: boolean;
  size: "sm" | "md" | "lg" | "full";
  onClose: () => void;
};

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalContextProvider: React.FC<ModalContextProps> = ({
  children,
  onClose,
  scrollBehaviour,
  size,
  showCloseButton,
}) => {
  return (
    <ModalContext.Provider value={{ onClose, scrollBehaviour, size, showCloseButton }}>
      {children}
    </ModalContext.Provider>
  );
};
