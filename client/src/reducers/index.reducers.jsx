import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.reducers.jsx';
import weatherWidget from './weather.reducers.jsx';
import setHistorical from './historical.reducers.jsx';
import setForecast from './forecast.reducers.jsx';
import items from './items.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';
import trips from './trips.reducers';

const reducer = combineReducers({
  trips,
  items,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
});

export default reducer;
