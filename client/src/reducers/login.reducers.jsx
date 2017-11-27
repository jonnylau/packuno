const login = (state = 'false', action) => {
  if (action.type === 'LOG_IN') {
    return action.loggedIn;
  }
  return state;
};

export default login;
