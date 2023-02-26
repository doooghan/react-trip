import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  return (
    <>
      <h2>旅游路线详情页面, ID：{props.match.params.touristRouteId}</h2>
    </>
  );
};
