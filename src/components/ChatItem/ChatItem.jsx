import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../store/Chat/chatSlice";
import { selectCurrentChat } from "../../store/Chat/selectors";
import Dialog from "../Dialog/Dialog";
import {
  ChatItemIcon,
  ChatItemName,
  ChatItemStyled,
  ChevronIconWrapper,
} from "./ChatItem.styled";
import { FiChevronDown } from "react-icons/fi";
import { DialogBtnContainer } from "../Dialog/Dialog.styled";
import { selectOpenDialogId } from "../../store/Global/selectors";
import { closeDialog, openDialog } from "../../store/Global/globalSlice";

const ChatItem = ({ chat, onRename }) => {
  const dispatch = useDispatch();
  const openDialogId = useSelector(selectOpenDialogId);
  const [dialogPosition, setDialogPosition] = useState(null);
  const currentChat = useSelector(selectCurrentChat);

  const handleOpenDialog = (e) => {
    e.stopPropagation();
    const dialogId = `chatDialog-${chat._id}`;
    if (openDialogId === dialogId) {
      dispatch(closeDialog());
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setDialogPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      dispatch(openDialog(dialogId));
    }
  };

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  const handleSelectChat = () => {
    dispatch(setCurrentChat(chat._id));
  };

  const handleRename = () => {
    const newName = prompt("Enter a new chat name:", chat.name);
    if (newName && newName.trim()) {
      onRename(chat._id, newName.trim());
    }
    handleCloseDialog();
  };

  const handleDelete = () => {
    handleCloseDialog();
  };

  const isSelected = chat._id === currentChat?._id;

  return (
    <>
      <ChatItemStyled onClick={handleSelectChat} $isSelected={isSelected}>
        <ChatItemIcon src="../../assets/Logo.png" alt="Chat Icon" />
        <ChatItemName>{chat.name}</ChatItemName>
        <ChevronIconWrapper
          onMouseDown={handleOpenDialog}
          onMouseUp={(e) => e.preventDefault()}
        >
          <FiChevronDown size={24} />
        </ChevronIconWrapper>
      </ChatItemStyled>

      <Dialog
        isOpen={openDialogId === `chatDialog-${chat._id}`}
        onClose={handleCloseDialog}
        position={dialogPosition}
      >
        <p>Manage Chat: {chat.name}</p>
        <DialogBtnContainer>
          <button onClick={handleRename}>Rename Chat</button>
          <button onClick={handleDelete}>Delete Chat</button>
        </DialogBtnContainer>
      </Dialog>
    </>
  );
};

export default ChatItem;
