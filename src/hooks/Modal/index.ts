import { useState } from "react";

// Add useModal hook for managing modal state
export const useModal: () => [boolean, () => void] = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const toggleModal = () => {
    setIsShowingModal(!isShowingModal);
  };

  return [isShowingModal, toggleModal];
};
