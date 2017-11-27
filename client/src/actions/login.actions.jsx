const request = require('request');
const rp = require('request-promise');

export const loggedIn = bool => ({
  type: 'LOG_IN',
  loggedIn: bool,
});

export const loggedInAsync = () => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/check/',
  };
  rp(options).then((result) => {
    dispatch(loggedIn(result.toString()));
  });
};

export const currentUser = userID => ({
  type: 'SET_CURRENT_USER',
  userId: userID,
});

export const currentUserAsync = userID => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/user/',
  };
  rp(options).then((result) => {
    const id = JSON.parse(result);
    return id.id;
  }).then((id) => {
    dispatch(currentUser(id));
  });
};

