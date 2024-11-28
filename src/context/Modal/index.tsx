import React, { ComponentProps, createContext } from "react";

export type ModalContextProps = ComponentProps<"div"> & {
  scrollBehaviour?: boolean;
  showCross?: boolean;
  size?: "sm" | "md" | "lg" | "full";
  onClose: () => void;
};

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalContextProvider: React.FC<ModalContextProps> = ({
  children,
  onClose,
  scrollBehaviour,
  size,
  showCross,
}) => {
  return (
    <ModalContext.Provider value={{ onClose, scrollBehaviour, size, showCross }}>
      {children}
    </ModalContext.Provider>
  );
};
