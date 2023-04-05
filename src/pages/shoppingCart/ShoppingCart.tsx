import { Row, Col, Affix } from "antd";
import styles from "./ShoppingCart.module.css";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductList, PaymentCard } from "@/components";
import { useSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { clearShoppingCartItem } from "@/redux/shoppingCart/slice";

export const ShoppingCart: React.FC = () => {
  const loading = useSelector((s) => s.shoppingCart.loading);
  const shoppingCartItems = useSelector((s) => s.shoppingCart.items);
  const jwt = useSelector((s) => s.user.token) as string;
  const dispatch = useDispatch();

  return (
    <>
      <MainLayout>
        <Row>
          {/* 购物车清单 */}
          <Col span={16}>
            <div className={styles["product-list-container"]}>
              <ProductList data={shoppingCartItems.map((s) => s.tourisRoute)} />
            </div>
          </Col>
          {/* 支付卡组件 */}
          <Col span={8}>
            <Affix>
              <div className={styles["payment-card-container"]}>
                <PaymentCard
                  loading={loading}
                  originalPrice={shoppingCartItems
                    .map((s) => s.originalPrice)
                    .reduce((a, b) => a + b, 0)}
                  price={shoppingCartItems
                    .map(
                      (s) =>
                        s.originalPrice *
                        (s.discountPresent ? s.discountPresent : 1)
                    )
                    .reduce((a, b) => a + b, 0)}
                  onCheckout={() => {}}
                  onShoppingCartClear={() =>
                    dispatch(
                      clearShoppingCartItem({
                        jwt,
                        itemIds: shoppingCartItems.map((s) => s.id),
                      })
                    )
                  }
                />
              </div>
            </Affix>
          </Col>
        </Row>
      </MainLayout>
    </>
  );
};