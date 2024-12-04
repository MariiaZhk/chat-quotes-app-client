import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledChatArea,
  Message,
  MessageInput,
  MessageList,
  ChatAreaHead,
} from "./ChatArea.styled";
import { getQuoteThunk } from "../../store/Chat/operations";
import { selectCurrentChat } from "../../store/selectors";
import { ChatItemIcon, ChatItemName } from "../ChatItem/ChatItem.styled";
import { addMessage } from "../../store/Chat/chatSlice";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      _id: `local-${Date.now()}`,
      content: message,
      author: "You",
      createdAt: new Date().toISOString(),
    };

    // Додати повідомлення користувача в Redux
    dispatch(addMessage(userMessage)); // Redux action

    setMessage(""); // Очистити поле вводу

    // Автовідповідь через 3 секунди
    setTimeout(async () => {
      const resultAction = await dispatch(getQuoteThunk(message));
      if (getQuoteThunk.fulfilled.match(resultAction)) {
        const fetchedQuote = resultAction.payload;

        const autoResponse = {
          _id: `quote-${Date.now()}`,
          content: fetchedQuote.content || "No quote found.",
          author: fetchedQuote.author || "Unknown",
          createdAt: new Date().toISOString(),
        };

        // Додати відповідь у Redux
        dispatch(addMessage(autoResponse));
      } else if (getQuoteThunk.rejected.match(resultAction)) {
        console.error(resultAction.payload);
      }
    }, 3000);
  };

  return (
    <StyledChatArea>
      <ChatAreaHead>
        {currentChat ? (
          <>
            <ChatItemIcon src="../../assets/Logo.png" alt="Chat Icon" />
            <ChatItemName>{currentChat.name}</ChatItemName>
          </>
        ) : (
          "Please select a chat"
        )}
      </ChatAreaHead>
      <MessageList>
        {currentChat && currentChat.messages ? (
          currentChat.messages.map((msg) => (
            <Message key={msg._id} isUserMessage={msg.author === "You"}>
              <p>
                <strong>{msg.author}:</strong> {msg.content}
              </p>
              <small>{new Date(msg.createdAt).toLocaleString()}</small>
            </Message>
          ))
        ) : (
          <Message>Please select a chat to start messaging.</Message>
        )}
      </MessageList>
      <MessageInput onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </MessageInput>
    </StyledChatArea>
  );
};
export default ChatArea;
