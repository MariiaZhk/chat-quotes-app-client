import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../store/Auth/operations";
import { addChatThunk, fetchChatsThunk } from "../../store/Chat/operations";
import { setCurrentChat } from "../../store/Chat/chatSlice"; // Import setCurrentChat
import {
  SidebarActionsWrap,
  SidebarButton,
  SidebarButtonsWrapper,
  SidebarTitleBtnsWrapper,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledSearchInput,
  StyledSidebar,
  StyledTitle,
} from "./Sidebar.styled";
import ChatItem from "../ChatItem/ChatItem";
import { selectChats } from "../../store/selectors";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import UserAuth from "../Header/UserAuth";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);

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

  const handleDeleteChat = () => {
    if (window.confirm("Are you sure you want to delete all chats?")) {
      // Add logic to delete chats
    }
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  // Set the current chat when a chat is clicked
  const handleSelectChat = (chatId) => {
    dispatch(setCurrentChat(chatId)); // Dispatch the action to set the current chat
  };

  return (
    <StyledSidebar>
      <SidebarActionsWrap>
        <UserAuth />
        <SidebarTitleBtnsWrapper>
          <StyledTitle>Your Chats</StyledTitle>
          <SidebarButtonsWrapper>
            <SidebarButton onClick={handleAddChat}>
              <AiOutlinePlus size={20} />
            </SidebarButton>
            <SidebarButton onClick={() => setDropdownVisible(!dropdownVisible)}>
              <FiMoreVertical size={20} />
            </SidebarButton>
            {dropdownVisible && (
              <StyledDropdownMenu>
                <StyledDropdownItem onClick={handleLogout}>
                  Logout
                </StyledDropdownItem>
              </StyledDropdownMenu>
            )}
          </SidebarButtonsWrapper>
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
              onSelect={() => handleSelectChat(chat._id)} // Pass the onSelect handler
              onDelete={handleDeleteChat}
            />
          ))
        ) : (
          <li>No chats found</li>
        )}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
