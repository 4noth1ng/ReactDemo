import React, { useRef } from "react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import getGoods from "../../utils/api";
import ItemCount from "./ItemCount";

type CheckMap = {
  [id: number]: boolean;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
};

function Cart() {
  let [goodsList, setGoodsList] = useState([]);
  const [checkMap, setCheckMap] = useState<CheckMap>({});
  const handleChecked = (cartItem: CartItem, checked: boolean) => {
    const { id } = cartItem;
    const newCheckedMap = Object.assign({}, checkMap, {
      [id]: checked,
    });
    setCheckMap(newCheckedMap);
  };
  const handleCheckedRef = useRef(handleChecked);
  useEffect(() => {
    handleCheckedRef.current = handleChecked;
  });

  const filterCheckedCartItem = Object.entries(checkMap)
    .filter((entries) => Boolean(entries[1]))
    .map(([checkedId]) => goodsList[Number(checkedId)]);

  const isCheckedAll =
    filterCheckedCartItem.length === goodsList.length && !goodsList.length;
  const handleCheckAll = (newCheckAll: boolean) => {
    const newCheckedMap = {};
    if (newCheckAll) {
      goodsList.forEach(({ id }) => {
        Reflect.set(newCheckedMap, id, true);
      });
    }

    setCheckMap(newCheckedMap);
  };

  useEffect(() => {
    getGoods().then((res: any) => {
      setGoodsList(res);
    });
  }, []);

  const list = goodsList.map((cartItem, index) => {
    const { id } = cartItem;
    const checked = checkMap![id];

    return (
      <CartItem
        key={index}
        cartItem={cartItem}
        checked={checked}
        handleCheckedRef={handleCheckedRef}
      ></CartItem>
    );
  });
  return (
    <div className=" w-64 m-auto">
      {list}
      <ItemCount
        goodsList={filterCheckedCartItem}
        handleCheckAll={handleCheckAll}
      ></ItemCount>
    </div>
  );
}

export default Cart;
