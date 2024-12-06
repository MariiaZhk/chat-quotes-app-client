import React from "react";
import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
} from "./ModalWindow.styled";

const ModalWindow = ({ onClose, children }) => {
  return ReactDom.createPortal(
    <ModalWrapper onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        {children}
        <ModalButtonClose onClick={onClose} aria-label="Close modal">
          <AiOutlineClose size={24} />
        </ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.querySelector("#portal")
  );
};

export default ModalWindow;
