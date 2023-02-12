import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}
const App: React.FC = (props) => {
  const [count, setCount] = useState(0);
  const [robotGallery, setRobotGallery] = useState<any[]>([]);
  useEffect(() => {
    console.log("effect count 依赖");
    document.title = `点击了${count}次`;
  }, [count]);
  // useEffect(() => {
  //   console.log("effect 无依赖");
  //   document.title = `点击了${count}次`;
  // });

  useEffect(() => {
    console.log("fetch");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobotGallery(data));
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={reactLogo} alt="logo" className={styles.appLogo} />
        <h1>吊炸天</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count} </span>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
};

export default App;
