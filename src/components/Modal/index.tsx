import { cn } from "@/utils";
import { ModalOverlayStyles } from "./index.style";
import {
  ModalProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalContentProps,
  ModalFooterProps,
} from "./modal.types";
import { ModalBackgroundStyles } from "./index.style";
import { createContext, useContext } from "react";

interface ModalContextProps {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const Modal: React.FC<ModalProps> & {
  Body: React.FC<ModalBodyProps>;
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
      >
        <div
          className={cn(
            ModalBackgroundStyles(),
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

const Body: React.FC<ModalBodyProps> = ({ className, children }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalHeader must be used within a Modal");
  }
  return (
    <div className={cn(ModalBackgroundStyles(), className)}>
      <div className="p-4">
        <button onClick={context.onClose} className="text-gray-400 hover:text-gray-600 float-end">
          &times;
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

const Header: React.FC<ModalHeaderProps> = ({ children }) => {
  return <div className="p-4 ">{children}</div>;
};

const Content: React.FC<ModalContentProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const Footer: React.FC<ModalFooterProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

Modal.Body = Body;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
