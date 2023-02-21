import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import Robot from "./components/Robot";
import styles from "./Shopping.module.css";
import ShoppingCart from "./components/ShoppingCart";
import RobotDiscount from "./components/RobotDiscount";
import data from "../../mock/robots.json";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}
const App: React.FC = (props) => {
  const [count, setCount] = useState(0);
  const [robotGallery, setRobotGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    document.title = `点击了${count}次`;
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const res = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = await res.json();

        setRobotGallery(data);
      } catch (e: any) {
        setError(e.message);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={reactLogo} alt="logo" className={styles.appLogo} />
        <h1>盼盼的吊-爆了</h1>
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
      {error && error !== "" ? <div>网站出错：{error}</div> : ""}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 === 0 ? (
              <Robot id={r.id} name={r.name} email={r.email} key={r.name} />
            ) : (
              <RobotDiscount
                id={r.id}
                name={r.name}
                email={r.email}
                key={r.name}
              />
            )
          )}
        </div>
      ) : (
        <h2>loading。。。加载中</h2>
      )}
    </div>
  );
};

export default App;
