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

export const updateChatThunk = createAsyncThunk(
  "chats/renameChat",
  async ({ chatId, name }, thunkAPI) => {
    try {
      const { data } = await api.put(`/chats/${chatId}`, { name });
      toast.success("Chat updated successfully!");
      return data;
    } catch (error) {
      toast.error("Error updating chat: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeChatThunk = createAsyncThunk(
  "chats/removeChat",
  async (chatId, thunkAPI) => {
    try {
      await api.delete(`/chats/${chatId}`);
      toast.success("Chat removed successfully!");
      return chatId;
    } catch (error) {
      toast.error("Error removing chat: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchQuoteThunk = createAsyncThunk(
  "chats/fetchQuote",
  async (query, thunkAPI) => {
    try {
      const response = await quotableApi.get(
        `/search/quotes?query=${encodeURIComponent(query)}`
      );
      const data = response.data;
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        return data.results[randomIndex].content;
      } else {
        return "No quotes found for your query.";
      }
    } catch (error) {
      console.error("Error fetching quote response:", error);
      return thunkAPI.rejectWithValue("Sorry, something went wrong.");
    }
  }
);

export const addMessageThunk = createAsyncThunk(
  "chats/addMessage",
  async ({ chatId, sender, content }, thunkAPI) => {
    try {
      const { data } = await api.post(`/chats/${chatId}/messages`, {
        sender,
        content,
      });
      return { chatId, message: data };
    } catch (error) {
      toast.error("Error sending message: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchChatMessagesThunk = createAsyncThunk(
  "chats/fetchChatMessages",
  async (chatId, thunkAPI) => {
    try {
      const { data } = await api.get(`/chats/${chatId}/messages`);
      return { chatId, messages: data };
    } catch (error) {
      toast.error("Error fetching messages: " + error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
