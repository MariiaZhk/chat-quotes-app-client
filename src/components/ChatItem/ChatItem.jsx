import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../store/Chat/chatSlice";
import { selectCurrentChat } from "../../store/selectors";
import ChatDialog from "../ChatDialog/ChatDialog";
import { ChatItemIcon, ChatItemName, ChatItemStyled } from "./ChatItem.styled";

const ChatItem = ({ chat, onRename, onDelete }) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentChat = useSelector(selectCurrentChat);

  // const handleOpenDialog = () => {
  //   setIsDialogOpen(true);
  // };

  // const handleCloseDialog = () => {
  //   setIsDialogOpen(false);
  // };

  const handleSelectChat = () => {
    dispatch(setCurrentChat(chat._id));
  };
  const isSelected = chat._id === currentChat?._id;

  return (
    <>
      <ChatItemStyled
        onClick={handleSelectChat}
        isSelected={isSelected} // Передаємо isSelected
      >
        <ChatItemIcon src="../../assets/Logo.png" />
        <ChatItemName>{chat.name}</ChatItemName>
      </ChatItemStyled>
      {/* {isDialogOpen && (
        <ChatDialog
          chat={chat}
          onClose={handleCloseDialog}
          onRename={(newName) => {
            onRename(chat._id, newName);
            handleCloseDialog();
          }}
          onDelete={() => {
            onDelete(chat._id);
            handleCloseDialog();
          }}
        />
      )} */}
    </>
  );
};

export default ChatItem;
