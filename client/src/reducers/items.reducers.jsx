import _ from 'underscore';

const defaultState = {
  byId: {},
  allIds: [],
  categories: [],
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
          quantity: action.quantity,
          packed: false,
        },
      },
      allIds: [...state.allIds, action.id],
      categories: _.uniq([...state.categories, action.category]),
      pastItemsWCat: { ...state.pastItemsWCat, [action.item]: action.category },
    };
  } else if (action.type === 'DELETE_ITEM') {
    const newState = { ...state };
    delete newState.byId[action.id];
    newState.allIds = _.without(newState.allIds, action.id);
    return newState;
  } else if (action.type === 'TOGGLE_PACKED') {
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


export default items;
