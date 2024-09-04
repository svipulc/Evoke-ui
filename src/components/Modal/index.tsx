import { cn } from "@/utils";
import { ModalBodyStyles, ModalOverlayStyles } from "./index.style";
import { createContext, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

import { ComponentProps } from "react";

export type ModalDivProps = ComponentProps<"div">;

export type ModalProps = ModalDivProps & {
  isOpen: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
};

export type ModalTriggerProps = ModalDivProps & {
  isOpen: boolean;
  onClose: () => void;
};

export type ModalHeaderProps = ModalDivProps & {
  showCross?: boolean;
};

export interface ModalContextProps {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const Modal: React.FC<ModalProps> & {
  Header: React.FC<ModalHeaderProps>;
  Content: React.FC<ModalDivProps>;
  Footer: React.FC<ModalDivProps>;
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
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal"
      >
        <div
          className={cn(
            ModalBodyStyles(),
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            className
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Header: React.FC<ModalHeaderProps> = ({ children, className, showCross = true }) => {
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
      {showCross && (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={context.onClose}
          className="text-gray-400 hover:text-gray-600 w-fit"
        >
          <IoMdClose />
        </Button>
      )}
    </div>
  );
};

const Content: React.FC<ModalDivProps> = ({ children, className }) => {
  return (
    <div className={cn("m-6", className)} aria-labelledby="modal-content">
      {children}
    </div>
  );
};

const Footer: React.FC<ModalDivProps> = ({ children, className }) => {
  return (
    <div className={cn("m-6", className)} aria-labelledby="modal-footer">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
