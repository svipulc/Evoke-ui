import { cva } from "class-variance-authority";

export const ModalOverlayStyles = cva([
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 transition-opacity duration-300 ease-in-out z-10 ",
]);

export const ModalBodyStyles = cva(
  "bg-white dark:bg-modalColor overflow-hidden rounded-md shadow-lg transition-transform duration-300 ease-in-out flex flex-col",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm m-4 max-h-[90vh]",
        md: "w-full max-w-md m-4 max-h-[90vh]",
        lg: "w-full max-w-lg m-4 max-h-[90vh]",
        full: "w-full h-full m-0 max-h-screen rounded-none",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
