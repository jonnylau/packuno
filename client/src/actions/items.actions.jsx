
let itemID = 4;

export const addItem = (item, category = 'Other', quantity = 0) => {
  return {
    type: 'ADD_ITEM',
    id: itemID += 1,
    item,
    category,
    quantity,
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

export const editItem = (id, item, category, quantity) => {
  return {
    type: 'EDIT_ITEM',
    id,
    item,
    category,
    quantity,
  };
};


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};
