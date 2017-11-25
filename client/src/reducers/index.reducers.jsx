import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.reducers.jsx';
import weatherWidget from './weather.reducers.jsx';
import setHistorical from './historical.reducers.jsx';
import setForecast from './forecast.reducers.jsx';
import items from './items.reducers';


const reducer = combineReducers({
  items,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
});

export default reducer;
