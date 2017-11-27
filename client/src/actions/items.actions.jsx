const axios = require('axios');


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

export const itemsFetchData = tripId => (dispatch) => {
  dispatch(itemsIsLoading(true));

  axios.get(`/${tripId}/tripItems`)
    .then((response) => {
      dispatch(itemsIsLoading(false));
      dispatch(itemsFetchDataSuccess(response.data));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};


// Add item

export const addItem = (item, category, quantity, userId, tripId) => (dispatch) => {
  axios.post('/items', {
    item,
    category,
    quantity,
    packed: false,
    userId,
    tripId,
  })
    .then(response => {
      dispatch({
        type: 'ADD_ITEM_SUCCESS',
        id: response.id,
        item,
        category,
        quantity,
        packed: false,
        itemId: response.itemId,
      });
  });
};


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
