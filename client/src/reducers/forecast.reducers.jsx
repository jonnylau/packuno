const setForecast = (state = [], action) => {
  if (action.type === 'SET_FORECAST') {
    return action.forecast;
  }
  return state;
};


export default setForecast;