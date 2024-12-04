import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

const ChatDialog = forwardRef(({ chat, onClose, onDelete, onRename }, ref) => {
  const handleRename = () => {
    const newName = prompt("Enter a new chat name:", chat.name);
    if (newName && newName.trim()) {
      onRename(newName.trim());
    }
  };

  return (
    <StyledDialog ref={ref} id="chat-dialog">
      <button onClick={handleRename}>Rename Chat</button>
      <button onClick={onDelete}>Delete Chat</button>
      <button onClick={onClose}>Close</button>
    </StyledDialog>
  );
});

ChatDialog.displayName = "ChatDialog";

export default ChatDialog;
