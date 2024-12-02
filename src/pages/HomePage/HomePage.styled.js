import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMain = styled.main`
  display: flex;
  height: calc(100vh - 150px);
`;

export const StyledSidebar = styled.aside`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: #ffffff; */
  border-right: 3px solid var(--light-grey);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px;
      border-radius: 0px;
      border-bottom: 2px solid var(--light-grey);
      /* background-color: #ffffff; */
      cursor: pointer;
      &:hover {
        background-color: var(--white-text);
      }
    }
  }
`;

export const SidebarButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SidebarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  box-shadow: none;
  &:hover,
  &:focus {
    background-color: transparent;
  }
  svg {
    &:hover,
    &:focus {
      color: var(--accent-text);
    }
  }
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #ffffff;
  /* border: 2px solid var(--light-grey); */
  box-shadow: var(--shadow);

  border-radius: 5px;
  width: 150px;
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    right: 10px;
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

export const StyledDropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: var(--light-grey);
  }
`;

export const StyledTooltip = styled.span`
  color: var(--secondary-text);
`;

export const ActionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid var(--grey);
  border-radius: 5px;
  font-size: 14px;
  outline: none;

  background-color: var(--light-grey);
`;

export const StyledChatArea = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* background-color: var(--card-bg-color); */
  /* border: 2px solid var(--light-grey); */

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
