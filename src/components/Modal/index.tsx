import { cn } from "@/utils";
import { ModalOverlayStyles } from "./index.style";
import { ModalBackgroundStyles } from "./index.style";
import { createContext, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

import { ComponentProps } from "react";

export type ModalProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
};

export type ModalTriggerProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
};

export type ModalBodyProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type ModalHeaderProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type ModalContentProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type ModalFooterProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export interface ModalContextProps {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const Modal: React.FC<ModalProps> & {
  Header: React.FC<ModalHeaderProps>;
  Content: React.FC<ModalContentProps>;
  Footer: React.FC<ModalFooterProps>;
} = ({ isOpen, onClose, children, className, closeOnOutsideClick = true }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          ModalOverlayStyles(),
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          className
        )}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal"
      >
        <div
          className={cn(
            ModalBackgroundStyles(),
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <div className={cn(ModalBackgroundStyles(), className)}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Header: React.FC<ModalHeaderProps> = ({ children, className }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalHeader must be used within a Modal");
  }
  return (
    <div
      className={cn("m-6 flex justify-between items-center", className)}
      aria-labelledby="modal-header"
    >
      {children}
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={context.onClose}
        className="text-gray-400 hover:text-gray-600 w-fit"
      >
        <IoMdClose />
      </Button>
    </div>
  );
};

const Content: React.FC<ModalContentProps> = ({ children, className }) => {
  return (
    <div className={cn("m-6", className)} aria-labelledby="modal-content">
      {children}
    </div>
  );
};

const Footer: React.FC<ModalFooterProps> = ({ children, className }) => {
  return (
    <div className={cn("m-6", className)} aria-labelledby="modal-footer">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
