const setHistorical = (state = [], action) => {
  if (action.type === 'SET_HISTORICAL') {
    console.log(JSON.parse(action.historical));
    return JSON.parse(action.historical);
  }
  return state;
};


export default setHistorical;
