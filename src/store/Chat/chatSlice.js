import { createSlice } from "@reduxjs/toolkit";
import { addChatThunk, fetchChatsThunk, sendMessageThunk } from "./operations"; // Define thunks for fetching, creating chats, sending messages

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    currentChat: null,
    // quotes: [], // Initialize quotes as an empty array
    isLoading: false,
    isError: null,
  },
  reducers: {
    setCurrentChat: (state, { payload }) => {
      state.currentChat =
        state.chats.find((chat) => chat._id === payload) || null;
    },
    addMessage: (state, { payload }) => {
      if (state.currentChat) {
        state.currentChat.messages.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addChatThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addChatThunk.fulfilled, (state, { payload }) => {
        state.chats.push(payload);
        state.isError = null;
      })
      .addCase(addChatThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(fetchChatsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchChatsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.chats = payload;
        state.isError = null;
      })
      .addCase(fetchChatsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(sendMessageThunk.fulfilled, (state, { payload }) => {
        const chat = state.chats.find((chat) => chat._id === payload.chatId);
        if (chat) {
          chat.push(payload);
        }
      });
  },
});

export const { setCurrentChat, addMessage } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
