import { ModalContext } from "@/context";
import { useContext } from "react";

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("context must be present within a Modal");
  }
  return context;
};
