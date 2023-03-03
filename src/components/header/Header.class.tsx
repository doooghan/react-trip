import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/react.svg";
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
import { withRouter, RouteComponentProps } from "react-router-dom";
import store from "@/redux/store";
import { LanguageState } from "@/redux/languageReducer";

const { Title, Text } = Typography;

interface State extends LanguageState {}

class HeaderComponent extends React.Component<RouteComponentProps, State> {
  constructor(props) {
    super(props);

    console.log("step2: get state");
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = () => {
    console.log("step5: call subscribe");

    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    });
  };

  menuClickHandler = (e) => {
    console.log("step3: dispatch action, menuClickHandler", e);

    if (e.key === "new") {
      const action = {
        type: "add_language",
        payload: { name: "新语言", code: "new_lang" },
      };
      store.dispatch(action);
    } else {
      const action = {
        type: "change_language",
        payload: e.key,
      };
      store.dispatch(action);
    }
  };

  render() {
    console.log("header.class.tsx");
    const { history } = this.props;
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
    const LanguageItems = [
      ...this.state.languageList.map((l) => {
        return {
          label: l.name,
          key: l.code,
        };
      }),
      { label: "添加新语言", key: "new" },
    ];
    return (
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Text className={styles.slogan}>让旅游更幸福</Text>
            <Dropdown.Button
              style={{ marginLeft: 15, width: "80%", marginTop: "5px" }}
              icon={<GlobalOutlined />}
              menu={{
                items: LanguageItems,
                onClick: this.menuClickHandler,
              }}
            >
              {this.state.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => history.push("register")}>注册</Button>
              <Button onClick={() => history.push("signIn")}>登陆</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Title level={3} className={styles.title}>
              欢迎来到 react trip
            </Title>
          </span>

          <Input.Search
            placeholder={"请搜索"}
            className={styles["search-input"]}
          />
        </Layout.Header>

        <Menu
          mode="horizontal"
          items={items}
          className={styles["main-menu"]}
        ></Menu>
      </div>
    );
  }
}

export const Header = withRouter(HeaderComponent);
