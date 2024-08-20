import { cva } from "class-variance-authority";

export const cardStyle = cva(
  [
    // css
    "flex flex-col justify-center",
    "w-full",
    "rounded-lg border",
    "bg-white ",
  ],
  {
    variants: {
      variant: {
        //variant
      },
      size: {
        //size
      },
    },
    defaultVariants: {
      //default variant
    },
  }
);

export const cardHeaderStyle = cva(
  [
    // css
    "w-full",
    "p-6",
    "rounded-md",
  ],
  {
    variants: {
      variant: {
        //variant
      },
      size: {
        //size
      },
    },
    defaultVariants: {
      //default variant
    },
  }
);

export const cardContentStyle = cva(
  [
    // css
    "flex-grow",
    "w-full",
    "p-6 pt-0",
  ],
  {
    variants: {
      variant: {
        //variant
      },
      size: {
        //size
      },
    },
    defaultVariants: {
      //default variant
    },
  }
);

export const cardFooterStyle = cva(
  [
    // css
    "w-full",
    "p-6 pt-0",
    "rounded-md",
  ],
  {
    variants: {
      variant: {
        //variant
      },
      size: {
        //size
      },
    },
    defaultVariants: {
      //default variant
    },
  }
);
