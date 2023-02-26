import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path="/" component={HomePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
