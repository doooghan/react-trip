import {
  Col,
  Row,
  Spin,
  DatePicker,
  Divider,
  Typography,
  Anchor,
  Button,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer/Footer";
import { ProductIntro } from "@/components/productIntro/ProductIntro";
import { ProductComments } from "@/components/productComments/ProductComments";
import { useSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import {
  productDetailSlice,
  getProductDetail,
} from "@/redux/productDetail/slice";
import { MainLayout } from "@/layouts/MainLayout";
import { addShoppingCartItem } from "@/redux/shoppingCart/slice";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  // const [loading, setLoading] = useState(true);
  // const [product, setProduct] = useState<any>(null);
  // const [error, setError] = useState<any>(null);
  const { touristRouteId } = useParams<MatchParams>();

  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(touristRouteId));
  }, []);

  const jwt = useSelector((s) => s.user.token) as string;
  const shoppingCartLoading = useSelector((s) => s.shoppingCart.loading);

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

      <MainLayout>
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
              <Button
                style={{ marginTop: 50, marginBottom: 30, display: "block" }}
                type="primary"
                danger
                loading={shoppingCartLoading}
                onClick={() => {
                  dispatch(
                    addShoppingCartItem({ jwt, touristRouteId: product.id })
                  );
                }}
              >
                <ShoppingCartOutlined />
                放入购物车
              </Button>
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
      </MainLayout>
    </>
  );
};
