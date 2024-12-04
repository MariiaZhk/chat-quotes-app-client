import styled from "styled-components";

export const StyledSidebar = styled.aside`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white-text);
  border-right: 3px solid var(--light-grey);
`;
export const SidebarActionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg-color);
  gap: 10px;
  padding: 10px;
`;
export const SidebarTitleBtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const SidebarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--secondary-text);
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

export const StyledTitle = styled.h3`
  color: var(--secondary-text);
`;

export const StyledSearchInput = styled.input`
  padding: 8px;
  border: 1px solid var(--grey);
  border-radius: 16px;
  font-size: 14px;
  outline: none;

  background-color: var(--light-grey);
`;
