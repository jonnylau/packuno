const axios = require('axios');
// const _ = require('underscore');


let itemID = 4;


// Load items for a particular trip to show in packing list

export const itemsHasErrored = bool => ({
  type: 'ITEMS_HAS_ERRORED',
  hasErrored: bool,
});

export const itemsIsLoading = bool => ({
  type: 'ITEMS_IS_LOADING',
  isLoading: bool,
});

export const itemsFetchDataSuccess = (data) => {
  const items = {
    byId: {},
    allIds: [],
    categories: [],
  };

  data.forEach((tripItem) => {
    const { id, Item, packed, quantity, itemId } = tripItem;

    items.byId[id] = {
      id,
      item: Item.item,
      category: Item.category,
      quantity,
      packed,
      itemId,
    };

    items.allIds.push(id);
    if (!items.categories.includes(Item.category)) {
      items.categories.push(Item.category);
    }
  });

  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
};

export const itemsFetchData = (tripId) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    axios.get(`/${tripId}/tripItems`)
      .then((response) => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsFetchDataSuccess(response.data));
      })
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}


// Packing list functionality

export const addItem = (item, category = 'Other', quantity = 0) => ({
  type: 'ADD_ITEM',
  id: itemID += 1,
  item,
  category,
  quantity,
  packed: false,
});


export const togglePacked = id => ({
  type: 'TOGGLE_PACKED',
  id,
});

export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id,
});

export const editItem = (id, item, category, quantity) => ({
  type: 'EDIT_ITEM',
  id,
  item,
  category,
  quantity,
});


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
