import { ChatIcon, ChatItemWrapper, ChatName } from "./ChatItem.styled";

const ChatItem = ({ chatName, onClick }) => {
  return (
    <ChatItemWrapper onClick={onClick}>
      <ChatIcon src="../../assets/Logo.png" />
      <ChatName>{chatName}</ChatName>
    </ChatItemWrapper>
  );
};

export default ChatItem;
