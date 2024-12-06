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

// export const getQuoteThunk = createAsyncThunk(
//   "chats/getQuotes",
//   async (message, thunkAPI) => {
//     try {
//       const query = encodeURIComponent(message.trim());
//       const { data } = await quotableApi.get(`search/quotes?query=${query}`);
//       if (data.results.length === 0) {
//         return thunkAPI.rejectWithValue("No quotes found");
//       }
//       const randomQuote =
//         data.results[Math.floor(Math.random() * data.results.length)];
//       return randomQuote;
//     } catch (error) {
//       toast.error("Error fetching quotes: " + error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const sendMessageThunk = createAsyncThunk(
//   "chats/sendMessage",
//   async ({ chatId, messageContent, senderId }, thunkAPI) => {
//     try {
//       const { data } = await api.post(`/chats/${chatId}/messages`, {
//         content: messageContent,
//         sender: senderId,
//       });
//       toast.success("Message sent successfully!");
//       return { chatId, message: data };
//     } catch (error) {
//       toast.error("Error sending message: " + error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getQuoteThunk = createAsyncThunk(
  "chats/getQuote",
  async ({ chatId, senderId }, thunkAPI) => {
    try {
      // Отримуємо цитату з API
      const { data } = await quotableApi.get("/random");
      const { content, author } = data;

      // Формуємо повідомлення
      const messageContent = `${content} - ${author || "Unknown"}`;

      // Надсилаємо цитату на бекенд
      const result = await thunkAPI.dispatch(
        sendMessageThunk({
          content: messageContent,
          senderId,
          isQuote: true,
        })
      );

      return result.payload.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const sendMessageThunk = createAsyncThunk(
  "chats/sendMessage",
  async ({ chatId, content, senderId, isQuote = false }, thunkAPI) => {
    try {
      const { data } = await api.post(`/chats/${chatId}/messages`, {
        content,
        sender: senderId,
        isQuote,
      });

      return { chatId, message: data }; // Повертаємо chatId і нове повідомлення
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
