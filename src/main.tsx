import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Shopping/main";
import App from "./App";
import "./index.css";
import "antd/dist/reset.css";
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
