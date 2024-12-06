import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "../Auth/operations.js";
import {
  addChatThunk,
  fetchChatsThunk,
  getQuoteThunk,
  sendMessageThunk,
} from "../Chat/operations";

const initialState = {
  isLoading: false,
  isError: null,
  openDialogId: null,
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
      state.openDialogId = payload;
    },
    closeDialog: (state) => {
      state.openDialogId = null;
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
          sendMessageThunk.fulfilled,
          getQuoteThunk.fulfilled
        ),
        (state) => {
          handleFulfilled(state);
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshThunk.pending,
          addChatThunk.pending,
          fetchChatsThunk.pending,
          sendMessageThunk.pending,
          getQuoteThunk.pending
        ),
        (state) => {
          handlePending(state);
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected,
          addChatThunk.rejected,
          fetchChatsThunk.rejected,
          sendMessageThunk.rejected,
          getQuoteThunk.rejected
        ),
        (state, { payload }) => {
          handleRejected(state, payload);
        }
      );
  },
});

export const { openDialog, closeDialog } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
