import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog, openDialog } from "../../store/Global/globalSlice";
import { selectOpenDialogId } from "../../store/Global/selectors";
import { removeChatThunk } from "../../store/Chat/operations";
import Dialog from "../Dialog/Dialog";
import UpdateChatModal from "../UpdateChatModal/UpdateChatModal";
import DeleteConfirmationModal from "../DeleteChatConfirmModal/DeleteChatConfirmModal";
import {
  ChatItemStyled,
  ChatItemIcon,
  ChatItemName,
  ChevronIconWrapper,
} from "./ChatItem.styled";
import { FiChevronDown } from "react-icons/fi";
import { toast } from "react-toastify";
import { setCurrentChat } from "../../store/Chat/chatSlice";
import { selectCurrentChat } from "../../store/Chat/selectors";
import { DialogBtnContainer } from "../Dialog/Dialog.styled";
import defaultImage from "../../assets/defaultUserImg.png";

const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();
  const openDialogId = useSelector(selectOpenDialogId);
  const [dialogPosition, setDialogPosition] = useState(null);
  const currentChat = useSelector(selectCurrentChat);
  const isSelected = chat._id === currentChat?._id;
  const chevronButtonRef = useRef(null);

  const handleOpenDialog = (e, type) => {
    e.stopPropagation();
    const dialogId = `dialog-${type}-${chat._id}`;
    if (openDialogId === dialogId) {
      dispatch(closeDialog());
    } else {
      const rect = chevronButtonRef.current.getBoundingClientRect();
      setDialogPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      dispatch(openDialog({ id: dialogId, meta: { chatId: chat._id } }));
    }
  };

  const handleCloseDialog = () => dispatch(closeDialog());

  const handleSelectChat = () => {
    dispatch(setCurrentChat(chat));
  };

  const handleConfirmDelete = () => {
    dispatch(removeChatThunk(chat._id))
      .unwrap()
      .then(() => {
        toast.success("Chat deleted successfully!");
        dispatch(closeDialog());
      })
      .catch((error) => {
        toast.error(
          `Failed to delete chat: ${error.message || "Unknown error"}`
        );
      });
  };

  return (
    <>
      <ChatItemStyled onClick={handleSelectChat} $isSelected={isSelected}>
        <ChatItemIcon src={chat.icon || defaultImage} alt="Chat Icon" />
        <ChatItemName>{chat.name}</ChatItemName>
        <ChevronIconWrapper
          onClick={(e) => handleOpenDialog(e, "main")}
          ref={chevronButtonRef}
        >
          <FiChevronDown size={24} />
        </ChevronIconWrapper>
      </ChatItemStyled>

      <Dialog
        isOpen={openDialogId === `dialog-main-${chat._id}`}
        onClose={handleCloseDialog}
        position={dialogPosition}
      >
        <DialogBtnContainer>
          <button onClick={(e) => handleOpenDialog(e, "rename")}>Rename</button>
          <button onClick={(e) => handleOpenDialog(e, "delete")}>Delete</button>
        </DialogBtnContainer>
      </Dialog>

      <UpdateChatModal
        isOpen={openDialogId === `dialog-rename-${chat._id}`}
        onClose={handleCloseDialog}
        chat={chat}
      />
      <DeleteConfirmationModal
        isOpen={openDialogId === `dialog-delete-${chat._id}`}
        onClose={handleCloseDialog}
        onDelete={handleConfirmDelete}
      />
    </>
  );
};

export default ChatItem;
