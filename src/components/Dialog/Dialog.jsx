import React, { useEffect, useRef } from "react";
import { StyledDialog } from "./Dialog.styled";

const Dialog = ({ isOpen, onClose, position, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    const handleEscapePress = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapePress);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpen, onClose]);

  return (
    <StyledDialog
      ref={dialogRef}
      style={{
        top: position?.top || "auto",
        left: position?.left || "auto",
        display: isOpen ? "block" : "none",
      }}
    >
      {children}
    </StyledDialog>
  );
};

export default Dialog;
