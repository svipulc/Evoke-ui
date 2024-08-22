import { ComponentProps } from "react";

export type ModalProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
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
