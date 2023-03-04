import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Shopping/main";
import App from "./App";
import "./index.css";
import "antd/dist/reset.css";
import "./i18n/configs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
