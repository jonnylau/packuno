import { combineReducers } from 'redux';
import packingList from './packingList.reducers.jsx';

const packunoApp = combineReducers({
  packingList,
});

export default packunoApp;
