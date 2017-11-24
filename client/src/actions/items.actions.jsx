
let itemID = 4;

export const addItem = (item, category = '') => {
  return {
    type: 'ADD_ITEM',
    id: itemID += 1,
    item,
    category,
    packed: false,
  };
};


export const togglePacked = (id) => {
  return {
    type: 'TOGGLE_PACKED',
    id,
  };
};

export const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id,
  };
};


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};
