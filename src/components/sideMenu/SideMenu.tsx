import React from "react";
import styles from "./SideMenu.module.css";
import { sideMenuList } from "../../../mock/mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((m, index) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={
              <span>
                <GifOutlined />
                {m.title}
              </span>
            }
          >
            {m.subMenu.map((sm, smindex) => (
              <Menu.SubMenu
                key={`${index}-${smindex}`}
                title={
                  <span>
                    <GifOutlined></GifOutlined>
                    {sm.title}
                  </span>
                }
              >
                {sm.subMenu.map((sms, smsindex) => (
                  <Menu.Item key={`${index}-${smindex}-${smsindex}`}>
                    <span>
                      <GifOutlined></GifOutlined>
                      {sms}
                    </span>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
};
