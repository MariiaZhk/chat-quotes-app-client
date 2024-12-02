import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLogged, selectUserFirstName } from "../../store/selectors";
import { logoutThunk } from "../../store/operations";

import Container from "../../components/Container/Container";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import {
  ActionsWrap,
  SidebarButton,
  SidebarButtonsWrapper,
  StyledChatArea,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledMain,
  StyledSearchInput,
  StyledSidebar,
  StyledTooltip,
} from "./HomePage.styled";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [chats, setChats] = useState([
    "Chat 1",
    "Chat 2",
    "Chat 3",
    "Work Chat",
    "Family Group",
  ]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();

  const filteredChats = chats.filter((chat) =>
    chat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddChat = () => {
    const newChatName = prompt("Enter the name of the new chat:");
    if (newChatName) {
      setChats((prevChats) => [...prevChats, newChatName]);
    }
  };

  const handleDeleteChats = () => {
    if (window.confirm("Are you sure you want to delete all chats?")) {
      setChats([]);
    }
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Container>
      <StyledMain>
        <StyledSidebar>
          <ActionsWrap>
            <StyledTooltip>Your Chats</StyledTooltip>
            <SidebarButtonsWrapper>
              <SidebarButton onClick={handleAddChat}>
                <AiOutlinePlus size={20} />
              </SidebarButton>
              <SidebarButton
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
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
              filteredChats.map((chat, index) => <li key={index}>{chat}</li>)
            ) : (
              <li>No chats found</li>
            )}
          </ul>
        </StyledSidebar>

        <StyledChatArea>
          <div className="messages">
            <div className="message">Hello, how can I help you?</div>
            <div className="message user-message">I need assistance.</div>
          </div>
          <form className="message-input">
            <input type="text" placeholder="Type your message..." />
            <button type="submit">Send</button>
          </form>
        </StyledChatArea>
      </StyledMain>
    </Container>
  );
}

export default HomePage;
