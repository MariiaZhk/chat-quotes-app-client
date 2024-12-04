import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, quotableApi } from "../../configApi/configApi";
import { toast } from "react-toastify";

export const addChatThunk = createAsyncThunk(
  "chats/addChat",
  async (chatName, thunkAPI) => {
    try {
      const { data } = await api.post("/chats", { name: chatName });
      toast.success("Chat created successfully!");
      return data;
    } catch (error) {
      toast.error("Error creating chat: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchChatsThunk = createAsyncThunk(
  "chats/fetchChats",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/chats");
      console.log(data);
      return data;
    } catch (error) {
      toast.error("Error fetching chats: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getQuoteThunk = createAsyncThunk(
  "chats/sendMessage",
  async (message, thunkAPI) => {
    try {
      const query = encodeURIComponent(message.trim());
      const { data } = await quotableApi.get(`search/quotes?query=${query}`);
      if (data.results.length === 0) {
        return thunkAPI.rejectWithValue("No quotes found");
      }
      const randomQuote =
        data.results[Math.floor(Math.random() * data.results.length)];
      return randomQuote;
    } catch (error) {
      toast.error("Error fetching quotes: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
