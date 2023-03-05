import React, { ReactNode } from "react";
import styles from "./HomePage.module.css";

import { Row, Col, Typography } from "antd";

import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/Footer";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import { Carousel } from "@/components/carousel/Carousel";
import { ProductCollection } from "@/components/productCollection/ProductCollection";
import { BusinessPartners } from "@/components/businessPartners/BusinessPartners";

import sideImage from "@/assets/images/sider_2019_12-09.png";
import sideImage2 from "@/assets/images/sider_2019_02-04.png";
import sideImage3 from "@/assets/images/sider_2019_02-04-2.png";

import { productList1, productList2, productList3 } from "@/../mock/mockup";
import { withTranslation, WithTranslation } from "react-i18next";

class HomePageComponent extends React.Component<WithTranslation> {
  render(): ReactNode {
    const { t } = this.props;
    return (
      <>
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

          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
        </div>
        <BusinessPartners />
        <Footer />
      </>
    );
  }
}

export const HomePage = withTranslation()(HomePageComponent);
