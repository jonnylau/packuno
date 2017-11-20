import { combineReducers } from 'redux';
import packingList from './packingList.reducers.jsx';
import visibilityFilter from './visibilityFilter.reducers.jsx';
import weatherWidget from './weather.reducers.jsx';
const packunoApp = combineReducers({
  packingList,
  visibilityFilter,
  weatherWidget,
});

export default packunoApp;
