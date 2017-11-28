const request = require('request');
const rp = require('request-promise');

export const loggedIn = bool => ({
  type: 'LOG_IN',
  loggedIn: bool,
});


export const currentUser = userID => ({
  type: 'SET_CURRENT_USER',
  userId: userID,
});

export const currentUserAsync = () => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: '/user/',
  };
  rp(options).then((result) => {
    const id = JSON.parse(result);
    return id.id;
  }).then((id) => {
    dispatch(currentUser(id));
  });
};

export const loggedInAsync = bool => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: '/check/',
  };
  rp(options)
    .then((result) => {
      console.log('dispatch', result);
      dispatch(loggedIn(result.toString()));
      if (result) {
        dispatch(currentUserAsync())
      }
    });
};
