import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";
import { setToken } from "../../configApi/configApi";

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
    isRefresh: false,
  },
  reducers: {
    setStateToken: {
      prepare: (token) => {
        setToken(token);
        return { payload: token };
      },
      reducer: (state, { payload }) => {
        state.token = payload.token;
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.firstName = payload.user.firstName;
        state.user.lastName = payload.user.lastName;
        state.token = payload.token;
        state.isLogged = false;
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.firstName = payload.user.firstName;
        state.user.lastName = payload.user.lastName;
        state.token = payload.token;
        state.isLogged = true;
      })

      .addCase(loginThunk.rejected, (state) => {
        state.isLogged = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { email: "", firstName: "", lastName: "" };
        state.isLogged = false;
        state.token = "";
      })

      .addCase(refreshThunk.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.firstName = payload.firstName;
        state.user.lastName = payload.lastName;
        state.isLogged = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefresh = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setStateToken } = authSlice.actions;
