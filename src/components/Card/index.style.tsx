import { cva } from "class-variance-authority";

export const cardStyle = cva([
  // css
  "flex flex-col justify-center",
  "w-full",
  "rounded-lg",
  "bg-white dark:bg-dark-primary dark:text-white ",
]);

export const cardHeaderStyle = cva([
  // css
  "w-full",
  "p-6 pb-0",
]);

export const cardContentStyle = cva([
  // css
  "flex-grow",
  "w-full",
  "p-6",
]);

export const cardFooterStyle = cva([
  // css
  "w-full",
  "p-6 pt-0",
]);
