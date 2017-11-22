const defaultState = {
  byId: {},
  allIds: [],
};

const items = (state = defaultState, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      byId: {
        ...state.byId,
        [action.id]: {
          id: action.id,
          item: action.item,
          category: action.category,
          packed: false,
        },
      },
      allIds: [...state.allIds, action.id],
    };
  } else if (action.type === 'TOGGLE_PACKED') {
    let item = state.byId[action.id];
    return {
      ...state,
      byId: {
        ...state.byId,
        [item.id]: {
          ...item,
          packed: !item.packed,
        },
      },
    };
  }

  return state;
};


export default items;





// Old version for reference (for now)

// const packingList = (state = [], action) => {
//   if (action.type === 'ADD_ITEM') {
//     return [...state,
//       {
//         id: action.id,
//         item: action.item,
//         category: action.category,
//         packed: false,
//       }];
//   } else if (action.type === 'TOGGLE_PACKED') {
//     return state.map((packingItem) => {
//       return (packingItem.id !== action.id)
//         ? { ...packingItem, packed: !packingItem.packed }
//         : packingItem;
//     });
//   }
//   return state;
// };


// export default packingList;
