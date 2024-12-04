import styled from "styled-components";

export const StyledChatArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

export const ChatAreaHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: var(--card-bg-color);
`;

export const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding-bottom: 20px;
`;

export const Message = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) =>
    props.isUserMessage ? "var(--user-messages-bg)" : "var(--bot-messages-bg)"};
  border-radius: 5px;
  align-self: ${(props) => (props.isUserMessage ? "flex-end" : "flex-start")};
`;

export const MessageInput = styled.form`
  display: flex;
  gap: 10px;

  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid var(--grey);
  }

  button {
    padding: 10px 20px;
  }
`;
