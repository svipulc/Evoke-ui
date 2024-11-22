/** @jsxImportSource @emotion/react */
import { createPortal } from "react-dom";
import {
  modalBodyBaseStyles,
  modalContentStyles,
  modalHeaderStyles,
  modalOverlayStyles,
} from "./index.style";
import { ComponentProps, useContext } from "react";
import { CSSObject, SerializedStyles } from "@emotion/react";
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
  closeOnOutsideClick?: boolean;
  onCloseButtonClick: () => void;
  className?: string;
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
  closeOnOutsideClick = false,
  showCloseButton = true,
  onCloseButtonClick,
  className,
  css: customCss,
}: ModalProps) => {
  if (!show) return null;

  // Handle outside click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && event.target === event.currentTarget) {
      onCloseButtonClick();
    }
  };

  // create modal using react portal
  return createPortal(
    <ModalContextProvider
      onClose={onCloseButtonClick}
      size={size}
      showCloseButton={showCloseButton}
    >
      <div
        css={[modalOverlayStyles, customCss]} // Merge default and custom CSS
        className={className}
        aria-modal="true"
        role="dialog"
        aria-label="modal"
        tabIndex={-1}
        onClick={handleOverlayClick}
      >
        <div css={modalBodyBaseStyles(size)} role="dialog" aria-label="modal-body">
          {children}
        </div>
      </div>
    </ModalContextProvider>,
    document.body
  );
};

// Modal Header Component
export const ModalHeader: React.FC<ModalHeader> = ({ children, className, css: customCss }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalHeader component must be wrapped within Modal component");
  }

  const { showCloseButton } = context;

  return (
    <div
      css={[modalHeaderStyles, customCss]} // Merge default and custom CSS
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
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContent component must be wrapped within Modal component");
  }

  const { size } = context;

  return (
    <div
      css={[modalContentStyles(size), customCss]} // Merge default and custom CSS
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
  if (!context) {
    throw new Error("ModalFooter component must be wrapped within Modal component");
  }

  return (
    <div css={customCss} className={className} aria-label="modal-footer">
      {children}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
