import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "../Auth/operations.js";
import {
  addChatThunk,
  addMessageThunk,
  fetchChatMessagesThunk,
  fetchChatsThunk,
  fetchQuoteThunk,
  removeChatThunk,
  updateChatThunk,
} from "../Chat/operations";

const initialState = {
  isLoading: false,
  isError: null,
  openDialogId: null,
  dialogMeta: {},
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.isError = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.isError = payload;
}

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openDialog: (state, { payload }) => {
      state.openDialogId = payload.id;
      state.dialogMeta = payload.meta || {};
    },
    closeDialog: (state) => {
      state.openDialogId = null;
      state.dialogMeta = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          loginThunk.fulfilled,
          logoutThunk.fulfilled,
          refreshThunk.fulfilled,
          addChatThunk.fulfilled,
          fetchChatsThunk.fulfilled,
          updateChatThunk.fulfilled,
          removeChatThunk.fulfilled,
          fetchQuoteThunk.fulfilled,
          addMessageThunk.fulfilled,
          fetchChatMessagesThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshThunk.pending,
          addChatThunk.pending,
          fetchChatsThunk.pending,
          updateChatThunk.pending,
          removeChatThunk.pending,
          fetchQuoteThunk.pending,
          addMessageThunk.pending,
          fetchChatMessagesThunk.pending
        ),

        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected,
          addChatThunk.rejected,
          fetchChatsThunk.rejected,
          updateChatThunk.rejected,
          removeChatThunk.rejected,
          fetchQuoteThunk.rejected,
          addMessageThunk.rejected,
          fetchChatMessagesThunk.rejected
        ),

        handleRejected
      );
  },
});

export const { openDialog, closeDialog } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
