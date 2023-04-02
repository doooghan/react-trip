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
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: `前往码头搭乘快艇前往潜水艇平台，搭乘潜水艇潜入7米深红海，欣赏神秘美丽的红海海底世界。并有潜水员为您献上海底喂鱼的表演。含接送，中文导游陪同`,
            createDate: "2020-01-05",
          },
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: `早上5点左右从酒店出发前往码头，搭乘小船前往尼罗河西岸。小船上准备有热咖啡，茶，以及小点心。搭乘热气球迎接日出，并俯瞰卢克索。途径哈布城，女王神庙，帝王谷等景点，从高空体验不一样的卢克索。落地后会举办一个小的庆祝仪式，并为客人颁发证书。之后专车送返酒店。`,
            createDate: "2020-02-06",
          },
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: `行程安排仅供参考，视当天具体天气情况而定。若因天气状况而无法乘坐热气球，则原价退还！`,
            createDate: "2020-01-04",
          },
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: `搭乘特殊定制的游船，在游船底部设有大型观光窗，便于欣赏奇妙的海底世界。包含接送，中文导游陪同注意：上下船时请注意安全，依次排队切勿拥挤、小心地滑。70美金/人（4人起）`,
            createDate: "2020-02-05",
          },
        ],
      };
    },
  },
  {
    url: "/api/touristRoutes",
    method: "get",
    response: () => {
      return {
        pagination: "pagination",
        data: [
          {
            id: "39996f34-013c-4fc6-b1b3-0c1036c47119",
            title: "美国夏威夷7日5晚自由行性价比甄选:",
            description:
              "【酒店自选|航班多选】5晚连住酒店超优价拔草恐龙湾&钻石头山&大风口&珍珠港|首府檀香山 威基基海滩 经典行程 初游打卡",
            price: 7003.0,
            originalPrice: 7003.0,
            discountPresent: null,
            rating: 4.5,
            travelDays: "Five",
            tripType: "BackPackTour",
            departureCity: "Shenzhen",
            createTime: "0001-01-01T00:00:00",
            updateTime: null,
            departureTime: null,
            touristRoutePictures: [],
          },
        ],
      };
    },
  },
  {
    url: "/auth/register",
    method: "post",
  },
  {
    url: "/auth/login",
    method: "post",
    response: () => {
      return {
        token: "111",
        code: 0,
      };
    },
  },
] as MockMethod[];
