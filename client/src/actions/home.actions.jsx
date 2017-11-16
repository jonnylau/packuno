
let itemID = 0;

export const addItem = (item, category) => {
  return {
    type: 'ADD_ITEM',
    id: itemID++,
    item, 
    category,
    packed: false
  }
};


export const togglePacked = (id) => {
  return {
    type: 'TOGGLE_PACKED',
    id
  }
};


export const setCatFilter = (selectedCategory) => {
  return {
    type: 'SET_CAT_FILTER',
    selectedCategory
  }
};

