import { cva } from "class-variance-authority";

export const ModalOverlayStyles = cva([
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-25  transition-opacity duration-300 ease-in-out",
]);

export const ModalBodyStyles = cva([
  "bg-white dark:bg-modalColor rounded-lg shadow-lg overflow-hidden w-full max-w-md m-4  transform transition-transform duration-300 ease-in-out",
]);
