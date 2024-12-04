import { createSlice } from "@reduxjs/toolkit";
import { addChatThunk, fetchChatsThunk, getQuoteThunk } from "./operations"; // Define thunks for fetching, creating chats, sending messages

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    currentChat: {
      _id: null,
      name: "",
      messages: [], // Initialize messages as an empty array
    },
    isLoading: false,
    isError: null,
  },
  reducers: {
    setCurrentChat: (state, { payload }) => {
      state.currentChat = state.chats.find((chat) => chat._id === payload);
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
        if (payload.length > 0) {
          state.currentChat = payload[0];
        }
        state.isError = null;
      })
      .addCase(fetchChatsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(getQuoteThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuoteThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.currentChat) {
          state.currentChat.messages.push({
            _id: `quote-${Date.now()}`,
            content: payload.content,
            author: payload.author,
            createdAt: new Date().toISOString(),
          });
        }
      })
      .addCase(getQuoteThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { setCurrentChat, addMessage } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
