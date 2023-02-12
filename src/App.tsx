import React from "react";
import reactLogo from "./assets/react.svg";
import robtos from "./mock/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
import { render } from "react-dom";

interface Props {}
interface State {
  robotGallery: any[];
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
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
