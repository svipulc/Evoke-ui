import { cva } from "class-variance-authority";

export const ModalOverlayStyles = cva([
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out",
]);

export const ModalBackgroundStyles = cva([
  "bg-white dark:bg-modalColor rounded-lg shadow-lg overflow-hidden w-full max-w-md transform transition-transform duration-300 ease-in-out",
]);
