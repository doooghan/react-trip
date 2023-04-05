import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import styles from "./SearchPage.module.css";
import { FilterArea, ProductList } from "@/components";
import { useParams, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { searchProduct } from "@/redux/productSearch/slice";
import { useSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { MainLayout } from "@/layouts/MainLayout";

interface MatchParams {
  keywords: string;
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();

  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const productList = useSelector((state) => state.productSearch.data);
  const pagination = useSelector((s) => s.productSearch.pagination);

  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }));
  };

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
      {/* 分类过滤器 */}
      <div className={styles["product-list-container"]}>
        <FilterArea />
      </div>
      {/* 产品列表 */}
      <div className={styles["product-list-container"]}>
        <div>keywords是{keywords}</div>
        <ProductList
          data={productList}
          paging={pagination}
          onPageChange={onPageChange}
        />
      </div>
    </MainLayout>
  );
};
