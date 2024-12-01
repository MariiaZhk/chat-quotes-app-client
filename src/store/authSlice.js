import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      name: "",
      gender: "",
      avatarURL: "",
      registrationDate: "",
    },
    var: "",
    token: "",
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder;
  },
});

export const authReducer = authSlice.reducer;
export const { changeUserTheme, changeLanguageInState } = authSlice.actions;
