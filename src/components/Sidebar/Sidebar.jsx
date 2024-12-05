import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../store/Auth/operations";
import { addChatThunk, fetchChatsThunk } from "../../store/Chat/operations";
import { setCurrentChat } from "../../store/Chat/chatSlice";
import {
  SidebarActionsWrap,
  SidebarButton,
  SidebarTitleBtnsWrapper,
  StyledSearchInput,
  StyledSidebar,
  StyledTitle,
  UserAuthWrap,
} from "./Sidebar.styled";
import ChatItem from "../ChatItem/ChatItem";
import { selectChats } from "../../store/selectors";
import { AiOutlinePlus } from "react-icons/ai";
import Dialog from "../Dialog/Dialog";
import UserAuth from "../Header/UserAuth";
import { DialogBtnContainer } from "../Dialog/Dialog.styled";
import { closeDialog, openDialog } from "../../store/Global/globalSlice";
import { selectOpenDialogId } from "../../store/Global/selectors";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [logoutDialogPosition, setLogoutDialogPosition] = useState(null);
  const logoutButtonRef = useRef(null);
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const openDialogId = useSelector(selectOpenDialogId);

  useEffect(() => {
    dispatch(fetchChatsThunk());
  }, [dispatch]);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddChat = () => {
    const newChatName = prompt("Enter the name of the new chat:");
    if (newChatName) {
      dispatch(addChatThunk(newChatName));
    }
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const openLogoutDialog = (e) => {
    e.stopPropagation();
    if (openDialogId === "logoutDialog") {
      closeLogoutDialog();
    } else {
      if (logoutButtonRef.current) {
        const rect = logoutButtonRef.current.getBoundingClientRect();
        setLogoutDialogPosition({
          top: rect.top + window.scrollY + 40,
          left: rect.left + window.scrollX,
        });
      }
      dispatch(openDialog("logoutDialog"));
    }
  };

  const closeLogoutDialog = () => {
    dispatch(closeDialog());
  };

  return (
    <StyledSidebar>
      <SidebarActionsWrap>
        <UserAuthWrap>
          <UserAuth />
          <SidebarButton
            ref={logoutButtonRef}
            onMouseDown={openLogoutDialog}
            onMouseUp={(e) => e.preventDefault()}
          >
            Logout
          </SidebarButton>
        </UserAuthWrap>

        <SidebarTitleBtnsWrapper>
          <StyledTitle>Chats</StyledTitle>
          <SidebarButton onClick={handleAddChat}>
            <AiOutlinePlus size={20} />
          </SidebarButton>
        </SidebarTitleBtnsWrapper>
        <StyledSearchInput
          type="text"
          placeholder="Search chats"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SidebarActionsWrap>

      <ul>
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatItem
              key={chat._id}
              chat={chat}
              onSelect={() => dispatch(setCurrentChat(chat._id))}
              onRename={() => console.log("Rename chat not implemented yet")}
            />
          ))
        ) : (
          <li>No chats found</li>
        )}
      </ul>

      <Dialog
        isOpen={openDialogId === "logoutDialog"}
        onClose={closeLogoutDialog}
        position={logoutDialogPosition}
      >
        <p>Are you sure you want to logout?</p>
        <DialogBtnContainer>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={closeLogoutDialog}>No</button>
        </DialogBtnContainer>
      </Dialog>
    </StyledSidebar>
  );
};

export default Sidebar;
