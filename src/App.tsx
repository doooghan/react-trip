import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import robtos from "./mock/robots.json";
import Robot from "./components/Robot";

function App() {
  return (
    <ul>
      {robtos.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </ul>
  );
}

export default App;
