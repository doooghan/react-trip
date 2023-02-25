import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { SideMenu } from "./components/sideMenu/SideMenu";
import { Carousel } from "./components/carousel/Carousel";
import { Row, Col } from "antd";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default App;
