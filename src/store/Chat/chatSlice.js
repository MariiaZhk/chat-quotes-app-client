import { createSlice } from "@reduxjs/toolkit";
import {
  addChatThunk,
  fetchChatsThunk,
  getQuoteThunk,
  sendMessageThunk,
} from "./operations";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    currentChat: {
      _id: null,
      name: "",
      messages: [],
    },
    isLoading: false,
    isError: null,
  },
  reducers: {
    setCurrentChat: (state, { payload }) => {
      state.currentChat = state.chats.find((chat) => chat._id === payload);
    },
    // addMessage: (state, { payload }) => {
    //   if (state.currentChat) {
    //     state.currentChat.messages.push(payload);
    //   }
    // },
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
        if (payload.length > 0) {
          state.currentChat = payload[0];
        }
        state.isError = null;
      })
      .addCase(fetchChatsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(sendMessageThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessageThunk.fulfilled, (state, { payload }) => {
        const { chatId, message } = payload;
        const chat = state.chats.find((c) => c._id === chatId);
        if (chat) {
          chat.messages.push(message);
        }
        if (state.currentChat && state.currentChat._id === chatId) {
          state.currentChat.messages.push(message);
        }
      })
      .addCase(sendMessageThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getQuoteThunk.fulfilled, (state, { payload }) => {
        if (state.currentChat) {
          state.currentChat.messages.push(payload);
        }
      })
      .addCase(getQuoteThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { setCurrentChat } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
