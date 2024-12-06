export const selectCurrentChat = (state) => state.chatSlice.currentChat;
export const selectChats = (state) => state.chatSlice.chats;
export const selectChatNameById = (state, chatId) => {
  const chat = state.chatSlice.chats.find((chat) => chat._id === chatId);
  return chat ? chat.name : "";
};
