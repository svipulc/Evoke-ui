/** @jsxImportSource @emotion/react */
import { createPortal } from "react-dom";
import {
  modalBodyBaseStyles,
  modalContentStyles,
  modalFooterStyles,
  modalHeaderStyles,
  modalOverlayStyles,
} from "./index.style";
import { ComponentProps, useContext, useEffect } from "react";
import { CSSObject, SerializedStyles, useTheme } from "@emotion/react";
import { Button } from "..";
import { IoMdClose } from "react-icons/io";
import { ModalContext, ModalContextProvider } from "@/context";

type ModalHeader = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  css?: SerializedStyles | CSSObject;
};

type ModalContent = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  css?: SerializedStyles | CSSObject;
};

type ModalFooter = ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  css?: SerializedStyles | CSSObject;
};

type ModalProps = ComponentProps<"div"> & {
  show: boolean;
  size?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  onClose: () => void;
  className?: string;
  bodyClassName?: string;
  css?: SerializedStyles | CSSObject;
};

// Modal Component
export const Modal: React.FC<ModalProps> & {
  Header: React.FC<ModalHeader>;
  Content: React.FC<ModalContent>;
  Footer: React.FC<ModalFooter>;
} = ({
  show,
  size = "md",
  children,
  closeOnOverlayClick = false,
  showCloseButton = true,
  onClose,
  className,
  bodyClassName,
  css: customCss,
}: ModalProps) => {
  const theme = useTheme();

  // to close when the user presses the Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && show) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show, onClose]);

  // Handle outside click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!show) return null;

  // Ensure createPortal doesn't throw errors in environments like SSR or testing:
  const modalRoot = typeof window !== "undefined" ? document.body : null;
  if (!modalRoot) return null;

  // create modal using react portal
  return createPortal(
    <ModalContextProvider onClose={onClose} size={size} showCloseButton={showCloseButton}>
      <div
        css={[modalOverlayStyles(theme), customCss]}
        className={className}
        aria-modal="true"
        role="dialog"
        aria-label="modal"
        tabIndex={-1}
        onClick={handleOverlayClick}
      >
        <div
          css={modalBodyBaseStyles(theme, size)}
          className={bodyClassName}
          role="dialog"
          aria-label="modal-body"
        >
          {children}
        </div>
      </div>
    </ModalContextProvider>,
    document.body
  );
};

// Modal Header Component
export const ModalHeader: React.FC<ModalHeader> = ({ children, className, css: customCss }) => {
  const theme = useTheme();
  const context = useContext(ModalContext);
  if (!context) {
    console.warn("Modal subcomponent must be wrapped within Modal");
    return null; // Prevents runtime crashes
  }

  const { showCloseButton } = context;

  return (
    <div
      css={[modalHeaderStyles(theme), customCss]} // Merge default and custom CSS
      className={className}
      aria-label="modal-header"
    >
      {children}
      {showCloseButton && (
        <Button
          variant={"ghost"}
          aria-label="close-modal"
          size={"icon"}
          onClick={context.onClose}
          className="text-gray-400 hover:text-gray-600 w-fit p-2"
        >
          <IoMdClose />
        </Button>
      )}
    </div>
  );
};

// Modal Content Component
export const ModalContent: React.FC<ModalContent> = ({ children, className, css: customCss }) => {
  const theme = useTheme();
  const context = useContext(ModalContext);
  if (!context) {
    console.warn("Modal subcomponent must be wrapped within Modal");
    return null; // Prevents runtime crashes
  }

  const { size } = context;

  return (
    <div
      css={[modalContentStyles(theme, size), customCss]} // Merge default and custom CSS
      className={className}
      aria-label="modal-content"
    >
      {children}
    </div>
  );
};

// Modal Footer Component
export const ModalFooter: React.FC<ModalFooter> = ({ children, className, css: customCss }) => {
  const context = useContext(ModalContext);
  const theme = useTheme();
  if (!context) {
    console.warn("Modal subcomponent must be wrapped within Modal");
    return null; // Prevents runtime crashes
  }

  return (
    <div
      css={[modalFooterStyles(theme), customCss]}
      className={className}
      aria-label="modal-footer"
    >
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
