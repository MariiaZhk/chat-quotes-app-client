import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./css/common.js";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "./ToastNotification/ToastNotification.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
        <ToastNotification />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
