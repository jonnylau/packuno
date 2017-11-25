import { combineReducers } from 'redux';
import setHistorical from './historical.reducers';
import setForecast from './forecast.reducers';
import items from './items.reducers';
import { userItemsHasErrored, userItemsIsLoading, userItems } from './loadItems.reducers';
import editItemMode from './editItemMode.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';

const reducer = combineReducers({
  items,
  editItemMode,
  userItemsHasErrored,
  userItemsIsLoading,
  userItems,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
});

export default reducer;
