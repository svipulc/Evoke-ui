import { cn } from "@/utils";
import { ModalBodyStyles, ModalOverlayStyles } from "./index.style";
import { ModalContextProvider } from "../../context/Modal/index";

import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

import { ComponentProps, useEffect, useState } from "react";
import { VariantProps } from "class-variance-authority";
import { useModalContext } from "@/hooks";
import { createPortal } from "react-dom";

export type ModalDivProps = ComponentProps<"div">;

export type ModalProps = ModalDivProps &
  VariantProps<typeof ModalBodyStyles> & {
    isOpen: boolean;
    onClose: () => void;
    closeOnOutsideClick?: boolean;
    scrollBehaviour?: boolean;
    showCross?: boolean;
    size?: "sm" | "md" | "lg" | "full";
  };

export type ModalTriggerProps = ModalDivProps & {
  isOpen: boolean;
  onClose: () => void;
};

export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById("portal-root") || document.body)
    : null;
};

export const Modal: React.FC<ModalProps> & {
  Header: React.FC<ModalDivProps>;
  Content: React.FC<ModalDivProps>;
  Footer: React.FC<ModalDivProps>;
} = ({
  isOpen,
  onClose,
  children,
  className,
  scrollBehaviour = false,
  closeOnOutsideClick = true,
  size = "full",
  showCross = true,
}) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalContextProvider
      onClose={onClose}
      scrollBehaviour={scrollBehaviour}
      size={size}
      showCross={showCross}
    >
      {/* <Portal> */}
      <div
        className={cn(
          ModalOverlayStyles(),
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label="modal"
      >
        <div
          className={cn(
            ModalBodyStyles({ size }),
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            className
          )}
          role="dialog"
          aria-label="modal-body"
        >
          {children}
        </div>
      </div>
      {/* </Portal> */}
    </ModalContextProvider>
  );
};

const Header: React.FC<ModalDivProps> = ({ children, className }) => {
  const context = useModalContext();
  return (
    <div
      className={cn("m-3 mb-2 flex justify-between items-center", className)}
      role="dialog"
      aria-label="modal-header"
    >
      {children}
      {context.showCross && (
        <Button
          variant={"ghost"}
          aria-label="close-modal"
          size={"sm"}
          onClick={context.onClose}
          className="text-gray-400 text-2xl hover:text-gray-600 w-fit"
        >
          <IoMdClose />
        </Button>
      )}
    </div>
  );
};

const Content: React.FC<ModalDivProps> = ({ children, className }) => {
  const context = useModalContext();

  let contentStyle;

  if (context.scrollBehaviour && context.size === "full") {
    contentStyle = "m-4 mt-2 overflow-auto min-h-[30vh]";
  } else if (context.scrollBehaviour) {
    contentStyle = "m-4 mt-2 overflow-auto h-[30vh]";
  } else {
    contentStyle = "m-4 mt-2";
  }
  return (
    <div
      className={cn(contentStyle, className)}
      role="dialog"
      aria-label="modal-content"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

const Footer: React.FC<ModalDivProps> = ({ children, className }) => {
  const context = useModalContext();
  return (
    <div
      className={cn(context.size === "full" ? "m-3 mt-auto" : "m-3", className)}
      role="dialog"
      aria-label="modal-footer"
    >
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
