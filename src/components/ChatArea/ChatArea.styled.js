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
  background-color: var(--light-blue);
`;

export const MessageList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
`;

export const Message = styled.li`
  align-self: ${(props) => (props.$isUserMessage ? "flex-end" : "flex-start")};
  max-width: 70%;
  background-color: ${(props) =>
    props.$isUserMessage
      ? "var(--user-messages-bg)"
      : "var(--bot-messages-bg)"};
  padding: 10px;
  border-radius: 15px;
  text-align: ${(props) => (props.$isUserMessage ? "right" : "left")};
  word-wrap: break-word;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
  }

  small {
    display: block;
    margin-top: 5px;
    font-size: 0.8rem;
    color: var(--dark-grey);
  }
`;

export const MessageInput = styled.form`
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: var(--light-blue);
  border-top: 1px solid var(--grey);

  input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid var(--grey);
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    background-color: var(--dark-blue);
    color: var(--white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:disabled {
    background-color: var(--grey);
    cursor: not-allowed;
  }
`;
