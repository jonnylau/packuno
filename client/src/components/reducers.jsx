const weatherWidget = (state = 'HISTORICAL', action) => {
  if (action.type === 'SHOW_CURRENT') {
    return 'CURRENT';
  }
  return state;
};
