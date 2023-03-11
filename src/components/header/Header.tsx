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
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "@/redux/hooks";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "@/redux/language/languageActions";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

export const Header: React.FC = () => {
  const history = useHistory();
  console.log("useLocation", useLocation());
  console.log("useParams", useParams());
  console.log("useRouteMatch", useRouteMatch());
  console.log("header.FC.tsx");
  const language = useSelector((store) => store.language.language);
  const languageList = useSelector((store) => store.language.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    ...languageList.map((l) => {
      return {
        label: l.name,
        key: l.code,
      };
    }),
    { label: "添加新语言", key: "new" },
  ];

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

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
              onClick: menuClickHandler,
            }}
          >
            {language === "zh" ? "中文" : "English"}
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
};
