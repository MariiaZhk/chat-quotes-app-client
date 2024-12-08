import React from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import {
  Form,
  FormBtn,
  FormHeading,
} from "../CommonStyledComponents/CommonStyledComponents";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <ModalWindow onClose={onClose}>
      <Form>
        <FormHeading>Are you sure you want to delete this chat?</FormHeading>
        <FormBtn onClick={onDelete}>Delete</FormBtn>
        <FormBtn onClick={onClose}>Cancel</FormBtn>
      </Form>
    </ModalWindow>
  );
};

export default DeleteConfirmationModal;
