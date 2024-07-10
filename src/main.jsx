import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./index.css";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
