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
        state.token = payload;
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.firstName = payload.firstName;
        state.user.lastName = payload.lastName;
        state.token = payload.token;
        state.isLogged = true;
      })

      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.firstName = payload.firstName;
        state.user.lastName = payload.lastName;
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
        state.chats = payload.chats;
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
