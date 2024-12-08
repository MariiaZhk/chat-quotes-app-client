import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import {
  SidebarActionsWrap,
  SidebarButton,
  SidebarTitleBtnsWrapper,
  StyledSearchInput,
  StyledSidebar,
  StyledTitle,
  UserAuthWrap,
} from "./Sidebar.styled";
import { fetchChatsThunk } from "../../store/Chat/operations";
import { setCurrentChat } from "../../store/Chat/chatSlice";
import { logoutThunk } from "../../store/Auth/operations";
import { closeDialog, openDialog } from "../../store/Global/globalSlice";
import { selectOpenDialogId } from "../../store/Global/selectors";
import { selectChats } from "../../store/Chat/selectors";
import ChatItem from "../ChatItem/ChatItem";
import Dialog from "../Dialog/Dialog";
import { DialogBtnContainer } from "../Dialog/Dialog.styled";
import AddChatModal from "../AddChatModal/AddChatModal";
import UserAuth from "../Header/UserAuth";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [logoutDialogPosition, setLogoutDialogPosition] = useState(null);
  const logoutButtonRef = useRef(null);
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const openDialogId = useSelector(selectOpenDialogId);

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchChatsThunk());
  }, [dispatch]);

  const handleOpenAddChatModal = () => {
    dispatch(openDialog({ id: "dialog-add-chat" }));
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  const openLogoutDialog = () => {
    const rect = logoutButtonRef.current.getBoundingClientRect();
    setLogoutDialogPosition({
      top: rect.top + window.scrollY + 30,
      left: rect.left + window.scrollX,
    });
    dispatch(openDialog({ id: "logoutDialog", meta: {} }));
  };

  const closeDialogs = () => {
    dispatch(closeDialog());
  };

  return (
    <StyledSidebar>
      <SidebarActionsWrap>
        <UserAuthWrap>
          <UserAuth />
          <SidebarButton ref={logoutButtonRef} onClick={openLogoutDialog}>
            Logout
          </SidebarButton>
        </UserAuthWrap>

        <SidebarTitleBtnsWrapper>
          <StyledTitle>Chats</StyledTitle>
          <SidebarButton onClick={handleOpenAddChatModal}>
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
              onSelect={() => dispatch(setCurrentChat(chat))}
            />
          ))
        ) : (
          <li>No chats found</li>
        )}
      </ul>

      <Dialog
        isOpen={openDialogId === "logoutDialog"}
        onClose={closeDialogs}
        position={logoutDialogPosition}
      >
        <p>Are you sure you want to logout?</p>
        <DialogBtnContainer>
          <button
            onClick={() => {
              handleLogout();
              closeDialogs();
            }}
          >
            Yes
          </button>
          <button onClick={closeDialogs}>No</button>
        </DialogBtnContainer>
      </Dialog>

      <AddChatModal
        isOpen={openDialogId === "dialog-add-chat"}
        onClose={closeDialogs}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
