const goodsList = [
  {
    id: 0,
    name: "商品0",
    price: 200,
  },
  {
    id: 1,
    name: "商品1",
    price: 122,
  },
  {
    id: 2,
    name: "商品2",
    price: 323,
  },
  {
    id: 3,
    name: "商品3",
    price: 452,
  },
  {
    id: 4,
    name: "商品4",
    price: 1212,
  },
  {
    id: 5,
    name: "商品5",
    price: 222,
  },
  {
    id: 6,
    name: "商品6",
    price: 88,
  },
];
export default function getGoods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(goodsList);
    }, 500);
  });
}
