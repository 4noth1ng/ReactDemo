import CartReducer from "./CartReducer";
import { useReducer, useState, useEffect, useRef } from "react";

type CheckMap = {
  [id: number]: boolean;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
};

export default function useChecked(goodsList: any) {
  const [checkMap, dispatchCheckMap] = useReducer(CartReducer, {});

  const handleChecked = (cartItem: CartItem, checked: boolean) => {
    dispatchCheckMap({
      type: "CHECKED_CHANGE",
      payload: {
        cartItem,
        checked,
      },
    });
  };

  const handleCheckAll = (newCheckAll: boolean) => {
    // const newCheckedMap = {};
    // if (newCheckAll) {
    //   goodsList.forEach(({ id }) => {
    //     Reflect.set(newCheckedMap, id, true);
    //   });
    // }

    // setCheckMap(newCheckedMap);
    dispatchCheckMap({
      type: "CHECK_ALL",
      payload: {
        newCheckAll,
        goodsList,
      },
    });
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

  return {
    checkMap,
    handleChecked,
    handleCheckAll,
    handleCheckedRef,
    filterCheckedCartItem,
    isCheckedAll,
  };
}
