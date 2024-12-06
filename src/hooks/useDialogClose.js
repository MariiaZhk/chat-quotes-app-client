import { useEffect } from "react";

export const useDialogClose = ({
  isOpen,
  onClose,
  dialogRef,
  closeOnBackdrop = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (dialogRef?.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      if (closeOnBackdrop) {
        document.addEventListener("mousedown", handleClickOutside);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (closeOnBackdrop) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen, onClose, dialogRef, closeOnBackdrop]);
};
