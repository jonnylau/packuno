import _ from 'underscore';


export const itemsHasErrored = (state = false, action) => {
  if (action.type === 'ITEMS_HAS_ERRORED') {
    return action.hasErrored;
  }
  return state;
};

export const itemsIsLoading = (state = false, action) => {
  if (action.type === 'ITEMS_IS_LOADING') {
    return action.isLoading;
  }
  return state;
};


const defaultState = {
  byId: {},
  allIds: [],
  categories: [],
};


export const items = (state = defaultState, action) => {

  if (action.type === 'ITEMS_FETCH_DATA_SUCCESS') {
    return action.items;
  }

  if (action.type === 'ADD_ITEM_SUCCESS') {
    const { id, item, category, quantity, packed, itemId } = action;
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          id,
          item,
          category,
          quantity,
          packed,
          itemId,
        },
      },
      allIds: [...state.allIds, id],
      categories: _.uniq([...state.categories, category]),
    };
  }

  if (action.type === 'DELETE_ITEM') {
    const newState = { ...state };
    delete newState.byId[action.id];
    newState.allIds = _.without(newState.allIds, action.id);
    newState.categories = _.uniq(newState.allIds.map(id => newState.byId[id].category));
    return newState;
  }

  if (action.type === 'EDIT_ITEM') {
    return {
      ...state,
      byId: {
        ...state.byId,
        [action.id]: {
          ...state.byId[action.id],
          id: action.id,
          item: action.item,
          category: action.category,
          quantity: action.quantity,
        },
      },
      categories: _.uniq(state.allIds.map(id => state.byId[id].category).concat([action.category])),
    };
  }

  if (action.type === 'TOGGLE_PACKED') {
    const item = state.byId[action.id];
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
