const setForecast = (state = [], action) => {
  if (action.type === 'SET_FORECAST') {
    console.log(action.type);
    return action.forecast;
  }
  return state;
};


export default setForecast;