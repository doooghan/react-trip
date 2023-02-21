import React from "react";
import { Layout, Typography, Input } from "antd";
import logo from "./assets/react.svg";
import styles from "./App.module.css";

const { Header } = Layout;
const { Title } = Typography;

interface Props {}
interface State {}

const App: React.FC = (props) => {
  return (
    <div className={styles.App}>
      <div>
        <Header>
          <img src={logo} alt="" />
          <Title level={3}>欢迎来到 react trip</Title>
          <Input placeholder={"请搜索"} />
        </Header>
      </div>
    </div>
  );
};

export default App;
