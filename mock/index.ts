import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/mock/api/test",
    method: "get",
    response: () => {
      return { msg: "666", code: 2000 };
    },
  },
] as MockMethod[];
