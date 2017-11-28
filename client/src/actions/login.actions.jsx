const rp = require('request-promise');
const { tripsFetchData } = require('./trips.actions');

export const loggedIn = isLoggedInResult => ({
  type: 'LOG_IN',
  isLoggedInResult,
});

export const currentUser = userID => ({
  type: 'SET_CURRENT_USER',
  userId: userID,
});

//async call using redux call. Async actions follow the below build.
export const currentUserAsync = () => (dispatch) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/user',
    //change localhost for deployment
  };
  rp(options).then((result) => {
    const id = JSON.parse(result);
    return id.id;
  }).then((id) => {
    dispatch(currentUser(id));
    dispatch(tripsFetchData(id));
  });
};

//async call using redux call. Async actions follow the below build.
export const loggedInAsync = () => (dispatch) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/check',
        //change localhost for deployment
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
