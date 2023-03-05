import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Shopping/main";
import App from "./App";
import "./index.css";
import "antd/dist/reset.css";
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.get("/mock/api/test").then((res) => {
  console.log(res);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
