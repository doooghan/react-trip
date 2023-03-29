import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header";
import styles from "./MainLayout.module.css";

interface PropsType {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
