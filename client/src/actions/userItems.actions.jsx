const axios = require('axios');


// Get User's past items so they are available in autocomplete with the most recently used category

export function userItemsHasErrored(bool) {
  return {
    type: 'USERITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function userItemsIsLoading(bool) {
  return {
    type: 'USERITEMS_IS_LOADING',
    isLoading: bool,
  };
}

export function userItemsFetchDataSuccess(data) {
  const userItems = {};
  data.forEach(userItem => userItems[userItem.item] = userItem.category);

  return {
    type: 'USERITEMS_FETCH_DATA_SUCCESS',
    userItems,
  };
}

export function userItemsFetchData(userId) {
  return (dispatch) => {
    dispatch(userItemsIsLoading(true));

    axios.get(`/users/${userId}/items`)
      .then((response) => {
        dispatch(userItemsIsLoading(false));
        dispatch(userItemsFetchDataSuccess(response.data));
      })
      .catch(() => dispatch(userItemsHasErrored(true)));
  };
}
