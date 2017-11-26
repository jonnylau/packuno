export function userItemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'USERITEMS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function userItemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'USERITEMS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function userItems(state = [], action) {
  switch (action.type) {
    case 'USERITEMS_FETCH_DATA_SUCCESS':
      return action.userItems;

    default:
      return state;
  }
}
