import { combineReducers } from 'redux';
import packingList from './packingList.reducers.jsx';
import visibilityFilter from './visibilityFilter.reducers.jsx';

const packunoApp = combineReducers({
  packingList,
  visibilityFilter,
});

export default packunoApp;
