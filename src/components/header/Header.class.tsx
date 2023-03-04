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
import { LanguageState } from "@/redux/language/languageReducer";
import { withTranslation, WithTranslation } from "react-i18next";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "@/redux/language/languageActions";

const { Title, Text } = Typography;

interface State extends LanguageState {}

class HeaderComponent extends React.Component<
  RouteComponentProps & WithTranslation,
  State
> {
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
      const action = addLanguageActionCreator("新语言", "new_lange");
      store.dispatch(action);
    } else {
      const action = changeLanguageActionCreator(e.key);
      store.dispatch(action);
    }
  };

  render() {
    console.log("header.class.tsx");
    const { history, t } = this.props;

    const items: MenuProps["items"] = [
      { label: t("header.home_page"), key: "1" },
      { label: t("header.weekend"), key: "2" },
      { label: t("header.group"), key: "3" },
      { label: t("header.backpack"), key: "4" },
      { label: t("header.private"), key: "5" },
      { label: t("header.cruise"), key: "6" },
      { label: t("header.hotel"), key: "7" },
      { label: t("header.local"), key: "8" },
      { label: t("header.theme"), key: "9" },
      { label: t("header.custom"), key: "10" },
      { label: t("header.study"), key: "11" },
      { label: t("header.visa"), key: "12" },
      { label: t("header.enterprise"), key: "13" },
      { label: t("header.high_end"), key: "14" },
      { label: t("header.outdoor"), key: "15" },
      { label: t("header.insurance"), key: "16" },
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
            <Text className={styles.slogan}>{t("header.slogan")}</Text>
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
              <Button onClick={() => history.push("register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => history.push("signIn")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles["main-header"]}>
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="" className={styles["App-logo"]} />
            <Title level={3} className={styles.title}>
              欢迎来到
              {t("header.title")}
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

export const Header = withTranslation()(withRouter(HeaderComponent));
