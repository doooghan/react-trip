import React, { ReactNode } from "react";
import styles from "./HomePage.module.css";

import { Row, Col, Typography } from "antd";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import { Carousel } from "@/components/carousel/Carousel";
import { ProductCollection } from "@/components/productCollection/ProductCollection";
import { BusinessPartners } from "@/components/businessPartners/BusinessPartners";

import sideImage from "@/assets/images/sider_2019_12-09.png";
import sideImage2 from "@/assets/images/sider_2019_02-04.png";
import sideImage3 from "@/assets/images/sider_2019_02-04-2.png";

import { productList1, productList2, productList3 } from "@/../mock/mockup";

export class HomePage extends React.Component {
  render(): ReactNode {
    console.log(this.props);
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
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                国内游推荐
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