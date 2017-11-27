const request = require('request');
const rp = require('request-promise');

export const loggedIn = bool => ({
  type: 'LOG_IN',
  loggedIn: bool,
});

export const loggedInAsync = bool => (dispatch, getState) => {
  const options = {
    type: 'GET',
    uri: 'http://localhost:3000/check/',
  };
  rp(options).then((result) => {
    console.log('dispatch', result);
    dispatch(loggedIn(result.toString()));
  });
};
