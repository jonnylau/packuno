import { combineReducers } from 'redux';
import items from './items.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';

const reducer = combineReducers({
  items,
  visibilityFilter,
  weatherWidget,
});

export default reducer;
