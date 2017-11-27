const setUser = (state = null, action) => {
    if (action.type === 'SET_CURRENT_USER') {
      return action.userId;
    }
    return state;
  };
  
  export default setUser;