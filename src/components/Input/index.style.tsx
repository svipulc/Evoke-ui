import { cva } from "class-variance-authority";

export const inputWrapperStyle = cva(
  "flex rounded-md relative items-center gap-3 ring-offset-background ring-1 ring-gray-300 dark:ring-gray-50/50 text-primary dark:text-white bg-transparent focus-within:ring-2 focus-within:ring-ring focus-within:ring-primary dark:focus-within:ring-secondary focus-within:hover:ring-primary dark:focus-within:hover:ring-secondary hover:ring-black dark:hover:ring-white "
);
export const iconStyle = cva("w-4 h-4 text-gray-400 dark:text-gray-50/50 px-3");

export const inputStyle = cva(
  "w-full px-3 py-2  h-8 md:h-10 bg-transparent text-sm file:bg-transparent file:border-0 file:text-sm file:font-medium file:text-primary dark:file:text-secondary placeholder:text-muted-foreground dark:placeholder:text-gray-50/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ",
  {
    variants: {
      type: {
        text: "",
        email: "",
        password: "",
        number: "",
        file: "",
      },
      error: {
        true: "ring-red-500 dark:ring-red-400 focus-within:ring-red-500 dark:focus-within:ring-red-400 hover:ring-red-500 dark:hover:ring-red-400 focus-within:hover:ring-red-500 dark:focus-within:hover:ring-red-400",
        false: "",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);
