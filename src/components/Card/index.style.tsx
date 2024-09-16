import { cva } from "class-variance-authority";

export const cardStyle = cva([
  // css
  "flex flex-col justify-center",
  "w-full",
  "rounded-lg border",
  "bg-white dark:bg-primary dark:text-white dark:border-none",
]);

export const cardHeaderStyle = cva([
  // css
  "w-full",
  "p-6",
]);

export const cardContentStyle = cva([
  // css
  "flex-grow",
  "w-full",
  "p-6 pt-0",
]);

export const cardFooterStyle = cva([
  // css
  "w-full",
  "p-6 pt-0",
]);
