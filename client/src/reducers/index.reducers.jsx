import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';
import setHistorical from './historical.reducers';
import setForecast from './forecast.reducers';
import items from './items.reducers';
import login from './login.reducers';

const reducer = combineReducers({
  items,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
  login,
});

export default reducer;
