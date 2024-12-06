import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid"; // Імпортуємо nanoid
import {
  StyledChatArea,
  Message,
  MessageInput,
  MessageList,
  ChatAreaHead,
} from "./ChatArea.styled";
import { getQuoteThunk, sendMessageThunk } from "../../store/Chat/operations";
import { selectCurrentChat } from "../../store/Chat/selectors";
import { ChatItemIcon, ChatItemName } from "../ChatItem/ChatItem.styled";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !currentChat) return;

    const userMessage = {
      content: message,
      sender: "You",
      _id: nanoid(),
      timestamp: new Date().toISOString(),
    };

    // Надіслати повідомлення користувача на бекенд
    dispatch(
      sendMessageThunk({
        messageContent: userMessage.content,
        senderId: userMessage.sender,
      })
    );
    setMessage("");

    try {
      // Отримати цитату з Quotable API
      const quoteAction = dispatch(
        getQuoteThunk(message) // Передаємо лише текстове повідомлення
      );

      if (quoteAction.type === "chats/getQuotes/fulfilled") {
        const fetchedQuote = quoteAction.payload;

        const autoResponse = {
          content: fetchedQuote.content || "No quote found.",
          sender: fetchedQuote.author || "Unknown",
          _id: nanoid(),
          timestamp: new Date().toISOString(),
        };

        dispatch(
          sendMessageThunk({
            messageContent: autoResponse.content,
            senderId: autoResponse.sender,
            isQuote: true,
          })
        );
      } else {
        console.error("No quote found:", quoteAction.payload);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
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
        {currentChat && currentChat.messages?.length > 0 ? (
          currentChat.messages.map((msg) => (
            <Message key={msg._id} $isUserMessage={msg.sender === "You"}>
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
          disabled={!currentChat}
          aria-disabled={!currentChat}
        />
        <button
          type="submit"
          disabled={!currentChat || !message.trim()}
          aria-disabled={!currentChat || !message.trim()}
        >
          Send
        </button>
      </MessageInput>
    </StyledChatArea>
  );
};

export default ChatArea;
