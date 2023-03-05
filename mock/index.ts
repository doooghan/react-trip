import { MockMethod } from "vite-plugin-mock";
import { productList1, productList2, productList3 } from "./mockup";

export default [
  {
    url: "/mock/api/productCollections",
    method: "get",
    response: () => {
      return [
        { id: 1, touristRoutes: productList1 },
        { id: 2, touristRoutes: productList2 },
        { id: 3, touristRoutes: productList3 },
      ];
    },
  },
] as MockMethod[];
