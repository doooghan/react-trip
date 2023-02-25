import { Col, Divider, Row } from "antd";
import styles from "./ProductCollection.module.css";
import { ProductImage } from "./ProductImage";

interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollection: React.FC<PropsType> = ({
  title,
  sideImage,
  products,
}) => {
  const productImageList = products.map((p, index) => {
    return index === 0 ? (
      <ProductImage
        id={p.id}
        size={"large"}
        title={p.title}
        imageSrc={p.touristRoutePictures[0].url}
        price={p.price}
      />
    ) : (
      <ProductImage
        id={p.id}
        size={"small"}
        title={p.title}
        imageSrc={p.touristRoutePictures[0].url}
        price={p.price}
      />
    );
  });

  return (
    <div>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} alt="" className={styles["side-image"]} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>{productImageList[0]}</Col>
            <Col span={12}>
              <Row>
                <Col span={12}>{productImageList[1]}</Col>
                <Col span={12}>{productImageList[2]}</Col>
              </Row>
              <Row>
                <Col span={12}>{productImageList[3]}</Col>
                <Col span={12}>{productImageList[4]}</Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>{productImageList[5]}</Col>
            <Col span={6}>{productImageList[6]}</Col>
            <Col span={6}>{productImageList[7]}</Col>
            <Col span={6}>{productImageList[8]}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
