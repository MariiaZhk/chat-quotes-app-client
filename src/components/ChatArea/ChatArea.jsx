import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledChatArea } from "./ChatArea.styled";
import { sendMessageThunk } from "../../store/Chat/operations";
import { selectCurrentChat } from "../../store/selectors";

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [localMessages, setLocalMessages] = useState([]);
  const [localQuotes, setLocalQuotes] = useState([]);
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;
    // if (!currentChat) {
    //   alert("Please select a chat before sending a message.");
    //   return;
    // }

    const resultAction = await dispatch(sendMessageThunk(message));
    if (sendMessageThunk.fulfilled.match(resultAction)) {
      const fetchedQuotes = resultAction.payload;
      setLocalQuotes(fetchedQuotes);

      const userMessage = {
        _id: `local-${Date.now()}`,
        content: message,
        author: "You",
        createdAt: new Date().toISOString(),
      };

      setLocalMessages((prevMessages) => [...prevMessages, userMessage]);
    } else if (sendMessageThunk.rejected.match(resultAction)) {
      console.error(resultAction.payload);
    }

    setMessage("");
  };

  return (
    <StyledChatArea>
      <div className="messages">
        {currentChat ? (
          [...currentChat.messages, ...localMessages].map((msg) => (
            <div key={msg._id} className="message">
              <p>
                <strong>{msg.author}:</strong> {msg.content}
              </p>
              <small>{new Date(msg.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <div className="message">
            Please select a chat to start messaging.
          </div>
        )}
        {localQuotes.length > 0 && (
          <div className="message">
            <strong>Quote Results:</strong>
            <ul>
              {localQuotes.map((quote) => (
                <li key={quote._id}>
                  <p>
                    {quote.content} - <em>{quote.author}</em>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <form className="message-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </StyledChatArea>
  );
};

export default ChatArea;
