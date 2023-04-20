export default function CartReducer(checkMap, action) {
  switch (action.type) {
    case "CHECKED_CHANGE": {
      const { payload } = action;
      const { cartItem, checked } = payload;
      const { id } = cartItem;
      const newCheckedMap = Object.assign({}, checkMap, {
        [id]: checked,
      });
      console.log(newCheckedMap);
      return newCheckedMap;
    }
    case "CHECK_ALL": {
      const { payload } = action;
      const { newCheckAll, goodsList } = payload;
      const newCheckedMap = {};
      if (newCheckAll) {
        goodsList.forEach(({ id }) => {
          Reflect.set(newCheckedMap, id, true);
        });
        // console.log(checkMap);
      }

      return newCheckedMap;
    }
  }
}

// const handleChecked = (cartItem, checked) => {
//   dispatch({
//     cartItem,
//     checked,
//   });
// };

// const handleCheckAll = (newCheckAll) => {
//   const newCheckedMap = {};
//   if (newCheckAll) {
//     goodsList.forEach(({ id }) => {
//       Reflect.set(newCheckedMap, id, true);
//     });
//   }

//   setCheckMap(newCheckedMap);
// };
