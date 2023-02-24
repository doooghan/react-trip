import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
