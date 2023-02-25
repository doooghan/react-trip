import { Image, Typography } from "antd";
import mFacebook from "../../assets/images/facebook-807588_640.png";

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
}) => {
  const [width, height] = size === "large" ? [490, 285] : [240, 120];
  imageSrc = mFacebook;
  return (
    <div>
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
