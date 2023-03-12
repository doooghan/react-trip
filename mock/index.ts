import { MockMethod } from "vite-plugin-mock";
import { productList1, productList2, productList3 } from "./mockup";

export default [
  {
    url: "/api/test",
    method: "get",
    response: () => {
      return {
        msg: "test",
        code: 0,
      };
    },
  },
  {
    url: "/api/productCollections",
    method: "get",
    response: () => {
      return [
        { id: 1, touristRoutes: productList1 },
        { id: 2, touristRoutes: productList2 },
        { id: 3, touristRoutes: productList3 },
      ];
    },
  },
  {
    url: "/api/touristRoutes/:touristRoutes",
    method: "get",
    response: () => {
      return {
        id: "1b6d4f10 79ed-4aff-a915-4ce29dc9c7e1",
        title: "埃及阿斯+卢克案+红海Red Sea+开罗+亚历山大12日鼠团游(5钻)",
        description:
          "[官方旗版明屋纯项团] 25人封顶|含签证小费全程餐|3晚尼罗河游轮3晚红考全包度假村1晚底比斯古都|升级内陆飞机 优质中文导游队伍|七大神庙4赠项目",
        price: 1199.999,
        originalPrice: 11999.99,
        discountpresent: 0.1,
        rating: 3.5,
        travelDays: "Eightplus",
        tripType: "HotelAndAttractions",
        departureCity: "Beijing",
        createTime: "0801-01-81T80:00:00",
        updateTime: null,
        departoreTime: null,
        touristRoutePictures: [
          {
            url: "/src/assets/images/carousel_1.jpg",
          },
          {
            url: "/src/assets/images/carousel_2.jpg",
          },
          {
            url: "/src/assets/images/carousel_3.jpg",
          },
        ],
        feature: "<div>feature</div>",
        fees: "<div>fees</div>",
        notes: "<div>notes</div>",
        comments: "<div>comments</div>",
      };
    },
  },
] as MockMethod[];
