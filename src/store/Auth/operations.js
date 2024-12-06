import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configApi/configApi";
import { authSlice } from "./authSlice";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("auth/register", credentials);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      //   toast.error(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("auth/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      //   toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await api.post("auth/logout");
      localStorage.removeItem("auth");
      clearToken();
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }

    try {
      const { data } = await api.get("auth/current");
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// export const getCurrentThunk = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const savedToken = state.user.token;
//     if (savedToken) {
//       setToken(savedToken);
//     } else {
//       return thunkAPI.rejectWithValue("No token!");
//     }
//     try {
//       const response = await api.get("users/current");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
