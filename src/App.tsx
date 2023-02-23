import React from "react";
import logo from "./assets/react.svg";
import styles from "./App.module.css";
import {
  Layout,
  Typography,
  Input,
  Dropdown,
  Menu,
  Button,
  MenuProps,
} from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title, Text } = Typography;

interface Props {}
interface State {}

const items: MenuProps["items"] = [
  { label: "旅游首页", key: "1" },
  { label: "周末游", key: "2" },
  { label: "跟团游", key: "3" },
  { label: "自由行", key: "4" },
  { label: "私家团", key: "5" },
  { label: "邮轮", key: "6" },
  { label: "酒店+景点", key: "7" },
  { label: "当地玩乐", key: "8" },
  { label: "主题游", key: "9" },
  { label: "定制游", key: "10" },
  { label: "游学", key: "11" },
  { label: "签证", key: "12" },
  { label: "企业游", key: "13" },
  { label: "高端游", key: "14" },
  { label: "爱玩户外", key: "15" },
  { label: "保险", key: "16" },
];

const App: React.FC = (props) => {
  return (
    <div className={styles.App}>
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Text className={styles.slogan}>让旅游更幸福</Text>
            <Dropdown.Button
              style={{ marginLeft: 15, width: "80%" }}
              icon={<GlobalOutlined />}
              menu={{
                items: [
                  {
                    label: "中文",
                    key: "1",
                  },
                  {
                    label: "English",
                    key: "2",
                  },
                ],
              }}
            >
              语言
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button>注册</Button>
              <Button>登陆</Button>
            </Button.Group>
          </div>
        </div>

        <Header className={styles["main-header"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Title level={3} className={styles.title}>
            欢迎来到 react trip
          </Title>
          <Input.Search
            placeholder={"请搜索"}
            className={styles["search-input"]}
          />
        </Header>

        <Menu
          mode="horizontal"
          items={items}
          className={styles["main-menu"]}
        ></Menu>
      </div>

      <Layout.Footer>
        <Typography.Title
          level={3}
          style={{ textAlign: "center", lineHeight: "60px" }}
        >
          版权所有 @ 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
};

export default App;
