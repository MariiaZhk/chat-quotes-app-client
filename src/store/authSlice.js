import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      firstName: "",
      lastName: "",
    },
    token: "",
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.firstName = payload.user.firstName;
        state.user.lastName = payload.user.lastName;
        state.token = payload.token;
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })

      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.firstName = payload.user.firstName;
        state.user.lastName = payload.user.lastName;
        state.token = payload.token;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = {
          email: "",
          firstName: "",
          lastName: "",
        };
        state.token = "";
        state.var = "";
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
        state.isLogged = true;
        state.isRefresh = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.firstName = payload.firstName;
        state.user.lastName = payload.lastName;
        state.isLogged = true;
        state.isLoading = false;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isRefresh = false;
      });
  },
});

export const authReducer = authSlice.reducer;
