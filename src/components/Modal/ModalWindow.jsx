import React, { useEffect } from "react";
import ReactDom from "react-dom";

import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
  StyledIconWrapper,
} from "./ModalWindow.styled";

import sprite from "../../assets/sprite.svg";
import { useDialogClose } from "../../hooks/useDialogClose";

const ModalWindow = ({ onClose, children }) => {
  useDialogClose({ isOpen: true, onClose });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDom.createPortal(
    <ModalWrapper>
      <ModalContent>
        {children}
        <ModalButtonClose onClick={onClose}>
          <StyledIconWrapper>
            <use href={`${sprite}#icon-close`} />
          </StyledIconWrapper>
        </ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.querySelector("#portal")
  );
};

export default ModalWindow;
