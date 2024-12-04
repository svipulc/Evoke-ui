import { cva } from "class-variance-authority";

export const inputWrapperStyle = cva(
  "flex rounded-md relative items-center gap-1 ring-offset-background ring-1 ring-gray-300 dark:ring-gray-50/50 text-black dark:text-white bg-transparent focus-within:ring-2 focus-within:ring-ring focus-within:ring-light-secondary dark:focus-within:ring-dark-secondary focus-within:hover:ring-light-secondary dark:focus-within:hover:ring-dark-secondary hover:ring-light-secondary dark:hover:ring-white autofill:bg-transparent"
);

export const iconStyle = cva("w-fit h-4 text-light-silverSteel dark:text-dark-silverSteel", {
  variants: {
    iconPosition: {
      left: "ps-3",
      right: "pe-3",
    },
  },
  defaultVariants: {
    iconPosition: "right",
  },
});

export const inputStyle = cva(
  "w-full px-3 py-2 h-8 md:h-10 bg-transparent text-sm file:bg-transparent file:border-0 file:text-sm file:font-medium file:text-light-secondary dark:file:text-dark-secondary placeholder:text-light-silverSteel dark:placeholder:text-dark-silverSteel focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 autofill:rounded-md autofill:opacity-90",
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
