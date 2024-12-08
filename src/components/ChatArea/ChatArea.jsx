import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatItemIcon, ChatItemName } from "../ChatItem/ChatItem.styled";
import defaultImage from "../../assets/defaultUserImg.png";
import {
  StyledChatArea,
  Message,
  MessageInput,
  MessageList,
  ChatAreaHead,
} from "./ChatArea.styled";
import { selectCurrentChat } from "../../store/Chat/selectors";
import { fetchQuoteThunk } from "../../store/Chat/operations";
import { updateChatMessages } from "../../store/Chat/chatSlice";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim() || !currentChat?._id) return;

    const userMessage = {
      content: message,
      sender: "You",
      timestamp: new Date().toISOString(),
    };

    try {
      const quotableReplyContent = await dispatch(
        fetchQuoteThunk(message)
      ).unwrap();

      const quotableMessage = {
        content: quotableReplyContent,
        sender: "Quotable",
        timestamp: new Date().toISOString(),
      };

      const updatedMessages = [
        ...currentChat.messages,
        userMessage,
        quotableMessage,
      ];

      dispatch(
        updateChatMessages({
          chatId: currentChat._id,
          messages: updatedMessages,
        })
      );
    } catch (error) {
      console.error("Error fetching quote:", error);
    }

    setMessage("");
  };

  return (
    <StyledChatArea>
      <ChatAreaHead>
        {currentChat ? (
          <>
            <ChatItemIcon
              src={currentChat.icon || defaultImage}
              alt="Chat Icon"
            />
            <ChatItemName>{currentChat.name}</ChatItemName>
          </>
        ) : (
          "Please select a chat"
        )}
      </ChatAreaHead>

      <MessageList>
        {currentChat?.messages.length > 0 ? (
          currentChat.messages.map((msg, index) => (
            <Message key={index} $isUserMessage={msg.sender === "You"}>
              <p>
                <strong>{msg.sender}:</strong> {msg.content}
              </p>
              <small>{new Date(msg.timestamp).toLocaleString()}</small>
            </Message>
          ))
        ) : (
          <Message>No messages yet</Message>
        )}
      </MessageList>

      <MessageInput onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={!message.trim()}>
          Send
        </button>
      </MessageInput>
    </StyledChatArea>
  );
};

export default ChatArea;
