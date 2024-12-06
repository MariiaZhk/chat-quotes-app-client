import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { chatReducer } from "./Chat/chatSlice";
import { globalReducer } from "./Global/globalSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "user"],
};
const chatPersistConfig = {
  key: "chat",
  storage,
  whitelist: ["chats"],
};
const persistGlobalConfig = {
  key: "global",
  storage,
  whitelist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedChatReducer = persistReducer(chatPersistConfig, chatReducer);
const persistedGlobalReducer = persistReducer(
  persistGlobalConfig,
  globalReducer
);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    chatSlice: persistedChatReducer,
    globalSlice: persistedGlobalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
