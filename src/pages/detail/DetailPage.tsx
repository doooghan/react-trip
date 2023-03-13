import { Col, Row, Spin, DatePicker, Divider, Typography, Anchor } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer/Footer";
import { ProductIntro } from "@/components/productIntro/ProductIntro";
import { ProductComments } from "@/components/productComments/ProductComments";

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const { touristRouteId } = useParams<MatchParams>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/touristRoutes/${touristRouteId}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
    <>
      <h2>旅游路线详情页面, ID：{props.match.params.touristRouteId}</h2>

      <Header />

      <div className={styles["page-content"]}>
        {/* 产品简介 与 日期选择 */}
        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product?.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: "20px" }} />
            </Col>
          </Row>
        </div>

        {/* 锚点菜单 */}
        <Anchor
          className={styles["product-detail-anchor"]}
          direction="horizontal"
          items={[
            {
              key: "feature",
              href: "#feature",
              title: "产品特色",
            },
            {
              key: "fees",
              href: "#fees",
              title: "费用",
            },
            {
              key: "notes",
              href: "#notes",
              title: "预订须知",
            },
            {
              key: "comments",
              href: "#comments",
              title: "用户评价",
            },
          ]}
        ></Anchor>

        {/* 产品特色 */}
        <div id="feature" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.feature }}
            style={{ margin: 50 }}
          ></div>
        </div>

        {/* 费用 */}
        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}
          ></div>
        </div>

        {/* 预定须知 */}
        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}
          ></div>
        </div>

        {/* 商品评价 */}
        <div id="comments" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <div style={{ margin: 50 }}>
            <ProductComments data={product.comments} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
