import { List } from "antd";

interface PropsType {
  data: {
    author: string;
    avatar: string;
    content: string;
    createDate: string;
  }[];
}

export const ProductComments: React.FC<PropsType> = ({ data }) => {
  return (
    <>
      <List
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item.content}</List.Item>}
      />
    </>
  );
};
