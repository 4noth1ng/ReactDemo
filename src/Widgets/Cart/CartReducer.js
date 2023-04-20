export default function CartReducer(goodsList, action) {
  switch (action.type) {
    case "CHECKED_CHANGE": {
      const { cartItem, checked } = payload;
      const { id } = cartItem;
      const newCheckedMap = Object.assign({}, checkMap, {
        [id]: checked,
      });
    }
  }
}

const handleChecked = (cartItem, checked) => {
  const { id } = cartItem;
  const newCheckedMap = Object.assign({}, checkMap, {
    [id]: checked,
  });
  setCheckMap(newCheckedMap);
};

const handleCheckAll = (newCheckAll) => {
  const newCheckedMap = {};
  if (newCheckAll) {
    goodsList.forEach(({ id }) => {
      Reflect.set(newCheckedMap, id, true);
    });
  }

  setCheckMap(newCheckedMap);
};
