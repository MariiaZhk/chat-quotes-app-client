import { createSlice } from "@reduxjs/toolkit";
import {
  addChatThunk,
  addMessageThunk,
  fetchChatMessagesThunk,
  fetchChatsThunk,
  fetchQuoteThunk,
  removeChatThunk,
  updateChatThunk,
} from "./operations.js";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    currentChat: {
      _id: null,
      name: "",
      messages: [],
    },
  },
  reducers: {
    setCurrentChat: (state, { payload }) => {
      state.currentChat = payload;
    },
    updateChatMessages: (state, { payload }) => {
      const chat = state.chats.find((chat) => chat._id === payload.chatId);
      if (chat) {
        chat.messages = payload.messages;
        if (state.currentChat._id === payload.chatId) {
          state.currentChat.messages = payload.messages;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChatThunk.fulfilled, (state, { payload }) => {
        state.chats.push(payload);
      })

      .addCase(addMessageThunk.fulfilled, (state, { payload }) => {
        const { chatId, message } = payload;
        const chat = state.chats.find((chat) => chat._id === chatId);

        if (chat) {
          chat.messages.push(message);
          if (state.currentChat._id === chatId) {
            state.currentChat.messages.push(message);
          }
        }
      })

      .addCase(fetchChatsThunk.fulfilled, (state, { payload }) => {
        state.chats = payload;
        if (payload.length > 0) {
          state.currentChat = payload[0];
        } else {
          state.currentChat = { _id: null, name: "", messages: [] };
        }
      })
      .addCase(updateChatThunk.fulfilled, (state, { payload }) => {
        const index = state.chats.findIndex((chat) => chat._id === payload._id);
        if (index !== -1) {
          state.chats[index] = payload;
        }
        if (state.currentChat._id === payload._id) {
          state.currentChat = payload;
        }
      })
      .addCase(removeChatThunk.fulfilled, (state, { payload }) => {
        state.chats = state.chats.filter((chat) => chat._id !== payload);
        if (state.currentChat._id === payload) {
          state.currentChat =
            state.chats.length > 0
              ? state.chats[0]
              : { _id: null, name: "", messages: [] };
        }
      })
      .addCase(fetchQuoteThunk.fulfilled, (state, { payload }) => {
        const newMessages = [...state.currentChat.messages, payload];
        state.currentChat.messages = newMessages;
      })

      .addCase(fetchChatMessagesThunk.fulfilled, (state, { payload }) => {
        const { chatId, messages } = payload;
        const chat = state.chats.find((chat) => chat._id === chatId);
        if (chat) {
          chat.messages = messages;
          if (state.currentChat._id === chatId) {
            state.currentChat.messages = messages;
          }
        }
      });
  },
});

export const { setCurrentChat, updateChatMessages } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
