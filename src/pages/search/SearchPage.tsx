import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import styles from "./SearchPage.module.css";
import { FilterArea, ProductList } from "@/components";
import { useParams } from "react-router-dom";

interface MatchParams {
  keywords: string;
}

export const SearchPage: React.FC = () => {
  const { keywords } = useParams<MatchParams>();

  return (
    <>
      <Header></Header>
      <div className={styles["page-content"]}>
        {/* 分类过滤器 */}
        <div className={styles["product-list-container"]}>
          <FilterArea />
        </div>
        {/* 产品列表 */}
        <div className={styles["product-list-container"]}>
          <ProductList />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
