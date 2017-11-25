import { combineReducers } from 'redux';
import setHistorical from './historical.reducers.jsx';
import setForecast from './forecast.reducers.jsx';
import items from './items.reducers';
import editItemMode from './editItemMode.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';

const reducer = combineReducers({
  items,
  editItemMode,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
});

export default reducer;
