import { useState } from "react";
import reactLogo from "./assets/react.svg";
import robtos from "./mock/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robtos.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
