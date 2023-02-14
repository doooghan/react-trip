import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const defaultValue = {
  username: "帅哥",
};

export const appContext = React.createContext(defaultValue);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <appContext.Provider value={defaultValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>
);
