import styled from "styled-components";

export const ChatItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--card-bg-color);
  }
`;

export const ChatIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatName = styled.span`
  font-size: 16px;
  color: var(--primary-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
