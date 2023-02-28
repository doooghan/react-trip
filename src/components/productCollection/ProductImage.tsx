import { Image, Typography } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import mFacebook from "../../assets/images/facebook-807588_640.png";

interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
  history,
}) => {
  const [width, height] = size === "large" ? [490, 285] : [240, 120];
  imageSrc = mFacebook;
  return (
    <div onClick={() => history.push(`/detail/${id}`)}>
      <Image src={imageSrc} width={width} height={height} />
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </div>
  );
};

export const ProductImage = withRouter(ProductImageComponent);
