import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
