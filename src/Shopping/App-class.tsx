import React from "react";
import reactLogo from "./assets/react.svg";
import robtos from "../../mock/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}
// app.tsx 的 class 写法
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  componentDidMount(): void {
    Promise.resolve(robtos).then((data) =>
      this.setState({ robotGallery: data })
    );
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={reactLogo} alt="logo" className={styles.appLogo} />
          <h1>吊炸天</h1>
        </div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 }, () => {
              console.log("count+1 回调打印1", this.state.count);
            });
            console.log("count+1 同步打印", this.state.count);
            this.setState({ count: this.state.count + 1 }, () => {
              console.log("count+1 回调打印2", this.state.count);
            });
          }}
        >
          Click
        </button>
        <span>count+1: {this.state.count} </span>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => ({ count: preState.count + 1 }),
              () => {
                console.log("count+2 回调打印1", this.state.count);
              }
            );
            console.log("count+2 同步打印", this.state.count);
            this.setState(
              (preState, preProps) => ({ count: preState.count + 1 }),
              () => {
                console.log("count+2 回调打印2", this.state.count);
              }
            );
          }}
        >
          Click
        </button>
        <span>count+2: {this.state.count} </span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
