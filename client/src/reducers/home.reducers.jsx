
const packingList = (state, action) => {

  if (action.type === 'ADD_ITEM') {
    return [...state,
      {
        id: action.id, 
        item: action.item, 
        category: action.category;
        packed:false
      }]

  } else if (action.type === 'TOGGLE_PACKED') {
    return state.map((packingItem) => {
      if (packingItem.id !== action.id) {
        return packingItem;
      }

      return Object.assign( {}, packingItem, {packed: !packingItem.packed});

    });

  } else if (action.type === 'SET_CAT_FILTER') {

    return action.filter;

  } 
  
  } else if (action.type === 'SET_PACKED_FILTER') {

    return action.filter;
    
  } else {
    return state;

  }
};

export default packingList;