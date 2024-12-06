import styled from "styled-components";

export const ChatItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;

  border-bottom: 2px solid var(--light-grey);
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "grey" : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "grey" : "lightGrey"};
  }
`;

export const ChatItemIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatItemName = styled.span`
  font-size: 16px;
  color: var(--primary-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ChevronIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* &:hover {
    color: orange; /* Change icon color to orange on hover */
`;
