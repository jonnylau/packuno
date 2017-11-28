import { combineReducers } from 'redux';
import { trips, currentTripId, tripsHasErrored, tripsIsLoading } from './trips.reducers';
import weatherWidget from './weather.reducers';
import setHistorical from './historical.reducers';
import setForecast from './forecast.reducers';
import { items, itemsHasErrored, itemsIsLoading } from './items.reducers';
import { userItems, userItemsHasErrored, userItemsIsLoading } from './userItems.reducers';
import editItemMode from './editItemMode.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import userId from './user.reducers';
import isLoggedIn from './login.reducers';

const reducer = combineReducers({
  trips,
  currentTripId,
  tripsHasErrored,
  tripsIsLoading,
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
  isLoggedIn,
  userId,
});

export default reducer;
