const packingList = (state = [], action) => {
  if (action.type === 'ADD_ITEM') {
    return [...state,
      {
        id: action.id,
        item: action.item,
        category: action.category,
        packed: false,
      }];
  } else if (action.type === 'TOGGLE_PACKED') {
    return state.map((packingItem) => {
      return (packingItem.id !== action.id)
        ? { ...packingItem, packed: !packingItem.packed }
        : packingItem;
    });
  }
  return state;
};


export default packingList;
