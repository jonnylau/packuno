const setHistorical = (state = [], action) => {
  if (action.type === 'SET_HISTORICAL') {
    return JSON.parse(action.historical);
  }
  return state;
};


export default setHistorical;
