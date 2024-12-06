import React from "react";
import ModalWindow from "../Modal/ModalWindow";
import { FormBtn } from "../CommonStyledComponents/CommonStyledComponents";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <ModalWindow onClose={onClose}>
      <h3>Are you sure you want to delete this chat?</h3>
      <FormBtn onClick={onDelete}>Yes, Delete</FormBtn>
      <FormBtn onClick={onClose}>Cancel</FormBtn>
    </ModalWindow>
  );
};

export default DeleteConfirmationModal;
