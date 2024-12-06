import React, { useEffect } from "react";
import { StyledDialog } from "./Dialog.styled";

const Dialog = ({ isOpen, onClose, position, children }) => {
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <StyledDialog
          onMouseDown={clickOutside}
          style={{
            top: position?.top || "auto",
            left: position?.left || "auto",
          }}
        >
          {children}
        </StyledDialog>
      )}
    </>
  );
};

export default Dialog;
