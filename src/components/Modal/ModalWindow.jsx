import { useEffect } from "react";
import ReactDom from "react-dom";

import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
  StyledIconWrapper,
} from "./ModalWindow.styled";

import sprite from "../../assets/sprite.svg";

const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDom.createPortal(
    <ModalWrapper onMouseDown={clickOutside}>
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
