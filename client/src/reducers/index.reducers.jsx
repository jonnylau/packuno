import { combineReducers } from 'redux';
import items from './items.reducers';
import editItemMode from './editItemMode.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';

const reducer = combineReducers({
  items,
  editItemMode,
  visibilityFilter,
  weatherWidget,
});

export default reducer;
