import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";
interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target 描述事件发生的元素", e.target);
    console.log("e.currentTarget 描述事件处理绑定的元素", e.currentTarget);
    this.setState({ isOpen: !this.state.isOpen });
  };

  // 使用 context consumer
  render(): React.ReactNode {
    return (
      <appContext.Consumer>
        {(value) => (
          <div className={styles.cartContainer}>
            <button className={styles.button} onClick={this.handleClick}>
              <FiShoppingCart />
              <span>共有 {value.shoppingCart.items.length} （件）</span>
            </button>
            <div
              className={styles.cartDropDown}
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul>
                {value.shoppingCart.items.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCart;
