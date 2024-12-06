import { useRef } from "react";
import { StyledDialog } from "./Dialog.styled";
import { useDialogClose } from "../../hooks/useDialogClose";

const Dialog = ({ isOpen, onClose, position, children }) => {
  const dialogRef = useRef(null);

  useDialogClose({ isOpen, onClose, dialogRef });

  return (
    <>
      {isOpen && (
        <StyledDialog
          ref={dialogRef}
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
