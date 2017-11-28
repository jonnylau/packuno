const rp = require('request-promise');
const { tripsFetchData } = require('./trips.actions');

export const loggedIn = isLoggedInResult => ({
  type: 'LOG_IN',
  isLoggedInResult,
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

export const currentUserAsync = () => (dispatch) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/user/',
  };
  rp(options).then((result) => {
    const id = JSON.parse(result);
    return id.id;
  }).then((id) => {
    dispatch(currentUser(id));
    dispatch(tripsFetchData(id));
  });
};

export const loggedInAsync = () => (dispatch) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/check/',
  };
  rp(options)
    .then((result) => {
      const isLoggedInResult = (result === 'true');

      dispatch(loggedIn(isLoggedInResult));
      if (isLoggedInResult) {
        dispatch(currentUserAsync());
      }
    });
};
