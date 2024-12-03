import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../store/Auth/operations";
import { addChatThunk, fetchChatsThunk } from "../../store/Chat/operations";
import {
  ActionsWrap,
  SidebarButton,
  SidebarButtonsWrapper,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledSearchInput,
  StyledSidebar,
  StyledTooltip,
} from "./Sidebar.styled";
import ChatItem from "../ChatItem/ChatItem";
import { selectChats } from "../../store/selectors";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

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

  const handleDeleteChats = () => {
    if (window.confirm("Are you sure you want to delete all chats?")) {
      // Add logic to delete chats
    }
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <StyledSidebar>
      <ActionsWrap>
        <StyledTooltip>Your Chats</StyledTooltip>
        <SidebarButtonsWrapper>
          <SidebarButton onClick={handleAddChat}>
            <AiOutlinePlus size={20} />
          </SidebarButton>
          <SidebarButton onClick={() => setDropdownVisible(!dropdownVisible)}>
            <FiMoreVertical size={20} />
          </SidebarButton>
          {dropdownVisible && (
            <StyledDropdownMenu>
              <StyledDropdownItem onClick={handleDeleteChats}>
                Delete Chat
              </StyledDropdownItem>
              <StyledDropdownItem onClick={handleLogout}>
                Logout
              </StyledDropdownItem>
            </StyledDropdownMenu>
          )}
        </SidebarButtonsWrapper>
      </ActionsWrap>
      <StyledSearchInput
        type="text"
        placeholder="Search chats"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatItem
              key={chat._id}
              chatName={chat.name}
              iconSrc={chat.icon || "/icons/default.png"}
              onClick={() => console.log(`Selected chat: ${chat.name}`)}
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
