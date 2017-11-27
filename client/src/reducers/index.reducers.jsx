import { combineReducers } from 'redux';
import weatherWidget from './weather.reducers';
import login from './login.reducers';
import setHistorical from './historical.reducers';
import setForecast from './forecast.reducers';
import { items, itemsHasErrored, itemsIsLoading } from './items.reducers';
import { userItems, userItemsHasErrored, userItemsIsLoading } from './userItems.reducers';
import editItemMode from './editItemMode.reducers';
import visibilityFilter from './visibilityFilter.reducers';

const reducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  editItemMode,
  userItems,
  userItemsHasErrored,
  userItemsIsLoading,
  visibilityFilter,
  weatherWidget,
  setHistorical,
  setForecast,
  login,
});

export default reducer;
