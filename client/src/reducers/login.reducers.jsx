const isLoggedIn = (state = false, action) => {
  if (action.type === 'LOG_IN') {
    return action.isLoggedInResult;
  }
  return state;
};

export default isLoggedIn;
