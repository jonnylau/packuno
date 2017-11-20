
let itemID = 0;

export const addItem = (item, category) => {
  console.log('addItem action triggered', item, category);
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


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};


// export const setCatFilter = (selectedCategory) => {
//   return {
//     type: 'SET_CAT_FILTER',
//     selectedCategory,
//   };
// };

