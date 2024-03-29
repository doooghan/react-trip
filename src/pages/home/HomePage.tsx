import React, { ReactNode } from "react";
import styles from "./HomePage.module.css";

import { Row, Col, Typography, Spin } from "antd";

import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/Footer";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import { Carousel } from "@/components/carousel/Carousel";
import { ProductCollection } from "@/components/productCollection/ProductCollection";
import { BusinessPartners } from "@/components/businessPartners/BusinessPartners";

import sideImage from "@/assets/images/sider_2019_12-09.png";
import sideImage2 from "@/assets/images/sider_2019_02-04.png";
import sideImage3 from "@/assets/images/sider_2019_02-04-2.png";

import { withRouter, RouteComponentProps } from "react-router-dom";
import { withTranslation, WithTranslation } from "react-i18next";
import { giveMeDataActionCreator } from "@/redux/recommendProducts/recommendProductsActions";
import { connect } from "react-redux";
import { RootState } from "@/redux/store";

import { MainLayout } from "@/layouts/MainLayout";

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};

type PropsType = RouteComponentProps &
  WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {
  componentDidMount() {
    console.log(
      "route location",
      this.props.location,
      "match",
      this.props.match
    );
    this.props.giveMeData();
  }

  render(): ReactNode {
    const { t } = this.props;
    const { productList, loading, error } = this.props;

    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>网站出错：{error}</div>;
    }

    return (
      <MainLayout>
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
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
        <BusinessPartners />
      </MainLayout>
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(withRouter(HomePageComponent)));
