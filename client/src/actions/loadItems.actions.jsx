// const request = require('request');
const axios = require('axios');

export function userItemsHasErrored(bool) {
  console.log('in userItemsHasErrored');
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

export function userItemsFetchData() {
  return (dispatch) => {
    dispatch(userItemsIsLoading(true));

    axios.get('/userItems')
      .then((response) => {
        dispatch(userItemsIsLoading(false));
        dispatch(userItemsFetchDataSuccess(response.data));
      })
      .catch(err => dispatch(userItemsHasErrored(true)));
  };
}