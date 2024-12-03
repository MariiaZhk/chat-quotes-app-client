import styled from "styled-components";

export const StyledChatArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  /* padding-bottom: 50px; */
  overflow-y: scroll;
  display: flex;
  /* flex-direction: column-reverse; */

  .messages {
    flex-grow: 1;
    overflow-y: auto;
    padding-bottom: 20px;

    .message {
      margin-bottom: 10px;
      padding: 10px;
      background-color: var(--bot-messages-bg);
      border-radius: 5px;
    }

    .user-message {
      background-color: var(--user-messages-bg);
      align-self: flex-end;
    }
  }

  .message-input {
    display: flex;
    gap: 10px;

    input {
      flex-grow: 1;
      padding: 10px;
      border: 1px solid var(--grey);
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      border-radius: 5px;
    }
  }
`;
