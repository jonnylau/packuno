import { combineReducers } from 'redux';
import packingList from './packingList.reducers';
import visibilityFilter from './visibilityFilter.reducers';
import weatherWidget from './weather.reducers';

const packunoApp = combineReducers({
  packingList,
  visibilityFilter,
  weatherWidget,
});

export default packunoApp;
