import { createSlice } from "@reduxjs/toolkit";
import {
  addChatThunk,
  fetchChatsThunk,
  getQuoteThunk,
  removeChatThunk,
  sendMessageThunk,
  updateChatThunk,
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
      .addCase(addChatThunk.fulfilled, (state, { payload }) => {
        state.chats.push(payload);
      })

      .addCase(fetchChatsThunk.fulfilled, (state, { payload }) => {
        state.chats = payload;
        if (payload.length > 0) {
          state.currentChat = payload[0];
        }
      })
      .addCase(updateChatThunk.fulfilled, (state, { payload }) => {
        const index = state.chats.findIndex((chat) => chat._id === payload._id);
        if (index !== -1) {
          state.chats[index] = payload;
        }
        if (state.currentChat._id === payload._id) {
          state.currentChat = payload; // Update the current chat as well
        }
      })
      .addCase(removeChatThunk.fulfilled, (state, { payload }) => {
        state.chats = state.chats.filter((chat) => chat._id !== payload);
        if (state.currentChat._id === payload) {
          state.currentChat = {
            _id: null,
            name: "",
            messages: [],
          };
        }
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

      .addCase(getQuoteThunk.fulfilled, (state, { payload }) => {
        if (state.currentChat) {
          state.currentChat.messages.push(payload);
        }
      });
  },
});

export const { setCurrentChat } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
