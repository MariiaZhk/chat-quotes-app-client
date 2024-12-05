import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    openDialogId: null,
  },
  reducers: {
    openDialog: (state, action) => {
      state.openDialogId = action.payload;
    },
    closeDialog: (state) => {
      state.openDialogId = null;
    },
  },
});

export const { openDialog, closeDialog } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
