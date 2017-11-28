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
    console.log(tripitem);
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

  axios.get(`/trips/${tripId}/items`)
    .then((response) => {
      dispatch(itemsIsLoading(false));
      dispatch(itemsFetchDataSuccess(response.data));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};


// Basic functionality

export const addItem = (item, category, quantity, userId, tripId) => (dispatch) => {
  axios.post('/items', {
    item,
    category,
    quantity,
    packed: false,
    userId: 1,
    tripId,
  })
    .then((response) => {
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


export const togglePacked = (id) => {
  axios.patch(`/trip/items/${id}/packed`);

  return {
    type: 'TOGGLE_PACKED',
    id,
  };
};

export const deleteItem = (id) => {
  axios.delete(`/trip/items/${id}`);

  return {
    type: 'DELETE_ITEM',
    id,
  };
};

export const editItem = (id, item, category, quantity, itemId) => {
  axios.patch(`/trip/items/${id}`, {
    id,
    item,
    category,
    quantity,
    itemId,
  });

  return {
    type: 'EDIT_ITEM',
    id,
    item,
    category,
    quantity,
  };
};


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
