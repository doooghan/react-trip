import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "@/../mock/mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const SideMenu: React.FC = () => {
  const items: MenuItem[] = sideMenuList.map((m, index) => {
    return {
      label: m.title,
      key: `side-menu-${index}`,
      icon: <GifOutlined />,
      children: m.subMenu.map((sm, smIndex) => {
        return {
          label: sm.title,
          key: `${index}-${smIndex}`,
          children: sm.subMenu.map((sms, smsIndex) => {
            return {
              label: sms,
              key: `${index}-${smIndex}-${smsIndex}`,
            };
          }),
        };
      }),
    };
  });
  return <Menu mode="vertical" className={styles["side-menu"]} items={items} />;
};
